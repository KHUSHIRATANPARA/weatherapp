import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link  className="navbar-brand" to="#">
      <img src="../Assets/image/1.jpg" alt="" width="100" height="50" className="d-inline-block align-text-top"/>
     
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/weather">Weather</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Loader">Loader</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Recent">Recent</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Result">Result</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Search">Search</Link>
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
