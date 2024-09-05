import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div>
      <div className='container-fluid'>
        <Row>
          <Col className='p-5' sm={12} md={6}>
          <h2>
              <i className="fas fa-play-circle" style={{ color: '#007bff', fontSize: '36px', marginRight: '8px' }}></i>
              Media Player 2024
            </h2>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis error ab totam, neque doloribus dolores perspiciatis enim pariatur quidem accusamus delectus aliquid odio laudantium itaque nisi. Possimus, minima deleniti!
            </p>
            <div className='d-grid'>
              <Link to={'/login'} className='btn btn-primary'>Let's Go</Link>
            </div>
          </Col>
          <Col className='py-4' sm={12} md={6}> 
            <img
              src='https://lh3.googleusercontent.com/rormhrw_yZt2v1OKZBaiFCSt8b8QU02kEKiuilfgnpGkOMQd87xm7b7SyIlGoHsL18M'
              alt='Media Player'
              style={{ maxHeight: '300px', width: 'auto', display: 'block', margin: '0 auto' }}
              className='my-3 text-center'
            />
          </Col>
        </Row>
      </div>

      <div className='container-fluid mt-5'>
        <div className='my-3 text-center' style={{fontSize:'40px'}}>Features</div>
        <div className='p-4 d-flex justify-content-around'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/3c/42/57/3c42571b1949c7e961a9981caa1ea09a.gif" />
            <Card.Body>
              <Card.Title>Manage videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cdn.dribbble.com/users/652746/screenshots/1844317/upload_animation.gif" />
            <Card.Body>
              <Card.Title>Upload Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cdn.dribbble.com/users/1003944/screenshots/4881161/2.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='container-fluid p-5'>
        <Row>
          <Col className='p-5' sm={12} md={6}>
            <h2>
              Simple and Fast
            </h2>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis diam hendrerit, sollicitudin leo non, posuere dolor. Donec efficitur congue ex, sed viverra sem cursus in. In eget venenatis metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec commodo aliquet vestibulum. Morbi mi risus, mattis a tortor at, volutpat faucibus mi. In tempus suscipit ex vitae volutpat.
            </p>
          </Col>
          <Col className='py-4' sm={12} md={6}>
            <iframe
              width="640"
              height="360"
              src="https://www.youtube.com/embed/hOHKltAiKXQ"
              title="Hanumankind – Big Dawgs | Ft. Kalmi (Official Music Video) | Def Jam India"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ width: '100%', maxWidth: '640px', height: '300px' }}
            ></iframe>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Landing;
