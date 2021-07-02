import React from "react";
import "./Navigation.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navBar container-fluid">
      <Navbar className="navigation " expand="lg">
        <Navbar.Brand className="mr-auto " to="/">
          <Link to="/" className="title">
            Blogex
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navMain ml-auto">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
            <Link className="nav-link text-white" to="/">
              Blogs
            </Link>
            <Link className="nav-link text-white" to="/admin">
              Admin
            </Link>
            <Link className="nav-link text-white" to="/">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
