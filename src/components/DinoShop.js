import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DinoShop.css';
import { Card, CardGroup, Button, Row, Col } from 'react-bootstrap';

export default class DinoShop extends Component {
    render() {
        return (
            <div className="wrapper">
                <h3>Dino Shop</h3>

                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                        <Card>
                            <Card.Img variant="top" src="https://nhmu.utah.edu/sites/default/files/g1835_Utahraptor_1a.jpg" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                </Row>
                {/* <CardGroup>
                    <Card style={{ width: '18rem' }} className="card">
                        <Card.Img variant="top" src="https://nhmu.utah.edu/sites/default/files/g1835_Utahraptor_1a.jpg" />
                        <Card.Body className="cardbody">
                            <Card.Title>Utahraptor</Card.Title>
                            <Card.Text>
                            Dromaeosaur - Carnivore
                            </Card.Text>
                            <Button variant="success">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://i.insider.com/607844354206150018175a4a?width=1136&format=jpeg" />
                        <Card.Body className="cardbody">
                            <Card.Title>Tyrannosaurus Rex</Card.Title>
                            <Card.Text>
                            Therapod - Carnivore
                            </Card.Text>
                            <Button variant="success">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://alchetron.com/cdn/parasaurolophus-9b049e40-616e-4e9b-bb9e-1c47a8eb362-resize-750.jpg" />
                        <Card.Body className="cardbody">
                            <Card.Title>Parasaurolophus</Card.Title>
                            <Card.Text>
                            Hadrosaur - Herbivore
                            </Card.Text>
                            <Button variant="success">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </CardGroup> */}
                
                
                {/* <Button className='seemorebutton' variant="outline-dark">See More ></Button> */}
            </div>
        );
    }
}