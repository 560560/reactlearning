import React from 'react';
import {Button, Container, Badge, Card, Row, Col} from 'react-bootstrap';


const Contacts = (props) => {
    return (
        <Container style={{width: "500px"}}>
            <h2 className="text-center mt-5 mb-5">My contacts</h2>
            <Card >
                <Card.Header as="h5" className="text-center"> Gerasimenko Anton </Card.Header>
                <Card.Body className="ml-4">
                    <Row className="mb-3 mt-3">
                        <Col sm={4}>
                            <Card.Title>E-mail: </Card.Title>
                        </Col>
                        <Col sm={8}>
                            <Card.Text>
                                samael831@gmail.com
                            </Card.Text>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col sm={4}>
                            <Card.Title>Phone: </Card.Title>
                        </Col>
                        <Col sm={8}>
                            <Card.Text>
                                8 987 862 12 72
                            </Card.Text>
                        </Col>
                    </Row>
                    <Row className="mb-3 align-items-center">
                        <Col sm={4} >
                            <Card.Title className="mb-0">Facebook: </Card.Title>
                        </Col>
                        <Col sm={8}>
                            <Card.Text >
                                <Button
                                    variant="info"
                                    href="https://www.facebook.com/anton.gerasimenko.108"
                                    target="_blank">GO</Button>
                            </Card.Text>
                        </Col>
                    </Row>
                    <Row className="mb-3 align-items-center">
                        <Col sm={4}>
                            <Card.Title className="mb-0">VK: </Card.Title>
                        </Col>
                        <Col sm={8}>
                            <Card.Text>
                                <Button
                                    variant="info"
                                    href="https://vk.com/samael56"
                                    target="_blank">GO</Button>
                            </Card.Text>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>


        </Container>
    );
}

export default Contacts;