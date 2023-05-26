import React from 'react';
import styles from './Contact.module.scss';
import { Card, Col, Row } from 'react-bootstrap';

export const Contact = React.memo(({ contact }) => {
  const { href, text, title } = contact;

  return (
    <Row className={styles.contact}>
      <Col md={3} sm={4} className="col-4">
        <Card.Title>{title}: </Card.Title>
      </Col>
      <Col md={9} sm={9} className="col-8">
        <Card.Text>
          {href ? (
            <a className={styles.link} target="_blank" href={href} rel="noreferrer">
              {text}
            </a>
          ) : (
            <span>{text}</span>
          )}
        </Card.Text>
      </Col>
    </Row>
  );
});
