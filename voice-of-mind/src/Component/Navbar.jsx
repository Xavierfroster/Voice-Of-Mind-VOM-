import React from 'react'
import '../ComponentCss/NavBar.css'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <>
        <div className="topnav sticky-top">
            <h1 align = 'center' className='aname'>{props.title}</h1>
            <div className="arrangement">
              <a className="active" href="/">Home</a>
              <a href="Admin.js">Admin</a>
              <a href="Contact.js">Contact</a>
              <a href="AboutUs.js">About</a>
              <a href='Login.js'>Login</a>
              <a href='Register.js'>Sign Up</a>
            </div><br /><br /><br />
        </div>
    </>
  )
}

Navbar.prototype = {title: PropTypes.string.isRequired};
Navbar.defaultProps = {title : "Set TextHere"};