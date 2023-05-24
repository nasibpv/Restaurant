import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div><Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://i.postimg.cc/QNgsxtPy/357957c41b7e17be0d9f1de15403ae2a-png-wh860.png"
          width="30"
          height="35"
          className="d-inline-block align-top"
        />{' '}
        All In Restaurant
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header