import React from "react";
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar(){


  return(
    <>
  <div className="top-banner">
<div className="container">
  <div className="small-bold-text banner-text"> Want to join a presentation</div>
</div>
  </div>






   <div className="navbar">
    <div className="navbar-logo-container">
      <img src="data:image/png;base64,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"/>
    </div>
        <div className="navbar-links">
         <ul>   
         <li>    <Link  className="links-for-navbar"  to = "/" >Work</Link> </li>

          <li>  <Link  className="links-for-navbar" to="/Education" >Education</Link> </li>

          <li>  <Link className="links-for-navbar"  to="/features" >Features </Link> </li>

          <li>  <Link className="links-for-navbar"  to="/resources" >Resources</Link> </li>

          <li>  <Link  className="links-for-navbar" to="/pricing" >Pricing</Link> </li>

          <li>  <Link  className="links-for-navbar" to="/getaquote">Get a Quote</Link></li>

          <li > <Link  className="links-for-navbar " to="/login">Login </Link></li>
          
          <li> <Link className="links-for-navbar" to="/signup">SignUp</Link></li>

          
         
            </ul>

            
        </div>
     
   </div>
    
    </>
  )
}
export default Navbar;