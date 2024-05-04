import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import img from "../img/logo.svg";

const NavBar = () => {
  return (
    <div>
        <div className="top-line">
        <div className="container container-top">
          <div>
            <Link to='/'>
              <div className="logo">
                <img src={img} alt="Logo"/>
              </div>
            </Link>
          </div>
          <div>
            <ul className="main-mnu">
              <li><Link to='/about'>about</Link></li>
              <li><Link to='/certificates'>certificates</Link></li>
              <li><Link to='/experience'>experience</Link></li>
              <li><Link to='/skills'>skills</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
