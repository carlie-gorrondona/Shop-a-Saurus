import React, {Component} from 'react';
import './styles/Checkout.css';
import {Table, Form, Button, Container, Col, Row} from 'react-bootstrap';

export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
    }  
    componentDidMount() {

        this.setState({
            cart: [{
                id: 1,
                name: 'Carcharodontosaurus',
                quantity: 2,
                price: 500000000
            }, {
                id: 2,
                name: 'Parasaurolophus',
                quantity: 1,
                price: 2000000
            }, {
                id: 3,
                name: 'Utahraptor',
                quantity: 2,
                price: 5000000
            }]
        })
    }
    render() {
        let cartSum = 0;

        for (let i = 0; i < this.state.cart.length; i++) {
            cartSum += (this.state.cart[i].price * this.state.cart[i].quantity);
        }

        return(
            <div className='checkoutwrapper'>
                <div className='checkoutbackgroundoverlay'>
                    <Container>
                        <Row>
                            <Col xs={7}>
                                <h3>Billing Address</h3>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Form.Label>First Name</Form.Label>
                                                    <Form.Control type='name' placeholder='First name'/>
                                                </Col>
                                                <Col>
                                                    <Form.Label>Last Name</Form.Label>
                                                    <Form.Control type='name' placeholder='Last name'/>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="email" placeholder="Email" />
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicAddress">
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Form.Label>Address</Form.Label>
                                                    <Form.Control type="address" placeholder="123 Main St." />
                                                </Col>
                                            </Row>
                                        </Container>  
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicAddress">
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Form.Label>Address 2 (Optional)</Form.Label>
                                                    <Form.Control type="address" placeholder="Apartment, Unit, or Suite" />
                                                </Col>
                                            </Row>
                                        </Container> 
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicAddress">
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Form.Label>Country</Form.Label>
                                                    <Form.Select>
                                                        <option>United States</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col>
                                                    <Form.Label>State</Form.Label>
                                                    <Form.Select>
                                                        <option>TX</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col>
                                                    <Form.Label>Zip</Form.Label>
                                                    <Form.Control placeholder='00000-0000'/>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicAddress">
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Form.Check label='Different Shipping Address'/>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Form.Group>
                                </Form>
                                <br></br>
                                <h3>Payment Information</h3>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicAddress">
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Form.Label>Name on card</Form.Label>
                                                    <Form.Control placeholder='Name as displayed on card'/>
                                                </Col>
                                                <Col>
                                                    <Form.Label>Card number</Form.Label>
                                                    <Form.Control placeholder='0000-0000-0000-0000'/>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicAddress">
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Form.Label>Expiration</Form.Label>
                                                    <Form.Control placeholder='MM/YY'/>
                                                </Col>
                                                <Col>
                                                    <Form.Label>CVV</Form.Label>
                                                    <Form.Control/>
                                                </Col>
                                                <Col>
                                                </Col>
                                                <Col>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Form.Group>
                                    <br></br>
                                    <Form.Group className="mb-3">
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <h6>Please confirm all information is correct before submitting payment.</h6>
                                                    <Button variant='success'>
                                                        Submit Payment
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col>
                                <h3>Cart</h3>
                                <Table striped bordered hover variant='success'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(this.state.cart || []).map(cart => (
                                        <tr>
                                            <td>{cart.id}</td>
                                            <td>{cart.name}</td>
                                            <td>{cart.quantity}</td>
                                            <td>${cart.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <th>Total:</th>
                                            <td>${cartSum.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                                        </tr>
                                    </tfoot>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}