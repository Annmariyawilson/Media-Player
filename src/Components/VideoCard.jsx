import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addhistory } from '../Services/AllApis';
import { toast } from 'react-toastify';

function VideoCard({ video, response, cat, deleteVideo }) {
    const [show, setShow] = useState(false);

    const handleDelete = async () => {
        if (deleteVideo) {
            deleteVideo();
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true);
        const dt = new Date()
        const data = { videoId: video.videoId, title: video.title, url: video.videoUrl, datetime: dt }
        const result = await addhistory(data)
    }

    const dragHandler = (e) => {
        e.dataTransfer.setData("video", JSON.stringify(video))
    }

    return (
        <>
            <Card style={cat ? { width: '100%' } : { width: "18rem" }} onDragStart={dragHandler} draggable>
                <Card.Img style={{ cursor: "pointer" }} onClick={handleShow} variant="top" src={video?.imageUrl} />
                <Card.Body>
                    <Card.Title>{video?.title}</Card.Title>
                    <Button variant="btn" onClick={handleDelete}>
                        <i className="fa-solid fa-trash" style={{ color: "#2a7dd5", }} />
                    </Button>
                </Card.Body>
            </Card>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{video?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="315" src={video.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default VideoCard
