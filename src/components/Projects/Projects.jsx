import React from 'react';
import { Button, Container, Card, CardDeck, CardGroup, ListGroup, Row, Col } from 'react-bootstrap';
import leasingScreenshot from '../../assets/images/leasingScreenshot.png';
import starwarsScreenshot from '../../assets/images/starwarsScreenshot.png';
import messagesScreenshot from '../../assets/images/messagesScreenshot.png';
import ReactPlayer from 'react-player';
import rn from '../../assets/video/rn.mp4';

const Projects = () => {
  return (
    <div>
      <Container className="homeContainer">
        <h2 className="text-center mt-5 pb-4">My projects</h2>
        <CardDeck className=" mt-3">
          <Row className="mb-3 justify-content-center">
            <Col
              xl={4}
              lg={6}
              md={12}
              sm={12}
              className="d-flex flex-column pb-md-0 pb-sm-5 project"
            >
              <Card bg="light" border="info" className="shadow mb-4">
                <Card.Img src={starwarsScreenshot} alt="React Star Wars" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Star Wars with requests to SWAPI.dev</Card.Title>
                  <Card.Text className="mt-3">
                    {' '}
                    In this project I used the following technologies:
                  </Card.Text>
                  <ListGroup variant="flush">
                    <Row className="text-center font-weight-bold justify-content-center">
                      {['HTML5', 'JavaScript', 'React'].map((item, i) => (
                        <Col
                          key={i}
                          className="col-xl-5 col-lg-6 col-md-4 col-sm-4react col-12 pb-lg-3 pb-md-3 pb-sm-3 pb-2"
                        >
                          <ListGroup.Item className="listItem">{item}</ListGroup.Item>
                        </Col>
                      ))}
                    </Row>
                  </ListGroup>

                  <Card.Text className="mt-2">
                    Additional tools and features used in the project:
                  </Card.Text>
                  <Card.Text className="techDescription">
                    axios | Hooks | HOCs | redux | react-redux | redux-thunk | node-saas |
                    sass-loader | React Context | react-router-dom | react-router-last-location |
                    git
                  </Card.Text>

                  <CardGroup className="d-flex justify-content-center mt-auto">
                    <Button variant="info" href="https://starwars.gacv.ru" target="_blank">
                      Star Wars
                    </Button>
                  </CardGroup>
                </Card.Body>
              </Card>
            </Col>

            <Col
              xl={4}
              lg={6}
              md={12}
              sm={12}
              className="d-flex flex-column pb-md-0 pb-sm-5 project"
            >
              <Card bg="light" border="info" className="shadow mb-4">
                <Card.Img src={leasingScreenshot} alt="Leasing company" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Leasing company</Card.Title>
                  <Card.Text className="mt-3">
                    In this project I used the following technologies:
                  </Card.Text>
                  <ListGroup variant="flush">
                    <Row className="text-center font-weight-bold justify-content-center">
                      {['HTML5', 'JavaScript', 'React'].map((item, i) => (
                        <Col
                          key={i}
                          className="col-xl-5 col-lg-6 col-md-4 col-sm-4 col-12 pb-lg-3 pb-md-3 pb-sm-3 pb-2"
                        >
                          <ListGroup.Item className="listItem">{item}</ListGroup.Item>
                        </Col>
                      ))}
                    </Row>
                  </ListGroup>

                  <Card.Text className="mt-2">
                    Additional tools and features used in the project:
                  </Card.Text>
                  <Card.Text className="techDescription">
                    axios | formik | yup | react-router-dom | reselect | Hooks | HOCs | swiper |
                    react-yandex-maps | SASS | react-icons | emailJS | git
                  </Card.Text>

                  <CardGroup className="d-flex justify-content-center mt-auto">
                    <Button variant="info" href="https://rtl56.gacv.ru" target="_blank">
                      Leasing company
                    </Button>
                  </CardGroup>
                </Card.Body>
              </Card>
            </Col>

            <Col
              xl={4}
              lg={6}
              md={12}
              sm={12}
              className="d-flex flex-column pb-md-0 pb-sm-5 project"
            >
              <Card bg="light" border="info" className="shadow mb-4">
                <Card.Img src={messagesScreenshot} alt="React Social" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Messages</Card.Title>
                  <Card.Text className="mt-3">
                    In this project I used the following technologies:
                  </Card.Text>
                  <ListGroup variant="flush">
                    <Row className="text-center font-weight-bold justify-content-center">
                      {['HTML5', 'TypeScript', 'React'].map((item, i) => (
                        <Col
                          key={i}
                          className="col-xl-5 col-lg-6 col-md-4 col-sm-4 col-12 pb-lg-3 pb-md-3 pb-sm-3 pb-2"
                        >
                          <ListGroup.Item className="listItem">{item}</ListGroup.Item>
                        </Col>
                      ))}
                    </Row>
                  </ListGroup>
                  <Card.Text className="mt-2">
                    {' '}
                    Additional tools and features used in the project:
                  </Card.Text>
                  <Card.Text className="techDescription">
                    {' '}
                    ant design | redux | react-redux | redux-thunk |
                    react-router-dom | react-infinite-scroll-component | dayjs | hooks | SCSS | git
                  </Card.Text>

                  <div className="d-flex justify-content-center mt-auto">
                    <Button variant="info" href="https://messages.gacv.ru" target="_blank">
                      Messages
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col
              xl={6}
              lg={6}
              md={12}
              sm={12}
              className="d-flex flex-column pb-md-0 pb-sm-5 project"
            >
              <Card bg="light" border="info" className="shadow mb-4">
                <div className="rnWrapper">
                  <div className="rnVideoWrapper">
                    <ReactPlayer
                      url={rn}
                      controls={true}
                      playing={false}
                      width={'100%'}
                      height={'auto'}
                    />
                  </div>
                  <div>
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>React Native Task List</Card.Title>
                      <Card.Text className="mt-3">
                        In this project I used the following technologies:
                      </Card.Text>
                      <ListGroup variant="flush">
                        <div className="font-weight-bold mainTech ">
                          {['JavaScript', 'React Native', 'Node JS', 'MongoDB', 'Express'].map(
                            (item, i) => (
                              <div key={i} className=" pb-lg-3 pb-md-3 pb-sm-3 pb-2">
                                <ListGroup.Item className="listItem">{item}</ListGroup.Item>
                              </div>
                            )
                          )}
                        </div>
                      </ListGroup>
                      <Card.Text className="mt-2">
                        {' '}
                        Additional tools and features used in the project:
                      </Card.Text>
                      <Card.Text className="techDescription">
                        {' '}
                        axios | formik | yup | redux | react-redux | redux-thunk | redux-persist |
                        moment | lodash | git
                      </Card.Text>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </CardDeck>
      </Container>
    </div>
  );
};

export default Projects;
