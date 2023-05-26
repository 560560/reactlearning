import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Contact } from './components/Contact/Contact';

const contacts = [
  {
    text: 'samael831@gmail.com',
    title: 'E-mail',
  },
  {
    text: '@Samael_front_dev',
    title: 'Telegram',
    href: 'tg://resolve?domain=Samael_front_dev',
  },
  { text: 'Перейти', title: 'LinkedIn', href: 'https://www.linkedin.com/in/anton-gerasimenko/' },
  { text: 'Перейти', title: 'Facebook', href: 'https://www.facebook.com/anton.gerasimenko.108' },
];

export const Contacts = () => {
  return (
    <Container className="justify-content-center">
      <h2 className="text-center mt-5 mb-5">Контакты</h2>
      <Row className="justify-content-center">
        <Col xl={6} lg={7} md={9} sm={12}>
          <Card className="p-3">
            <Card.Body className="p-4">
              {contacts?.map((contact, idx) => (
                <Contact key={idx} contact={contact} />
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
