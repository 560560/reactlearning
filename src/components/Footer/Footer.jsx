import React from 'react';
import s from "./footer.module.css"
import { Container, Navbar} from 'react-bootstrap';
const Footer = (props) => {
    return (
<div className={s.footerWrapper}>
            <Navbar collapseOnSelect expand="md" sticky="bottom"  bg="dark" variant="dark" >
                <Container className="justify-content-center">
                        <div style={{color: "white"}}>All rights reserved. 2020 </div>
                </Container>
            </Navbar>
</div>

    );
}

export default Footer;