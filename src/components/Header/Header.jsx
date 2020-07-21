import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import reactlogo from "../../assets/images/reactlogo.svg"
import {Link} from "react-router-dom";
import s from "./Header.module.css"

const Header = (props) => {
    return (
        <div className={s.headerWrapper}>
            <Navbar collapseOnSelect expand="md"  bg="info" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={reactlogo}
                             height="30"
                             width="30"
                             className="d-inline-block align-top"
                             alt="Logo"
                        />{' '}React Learning!
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/"> Home </Nav.Link>
                            <Nav.Link as={Link} to="/contacts"> Contacts </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export default Header;