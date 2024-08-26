import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function VideoCard() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{cursor:"pointer"}} onClick={handleShow} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHg4DMLS100P7cpvZm3I3NmN7NC_rOksKS3sGer7ecXhrTDSvsE6foaMxBrjuiDmo6W1A&usqp=CAU" />
      <Card.Body>
        <Card.Title>BIg DAWGS</Card.Title>
    
        <Button variant="btn">
        <i className="fa-solid fa-trash" style={{color: "#2a7dd5",}} />
        </Button>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Big dawgs</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="315" src="https://www.youtube.com/embed/hOHKltAiKXQ?si=KsWvwjtVyGcq7E9z&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default VideoCard