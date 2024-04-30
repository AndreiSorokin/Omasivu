import React from 'react'
import '../styles/navbar.css'
import img from "../img/logo.svg";

const NavBar = () => {
  return (
    <div>
        <div className="top-line">
        <div className="container container-top">
          <div>
            <div className="logo">
              <img src={img} alt="Logo"/>
            </div>
          </div>
          <div>
            <ul className="main-mnu">
              <li><a href="#">about</a></li>
              <li><a href="#">certificates</a></li>
              <li><a href="#">experience</a></li>
              <li><a href="#">projects</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
