import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import image from "../../resources/logo2.png";
// import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  // const navigate = useNavigate();
  const logoutHandler = ()=>{
      localStorage.clear();
      // navigate('/login')
  }
  return (

     <div className="header-container">
        <Navbar
          style={{ backgroundColor: "#F8F9FA"}}
          expand="lg"
          className="navbar-expand-lg position-fixed w-100 d-flex align-items-center justify-content-around-lg"
        >
            <Container className="d-flex align-items-center justify-content-between w-100">

            <Navbar.Brand href="#home" className="">
              <img src={image} className="img w-25" style={{ mixBlendMode: "multiply" }} />
            </Navbar.Brand>

            <div className="m-0">
                <Nav>
                  <Nav.Link href="/user/dashboard"  className="nav-link me-3">
                    Home
                  </Nav.Link>
                  <Nav.Link href="/" className="nav-link me-3">
                    About
                  </Nav.Link>
                  {user&&user.isAuthenticated? <Nav.Link  className="nav-link me-3" onClick={logoutHandler}>
                    Logout
                  </Nav.Link>: <Nav.Link  className="nav-link me-3">
                    Login
                  </Nav.Link>}

                 
                </Nav>
            </div>

          </Container>
      </Navbar>
   </div>
 
  )
}

export default Topbar


