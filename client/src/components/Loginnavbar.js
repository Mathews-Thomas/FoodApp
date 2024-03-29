import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useCart } from './CartContext';
  function Loginnavbar () {
    const { getTotalQuantity } = useCart();
  return (
    <Navbar expand="lg" bg="light" variant="light" className='fixed-top'>
    <Navbar.Brand className="text-danger font-weight-bold font-italic" href="/">
      Foodie Express
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="navbarNav" />

    <Navbar.Collapse id="navbarNav">
      <Nav className="ml-auto">
        <Link to="/login" className="nav-link">
          <Button variant="outline-success" className="rounded-pill mr-2 border-0">
            Log out
          </Button>
        </Link>
        <Link to="/cart" className="nav-link">
          <Button variant="outline-danger" className="rounded-pill">
          Cart ({getTotalQuantity()})
            <span className=""></span>
          </Button>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  )
}

export default Loginnavbar