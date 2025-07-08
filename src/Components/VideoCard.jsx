import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addhistory } from '../Services/AllApis';
import { toast } from 'react-toastify';

// 🔧 Helper to convert shared URL to embed format
const getYouTubeEmbedUrl = (url) => {
    try {
        const videoIdMatch = url.match(/(?:youtu\.be\/|v=)([^&?/]+)/);
        if (videoIdMatch && videoIdMatch[1]) {
            return `https://www.youtube.com/embed/${videoIdMatch[1]}?autoplay=1`;
        }
        return url;
    } catch {
        return url;
    }
};

function VideoCard({ video, cat, deleteVideo }) {
    const [show, setShow] = useState(false);

    const handleDelete = async () => {
        const id = video._id || video.id || video.videoId;
        if (deleteVideo && id) {
            await deleteVideo(id, video);
        } else {
            toast.error("Video ID not found or delete function missing.");
        }
    };

    const handleClose = () => setShow(false);

    const handleShow = async () => {
        setShow(true);
        const dt = new Date();
        const data = {
            videoId: video.videoId,
            title: video.title,
            url: video.videoUrl,
            datetime: dt
        };
        try {
            await addhistory(data);
        } catch (err) {
            console.error("Failed to add history", err);
        }
    };

    const dragHandler = (e) => {
        e.dataTransfer.setData("video", JSON.stringify(video));
    };

    // ✅ Convert URL to embeddable format
    const embedUrl = getYouTubeEmbedUrl(video.videoUrl);

    return (
        <>
            <Card
                style={cat ? { width: '100%' } : { width: "18rem" }}
                className="mt-4"
                onDragStart={dragHandler}
                draggable
            >
                <Card.Img
                    style={{ cursor: "pointer" }}
                    onClick={handleShow}
                    variant="top"
                    src={video?.imageUrl}
                />
                <Card.Body>
                    <Card.Title>{video?.title}</Card.Title>
                    <Button variant="btn" onClick={handleDelete}>
                        <i className="fa-solid fa-trash" style={{ color: "#2a7dd5" }} />
                    </Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{video?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe
                        width="100%"
                        height="315"
                        src={embedUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default VideoCard;
