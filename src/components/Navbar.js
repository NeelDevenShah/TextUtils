import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
// We have to find why color of the navbar is not changing
export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <img src="1.png" width="10%"></img>
    <a className="navbar-brand" href="/">{props.title}</a>
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
           <a className="nav-link" href="/about">{props.aboutText}</a>
          {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">{props.aboutText}</a>
          {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-4`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">dark Mode</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}
Navbar.propTypes={title : PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultProps={
    title: "Set title here",
    aboutText: "give the text"
}