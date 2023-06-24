"use client";

import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">MrEngineer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/" className="nav-link">
              {" "}
              Home
            </Link>
            <Link href="/about" className="nav-link">
              {" "}
              About
            </Link>
            <Link href="/services" className="nav-link">
              {" "}
              Services
            </Link>
            <Link href="/contact" className="nav-link">
              {" "}
              Contact
            </Link>
            <Link href="/blog" className="nav-link">
              {" "}
              Blog
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
