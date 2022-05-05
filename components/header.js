/** HEADER COMPONENT **/

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="/ggsslogo.svg"
              alt="Guru Gobind Sewa Sansthan"
              width={60}
              height={60}
              placeholder="blurDataURL"
            />
            <p className="d-none"> Guru Gobind Sewa Sansthan </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="justify-content-end">
              
                <Link href="/">
                  <a className="nav-link" > HOME </a>
                </Link>  
                <Link href="/#gallery">
                  <a className="nav-link" > GALLERY </a>
                </Link> 
                <Link href="/#team">
                  <a className="nav-link" > TEAM </a>
                </Link> 
                <Link href="/#contact">
                  <a className="nav-link" > CONTACT </a>
                </Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
