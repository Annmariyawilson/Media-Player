import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-light py-4'>
      <div className='container'>
        <Row className='mb-4'>
          <Col sm={12} md={5}>
            <h2>MEDIAPLAYER 2024</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis error ab totam, neque doloribus dolores perspiciatis enim pariatur quidem accusamus delectus aliquid odio laudantium itaque nisi. Possimus, minima deleniti!
            </p>
          </Col>
          <Col sm={12} md={3}>
            <h2>Links</h2>
            <ul className='list-unstyled'>
              <li><Link to='/'>Landing</Link></li>
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/his'>Watch History</Link></li>
            </ul>
          </Col>
          <Col sm={12} md={4}>
            <h2>Feedback</h2>
            <textarea className='form-control mb-3' placeholder='Your feedback here...'></textarea>
            <button className='btn btn-primary'>Submit</button>
          </Col>
        </Row>
        <div className='text-center'>
          <h6>&copy; 2024 MediaPlayer. All rights reserved.</h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
