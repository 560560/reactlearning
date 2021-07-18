import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import reactlogo from "../../assets/images/reactlogo.svg"
import {Link} from "react-router-dom";
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <Navbar collapseOnSelect expand="md"  bg="info" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={reactlogo}
                             height="30"
                             width="30"
                             className="d-inline-block align-top mr-2"
                             alt="Logo"
                        />Anton Gerasimenko
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={styles.links}>
                            <Nav.Link as={Link} to="/"> CV </Nav.Link>
                            <Nav.Link as={Link} to="/projects"> My projects </Nav.Link>
                            <Nav.Link as={Link} to="/contacts"> Contacts </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export default Header;