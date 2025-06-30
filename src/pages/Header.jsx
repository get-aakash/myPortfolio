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
            <li><a href="mailto:mail.aakash108@gmail.com" target="_blank" className="icon-link"><i className="fa-solid fa-envelope"></i></a></li>
            <li><a href='https://github.com/get-aakash' target="_blank" className="icon-link"><i className="fa-brands fa-github"></i></a></li>
            <li><a href='https://www.linkedin.com/in/aakash-acharya/' target="_blank" className="icon-link"><i className="fa-brands fa-linkedin-in"></i></a></li>
        </ul>

    </div>
   </div>
  )
}

export default Header
