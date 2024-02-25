import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
function Navbarmain({size}) {
  return (
    <Navbar expand="lg"  variant="light" className='fixed-top' bg='light'>
    <Navbar.Brand className="text-danger font-weight-bold font-italic" href="/">
      Foodie Express
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="navbarNav" />

    <Navbar.Collapse id="navbarNav">
      <Nav className="ml-auto">
        <Link to="/login" className="nav-link">
          <Button variant="outline-success" className="rounded-pill mr-2 border-0">
            Login
          </Button>
        </Link>

        <Link to="/signup" className="nav-link">
          <Button variant="outline-danger" className="rounded-pill">
            Sign up
            <span className="">{size}</span>
          </Button>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  )
}

export default Navbarmain