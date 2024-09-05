import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideos } from '../Services/AllApis';
import { toast } from 'react-toastify';

function AddVideos ({response}) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setVideo({
            videoId: "", title: "", imageUrl: "", videoUrl: ""
        })
    }

    const handleShow = () => setShow(true);

    const [video, setVideo] = useState({
        videoId: "", title: "", imageUrl: "", videoUrl: ""
    });
    console.log(video);
    

    const handleUpload = async () => {
        console.log(video);
        const { videoId, title, imageUrl, videoUrl } = video
        if (!videoId || !title || !imageUrl || !videoUrl) {
            toast.error("Please enter valid input!!");
        } else {
            try {
                const vurl = videoUrl.split("v=")[1]
                console.log(vurl);
                
                const eurl = `https://www.youtube.com/embed/${vurl}?si=Orgz1N5K56UCoxxj&autoplay=1`
                video.videoUrl=eurl

                const res = await addVideos(video)
                console.log(res);
                if (res.status == 201) {
                    toast.success("Upload successfully!!");
                    handleClose();
                    response(res)
                }
                 else
                  {
                    toast.error("Upload failed!");
                }
            }
             catch (err) {
                console.log(err);
                toast.error("Upload failed");
            }
        }
    }



    return (
        <>
            <button className='btn' onClick={handleShow}>
                <i className="fa-solid fa-upload" style={{ color: "#2a7ac6", fontSize: '34px' }} /> UPLOAD YOUR VIDEOS
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Videos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="floatingId" label="Video Id" className="mb-3">
                        <Form.Control type="number" placeholder="1" onChange={(e) => { setVideo({ ...video, videoId: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="vtitle" label="Video Title" className="mb-3">
                        <Form.Control type="text" placeholder="title" onChange={(e) => { setVideo({ ...video, title: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="imgurl" label="Video Image URL" className="mb-3">
                        <Form.Control type="text" placeholder="url" onChange={(e) => { setVideo({ ...video, imageUrl: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="vurl" label="YouTube Video URL" className="mb-3">
                        <Form.Control type="text" placeholder="url" onChange={(e) => { setVideo({ ...video, videoUrl: e.target.value }) }} />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpload}>Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddVideos;
