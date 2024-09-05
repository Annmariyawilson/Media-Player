import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategory } from '../Services/AllApis';
import Categorylist from './Categorylist';

function Category() {

    const [show, setShow] = useState(false);
    const [category,setCategory]=useState({
    categoryId:"",title:"",videos:[]
    })
    const handleCategory=async()=>{
      console.log(category);
      const {categoryId,title}=category
      if(!categoryId || !title){
        toast.warning("Enter valid Inputs!")
      }
      else{
        const result=await addCategory(category)
        console.log(result);
        if(result.status==201){
          toast.success("Category Added!")
          handleClose()
          setCategory({
            categoryId:"",title:"",videos:[]
          })
        }
        else{
          toast.error("Categoryn adding is failed!")
        }
        
      }
      
    }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <div className='d-grid'>
     <button className='btn btn-primary' onClick={handleShow}>Add Category
     </button>
     <div className='border-3 border-white'>
      <Categorylist/>
     </div>
     </div>

            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="Category Id"label="Category Id"className="mb-3">
                        <Form.Control type="number"onChange={(e)=>{setCategory({...category,categoryId:e.target.value}) }} placeholder="1" />
                    </FloatingLabel>
                    <FloatingLabel controlId="Category Name" label="Category Name"className="mb-3">
                        <Form.Control type="text" onChange={(e)=>{setCategory({...category,title:e.target.value}) }} placeholder="title" />
                    </FloatingLabel>
                   
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category