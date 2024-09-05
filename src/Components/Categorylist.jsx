import React, { useEffect, useState } from 'react'
import { getCategory, updateCategory } from '../Services/AllApis'
import { toast } from 'react-toastify'
import VideoCard from './VideoCard'

function Categorylist() {
    const [categorylist, setCategorylist] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const result = await getCategory()
        if (result.status === 200) {
            setCategorylist(result.data)
        }
    }

    const deleteVideoFromCategory = async (categoryId, videoId) => {
        const category = categorylist.find(cat => cat.id === categoryId)
        if (category) {
            category.videos = category.videos.filter(video => video.id !== videoId)
            const result = await updateCategory(categoryId, category)
            if (result.status === 200) {
                toast.success("Video removed from category successfully")
                getData()
            } else {
                toast.error("Failed to remove video from category")
            }
        }
    }

    const dragHandler = async (e, category) => {
        const vid = JSON.parse(e.dataTransfer.getData("video"))
        category.videos.push(vid)
        const result = await updateCategory(category.id, category)
        if (result.status === 200) {
            toast.success(`${vid.title} video added to ${category.title}`)
            getData()
        } else {
            toast.error("Failed to add video to category")
        }
    }

    const dragOverhandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className='container-fluid border border-3 border-light p-2 mt-3'>
            {categorylist.length > 0 ? (
                <div>
                    {categorylist.map(item => (
                        <div className='border m-1' key={item.id}>
                            <div className='m-2 p-3 d-flex justify-content-between' onDragOver={dragOverhandler} onDrop={(e) => dragHandler(e, item)}>
                                <h3>{item.title}</h3>
                            </div>
                            <div className='border border-light'>
                                {item.videos.length > 0 && item.videos.map(vid => (
                                    <VideoCard key={vid.id} video={vid} cat={true} deleteVideo={() => deleteVideoFromCategory(item.id, vid.id)} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <h2>No Categories</h2>
            )}
        </div>
    )
}

export default Categorylist
