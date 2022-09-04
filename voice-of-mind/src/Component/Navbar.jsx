import React from 'react'
import '../ComponentCss/NavBar.css'
export default function Navbar() {
  return (
    <>
        <div className="topnav sticky-top">
            <h1 align = 'center' className='aname'>Voice Of Mind</h1>
            <a className="active" href="/">Home</a>
            <a href="#news">Services</a>
            <a href="Contact.js">Contact</a>
            <a href="AboutUs.js">About</a>
            <a href='Login.js'>Login</a>
            <a href='Register.js'>Sign Up</a>
        </div>
    </>
  )
}
