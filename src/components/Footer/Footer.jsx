import React from 'react';

import { Container, Navbar } from 'react-bootstrap';

export const Footer = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" sticky="bottom" bg="dark" variant="dark">
        <Container className="justify-content-center">
          <div style={{ color: 'white' }}>All rights reserved. 2023 </div>
        </Container>
      </Navbar>
    </div>
  );
};
