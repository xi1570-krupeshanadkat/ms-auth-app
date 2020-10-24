import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <p className="navbar-brand my-0">MS Auth</p>
        <div className="navbar-nav">
          <NavLink className="nav-link mx-3" to="/login">Login</NavLink>
          <NavLink className="nav-link mx-3" exact to="/">Dashboard</NavLink>
          <button className="nav-link mx-3 btn btn-link py-0">Logout</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar