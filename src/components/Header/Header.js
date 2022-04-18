import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo/logo-8.png'
import './Header.css'

const Header = () => {
   const [user] = useAuthState(auth);

   const handleSignOut = () => {
     signOut(auth);
   };
    return (
      <Navbar className='navber'
        collapseOnSelect
        expand="lg"
        sticky="top"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className='d-flex justify-content-center align-items-center'>
            <img src={logo} height="30" alt="" />
            <h6 className='my-2 px-2'>salma's photography</h6>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <nav>
                {user ? 
                  <button
                    className="btn btn-link text-white"
                    onClick={handleSignOut}>
                    sign out
                  </button>
                   : 
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                }
              </nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};
    


export default Header;