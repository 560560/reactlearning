import React from 'react';
import {Button, Container, Card, Row, Col} from 'react-bootstrap';


const Contacts = (props) => {
    return (
        <Container className="justify-content-center">
            <h2 className="text-center mt-5 mb-5">My contacts</h2>
            <Row className="justify-content-center">
                <Col xl={6} lg={7} md={9} sm={12}>
                    <Card>
                        <Card.Header as="h5" className="text-center"> Gerasimenko Anton </Card.Header>
                        <Card.Body className="ml-1 ml-md-4 ml-sm-4">
                            <Row className="mb-3 mt-3">
                                <Col md={4} sm={4} className="col-4">
                                    <Card.Title>E-mail: </Card.Title>
                                </Col>
                                <Col md={8} sm={6} className="col-8">
                                    <Card.Text>
                                        samael831@gmail.com
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={4} sm={4} className="col-4">
                                    <Card.Title>Phone: </Card.Title>
                                </Col>
                                <Col md={8} sm={6} className="col-8">
                                    <Card.Text>
                                        8 987 862 12 72
                                    </Card.Text>
                                </Col>
                            </Row>
                            {[
                                { title: "Facebook: ", url: "https://www.facebook.com/anton.gerasimenko.108" },
                                { title: "VK: ", url: "https://vk.com/samael56"}]
                                .map((item, i) => (
                                    <Row className="mb-3 align-items-center" key={i}>
                                        <Col md={4} sm={4} className="col-7">
                                            <Card.Title className="mb-0">{item.title}</Card.Title>
                                        </Col>
                                        <Col md={8} sm={6} className="col-5">
                                            <Button
                                                variant="info"
                                                href={item.url}
                                                target="_blank">GO</Button>
                                        </Col>
                                    </Row>
                            ))
                            }

                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    );
}

export default Contacts;