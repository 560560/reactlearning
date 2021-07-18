import React, {Fragment} from 'react';
import "./Contacts.css"
import {Container, Card, Row, Col} from 'react-bootstrap';
import {FaFacebook} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import {ReactComponent as Vk} from "../../assets/images/vk.svg";
import {ReactComponent as Viber} from "../../assets/images/viber.svg";


const Contacts = (props) => {
    return (
        <div>
            <Container className="justify-content-center">
                <h2 className="text-center mt-5 mb-5">My contacts</h2>
                <Row className="justify-content-center">
                    <Col xl={6} lg={7} md={9} sm={12}>
                        <Card>
                            <Card.Header as="h5" className="text-center"> Anton Gerasimenko </Card.Header>
                            <Card.Body className="ml-1 ml-md-4 ml-sm-4 mt-3">
                                <Row className="mb-3">
                                    <Col md={4} sm={4} className="col-4">
                                        <Card.Title>E-mail: </Card.Title>
                                    </Col>
                                    <Col md={8} sm={6} className="col-8">
                                        <Card.Text>
                                            samael831@gmail.com
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col md={4} sm={4} className="col-4">
                                        <Card.Title>Phone: </Card.Title>
                                    </Col>
                                    <Col md={8} sm={6} className="col-8">
                                        <Card.Text>
                                            <a style={{
                                                textDecoration: 'none', color: 'inherit'
                                            }} href="tel:+79878621572">+7 987 862 15 72</a>
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col md={4} sm={4} className="col-4">
                                        <Card.Title>Telegram: </Card.Title>
                                    </Col>
                                    <Col md={8} sm={6} className="col-8">
                                        <Card.Text>
                                            <a style={{
                                                textDecoration: 'none', color: 'inherit'
                                            }} href="tg://resolve?domain=Samael777">Samael777</a>
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <div className='buttons'>
                                    {[
                                        {img: <FaFacebook/>, title: 'Facebook', url: "https://www.facebook.com/anton.gerasimenko.108"},
                                        {img: <Vk/>, title: 'VK', url: "https://vk.com/samael56"},
                                        {img: <Viber/>, title: 'Viber', url: "viber://chat?number=79878621572"},
                                        {
                                            img: <IoLogoWhatsapp/>,
                                            title: 'Whatsapp',
                                            url: "whatsapp://send?text=Здравствуйте. Я сейчас на вашем сайте gacv.ru. Есть вопрос: &phone=79878621572&abid=+79878621572"
                                        }
                                    ]
                                        .map((item, i) => (
                                            <div className='contactButtonsItem' key={i}>
                                                <Row className="mb-3 align-self-center justify-content-center">
                                                    <Col md={4} sm={4} className="col-7 text-center" >
                                                        <a href={item.url} target='_blank' rel="noopener noreferrer">{item.img}</a>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3 align-self-center justify-content-center">
                                                    {item.title}
                                                </Row>
                                            </div>
                                        ))
                                    }
                                </div>

                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contacts;