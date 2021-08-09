import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {

return (
<nav className="navbar navbar-expand-lg navbar-light bg-success p-3 mb-3">
  <a className="navbar-brand text-light" href="#">Ahmed Khamdan</a>
 {/* <img src="https://pngimg.com/uploads/dice/dice_PNG49.png" width className="navbar-brand"/> */}
  <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span   className="navbar-toggler-icon"></span>
  </button>
  <div  className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="nav navbar-nav">
      <Link  className="nav-item nav-link text-light" to="/" >Home</Link>
      {['Work'].map((x) => <Link
      className="nav-link nav-link text-light"
        to={"/"+x}  >{x}</Link>  
      )}
    </div>
  </div>
</nav>
    )
}