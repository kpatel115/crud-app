import React from 'react'
import "./Nav.css"
const Nav = () => {
  return (
    <div className='nav'>
        <h1>Car Collection</h1>
        <ul>
           <li><a href='#'>Home</a></li> 
           <li><a href='#'>Add a Car</a></li> 
           <li><a href='#'>Login</a></li> 
           <li><a href='#'>Signup</a></li> 
        </ul>
    </div>
  )
}

export default Nav