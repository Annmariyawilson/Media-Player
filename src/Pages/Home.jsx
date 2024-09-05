import React,{useState,useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Category from '../Components/Category'
import Videos from '../Components/Videos'
import Addvideos from '../Components/Addvideos'
import { Link } from 'react-router-dom'

function Home() {

  const [addResponse,setAddResponse]=useState("")
  const [username,setUsername]=useState("")
  useEffect(()=>{
    const  user=JSON.parse(sessionStorage.getItem('userData'))
    setUsername(user?.username)
  },[])
  return (
    <>
    <h2>Welcome {username}</h2>
    <div className='d-flex justify-content-between p-4'>
      <h1>Videos</h1>
      <Link to={'/his'}>Watch History</Link>
    </div>
      <div className='container-fluid'>
        <Row>
          <Col sm={12} md={1}>
          <Addvideos response={setAddResponse}/>
          </Col>
          <Col sm={12} md={8}>
            <Videos add={addResponse}/>
          </Col>
          <Col sm={12} md={3}>
            <Category />
          </Col>

        </Row>
      </div>
    </>
  )
}

export default Home