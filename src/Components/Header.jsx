import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" style={{ fontSize: '24px' }}>
          <i className="fas fa-play-circle" style={{ color: '#007bff', fontSize: '24px', marginRight: '8px' }}></i>
          Media Player
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
