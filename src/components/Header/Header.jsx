import React from 'react';
import cn from 'classnames';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/rocket.svg';
import styles from './Header.module.css';

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.headerWrapper}>
      <Navbar collapseOnSelect expand="md" bg="info" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              height="26"
              width="26"
              className="d-inline-block align-top mr-2"
              alt="Logo"
            />
            Anton Gerasimenko
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={styles.links}>
              <Nav.Link
                className={cn({ active: pathname === '/projects' })}
                as={Link}
                to="/projects"
              >
                My projects
              </Nav.Link>
              <Nav.Link
                className={cn({ active: pathname === '/contacts' })}
                as={Link}
                to="/contacts"
              >
                Contacts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
