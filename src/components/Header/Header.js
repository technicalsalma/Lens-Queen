import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

import './Header.css'

const Header = () => {
   const [user] = useAuthState(auth);

   const handleSignOut = () => {
     signOut(auth);
   };
    return (
      <Navbar
        className="navber"
        collapseOnSelect
        expand="lg"
        sticky="top"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="title-logo">
            <h6 className=" px-2">
              Lens <span>Queen</span>
            </h6>
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
                {user ? (
                  <button
                    className="btn btn-link text-white text-decoration-none bg-danger"
                    onClick={handleSignOut}
                  >
                    sign out
                  </button>
                ) : (
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                )}
              </nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};
    


export default Header;