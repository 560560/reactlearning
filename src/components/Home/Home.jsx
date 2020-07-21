import React from 'react';
import s from "./Home.module.css"
import {Button, Container, Card, CardDeck, CardGroup, ListGroup, Row, Col} from 'react-bootstrap';
import socialScreenshot from "../../assets/images/socialScreenshot.png"
import reactBootstrapScreenshot from "../../assets/images/reactBootstrapScreenshot.png"


const Home = (props) => {
    return (
        <div className={s.homeWrapper}>
        <Container>
            <h2 className="text-center mt-5 pb-4">Learning projects</h2>
            <CardDeck className=" mt-3">
                <Row className="mb-3">

                    <Col xl={6} lg={6} md={12} sm={12} className="d-flex flex-column pb-md-0 pb-sm-5">
                        <Card bg="light" border="info" className="shadow">
                            <Card.Img src={socialScreenshot}
                                      alt="React Social"
                            />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>Social Network</Card.Title>
                                <Card.Text className="mt-3">
                                    In this project I used the following technologies:
                                </Card.Text>
                                <ListGroup variant="flush">
                                    <Row className="text-center font-weight-bold">
                                        {["HTML5", "JavaScript", "React"].map((item, i) => (
                                            <Col xl={4} lg={6} md={12} sm={6} key={i}
                                                 className="pb-lg-3 pb-md-3 pb-sm-3 pb-2"><ListGroup.Item
                                                className={s.listItem}>{item}</ListGroup.Item></Col>
                                        ))}
                                    </Row>
                                </ListGroup>
                                <Card.Text className="mt-2">Additional tools and features used in the
                                    project:</Card.Text>
                                <Card.Text>axios(REST API) | formik | yup | redux | react-redux | redux-thunk |
                                    react-router-dom
                                    | reselect | Hooks | HOCs | React Context | Lazy loading | CSS Modules |
                                    Git</Card.Text>


                                <Row className="border-top pt-3 pb-1" >
                                    <Col className="font-weight-bold">
                                        Social network testing account:
                                    </Col>
                                </Row>
                                <Row className="pb-3 mb-3 border-bottom">
                                    <Col className="col-12 col-sm-7">
                                        Email: free@samuraijs.com

                                    </Col>
                                    <Col className="col-12 col-sm-5">
                                        Password: free
                                    </Col>
                                </Row>


                                <CardGroup className="d-flex justify-content-center mt-auto">
                                    <Button
                                        variant="info"
                                        href="https://social.reactlearning.ru"
                                        target="_blank">Social network</Button>
                                </CardGroup>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6} lg={6} md={12} sm={12} className=" d-flex flex-column">
                        <Card bg="light" border="info" className="shadow">
                            <Card.Img src={reactBootstrapScreenshot}
                                      alt="React Social"
                            />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>React bootstrap training</Card.Title>
                                <Card.Text className="mt-3">
                                    In this project I used the following technologies:
                                </Card.Text>
                                <ListGroup variant="flush">
                                    <Row className="text-center font-weight-bold">
                                        {["HTML5", "JavaScript", "React"].map((item, i) => (
                                            <Col xl={4} lg={6} md={12} sm={6} key={i}
                                                 className="pb-lg-3 pb-md-3 pb-sm-3 pb-2"><ListGroup.Item
                                                className={s.listItem}>{item}</ListGroup.Item></Col>
                                        ))}
                                    </Row>
                                </ListGroup>
                                <Card.Text className="mt-2"> Additional tools and features used in the
                                    project:</Card.Text>
                                <Card.Text> React bootstrap | formik | yup | react-router-dom | Hooks | Git</Card.Text>

                                <div className="d-flex justify-content-center mt-auto"><Button
                                    variant="info"
                                    href="https://bootstrap.reactlearning.ru"
                                    target="_blank">React bootstrap training</Button></div>


                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </CardDeck>
        </Container>
        </div>
    );
}

export default Home;