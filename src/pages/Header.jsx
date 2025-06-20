import React from 'react'

const Header = () => {
  return (
   <div className="navbar">
    <div className="left">
        <ul>
            <li>Aakash Acharya</li>
            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
        </ul>
    </div>
    <div className="right">
        <ul>
            <li><i className="fa-solid fa-envelope"></i></li>
            <li><i className="fa-brands fa-github"></i></li>
            <li><i className="fa-brands fa-linkedin-in"></i></li>
        </ul>

    </div>
   </div>
  )
}

export default Header
