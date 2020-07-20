import React from 'react';
import {Button, Container, Badge, Card, CardDeck, CardGroup} from 'react-bootstrap';
import socialScreenshot from "../../assets/images/socialScreenshot.png"
import reactBootstrapScreenshot from "../../assets/images/reactBootstrapScreenshot.png"


const Home = (props) => {
    return (
        <Container>
            <h2 className="text-center mt-4 mb-4">Learning projects</h2>
            <CardDeck className="mb-4">
                <Card bg="light" border="info">
                    <Card.Img src={socialScreenshot}
                              alt="React Social"
                    />
                    <Card.Body className="d-flex flex-column">
                        <Card.Title>Social Network</Card.Title>
                        <Card.Text>
                            <p>In this project I used the following technologies:</p>
                            <ul>
                                <li>HTML5</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Redux</li>
                            </ul>
                            <p> Additional tools an features used in the project:</p>
                            <p>axios(REST API), formik, yup, redux, react-redux, reselect, react-router-dom,
                                redux-thunk, Hooks, HOCs, React Context, Lazy loading CSS Modules, Git</p>
                        </Card.Text>
                        <CardGroup className="d-flex justify-content-center mt-auto">
                            <Button
                                variant="primary"
                                href="https://social.reactlearning.ru"
                                target="_blank">Social network</Button>
                        </CardGroup>
                    </Card.Body>

                </Card>


                <Card bg="light" border="primary">
                    <Card.Img src={reactBootstrapScreenshot}
                              alt="React Social"
                    />
                    <Card.Body className="d-flex flex-column">
                        <Card.Title>React bootstrap training</Card.Title>
                        <Card.Text>
                            <p>In this project I used the following technologies:</p>
                            <ul>
                                <li>HTML5</li>
                                <li>JavaScript</li>
                                <li>React</li>
                            </ul>
                            <p> Additional tools an features used in the project:</p>
                            <p> React bootstrap, formik, yup, react-router-dom, Hooks, Git</p>
                        </Card.Text>
                        <div className="d-flex justify-content-center mt-auto"><Button
                            variant="primary"
                            href="https://bootstrap.reactlearning.ru"
                            target="_blank">React bootstrap training</Button></div>


                    </Card.Body>
                </Card>


            </CardDeck>
        </Container>
    );
}

export default Home;