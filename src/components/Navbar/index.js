import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link style={{fontSize:18, padding:20}} to="/">Home</Link>
      <Link style={{fontSize:18, padding:20}} to="/contact">Contact</Link>
      <Link style={{fontSize:18, padding:20}} to="/users">Users</Link>
    </div>
  )
}

export default Navbar;