import React from 'react'

const Header = () => {
  return (
   <div className="navbar">
    <div className="left">
        <ul>
            <li><a href='#home' className="icon-link">Aakash Acharya</a></li>
            <li><a href='#home' className="icon-link">Home</a></li>
            <li><a href='#about' className="icon-link">About</a></li>
            <li><a href='#projects' className="icon-link">Projects</a></li>
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
