import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useEffect, useRef, useState } from "react";
import "./Stylenav.css";

function NavScrollExample() {
  return (
    <div className='entirenav' >
      <div className='navtop'>
        <h3>OIS</h3>
        <img className='img1'  src="https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/screenshot-2023-01-23-at-8-32-1.png"/>
        <img className='img2' src="https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/iconsax-linear-usersquare.svg"/>
        <h4 href="">SIGN UP</h4>

      </div>
      <Navbar  className="display" bg='#b7ff5d' expand="lg">
       <Container className="display d-flex justify-content-between" fluid >
        <h7>OIS</h7>
         <Navbar.Toggle aria-controls="navbarScroll" />
         <Navbar.Collapse id="navbarScroll" placement="end">
           <Nav className="display"           
             style={{ maxHeight: '200px'}}
             navbarScroll
           >
             <Nav.Link href="#action1" >Home</Nav.Link>
             <Nav.Link href="#action2">The Facility</Nav.Link>
             <Nav.Link  href="#action3" >Memberships</Nav.Link>
             <Nav.Link href="#action6" >Battling Cages</Nav.Link>
             <Nav.Link href="#action4" >Programs & Events</Nav.Link>
             <Nav.Link href="#action5" >Contact Us</Nav.Link>
             <Nav.Link className='signuptoggler' href="#action7">Sign Up</Nav.Link>
             
            
           </Nav>
          
         </Navbar.Collapse>
       </Container>
     </Navbar>
    </div>
    
    
  );
}
/* <nav className="navbar navbar-expand-lg navbar-light bg-light ">
<div className="container-fluid">
  <a className="navbar-brand" href="#"></a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between">
      <li className="nav-item px-4">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li className="nav-item px-4">
        <a className="nav-link" href="#action1">The Facility</a>
      </li>
      <li className="nav-item px-4">
        <a className="nav-link" href="#action2">Memberships</a>
      </li>
      <li className="nav-item px-4">
        <a className="nav-link" href="#action3">Battling Cages</a>
      </li>
      <li className="nav-item px-4">
        <a className="nav-link" href="#action4">Programs & Events</a>
      </li>
      <li className="nav-item px-4">
        <a className="nav-link" href="#action5">Contact Us</a>
      </li>
      
    </ul>
 
  </div>
</div>
</nav>
  );
} */

export default NavScrollExample;