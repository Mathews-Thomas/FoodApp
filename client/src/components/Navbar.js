import React from 'react'
import { Link } from 'react-router-dom';
function Navbar({size}) {
  return (
    <div>
        <nav className="navbar navbar-light">
  <a className="navbar-brand text-danger font-weight-bold font-italic" href="">
    FOOD APP
  </a>
  <div>
    <Link to="/login">
      {" "}
      <button
        className="btn btn-outline-success rounded-pill mr-2 border-0"
        type="submit"
      >
        LOGIN
      </button>
    </Link>
    <a href=''>
      <button className="btn btn-outline-danger rounded-pill" type="submit">
        CART
         <span>{size}</span></button>
    </a >
  </div>
</nav>

    </div>
  )
}

export default Navbar