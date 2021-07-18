import React from 'react';

import { Container, Navbar} from 'react-bootstrap';
const Footer = () => {
    return (
<div>
            <Navbar collapseOnSelect expand="md" sticky="bottom"  bg="dark" variant="dark" >
                <Container className="justify-content-center">
                        <div style={{color: "white"}}>All rights reserved. 2021 </div>
                </Container>
            </Navbar>
</div>

    );
}

export default Footer;