import React, {Component} from 'react';
import './styles/Checkout.css';
import {Table, Form, Button, Container, Col, Row} from 'react-bootstrap';
import PaymentSubmittedModal from './PaymentSubmittedModal';
import DinosaurService from '../services/DinosaurService';
import { Navigate } from "react-router-dom"

export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            showPaymentModal: false,
            showSpinner: true,
            redirectToShop: false,
        }
        this.handlePaymentModalClose = this.handlePaymentModalClose.bind(this)
        this.handleShowPaymentModal = this.handleShowPaymentModal.bind(this)
    }  
    componentDidMount() {
        if (localStorage.getItem('cart') === null) {
            this.setState({
                cart: [], 
                dinosaurs: []
            });
        } else {
            const cart = JSON.parse(localStorage.getItem('cart'));
            console.log("Load Checkout cart date", cart)

            this.setState({
                cart: cart, 
            });
        }
    }
    handlePaymentModalClose() {
        this.setState({
            showPaymentModal: false, 
            showSpinner: true
        });
    }
    handleShowPaymentModal() {
        this.setState({showPaymentModal: true})

        if (this.state.cart.length !== 0) {

            // time to buy my dinos :D
            DinosaurService.buyDinosaur(this.state.cart).then((res) => {
                console.log(res.data)
    
                setTimeout(function(){ 
                        this.setState({showSpinner: false})
                }.bind(this), 5000);
            }).catch(error => {
                console.error('There was an error!', error);
            });
            
            // Empty my cart for more babies
            localStorage.setItem('cart', JSON.stringify([]));
            this.setState({
                cart: [], 
            });

            setTimeout(function(){ 
                localStorage.removeItem('dinosaurs');
                this.handlePaymentModalClose()
                this.setState({
                    redirectToShop: true
                })
            }.bind(this), 10000);
        }
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
                                                    <Button disabled={(this.state.cart.length === 0)}variant='success' onClick={() => this.handleShowPaymentModal()}>
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
                                            <th>Quantity</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(this.state.cart || []).map(cart => (
                                        <tr key={cart.id}>
                                            <td>{cart.quantity}</td>
                                            <td>{cart.name}</td>
                                            <td>${(cart.price * cart.quantity).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <th>Total:</th>
                                            <td>${cartSum.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                                        </tr>
                                    </tfoot>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                    <PaymentSubmittedModal show={this.state.showPaymentModal} showSpinner={this.state.showSpinner} close={this.handlePaymentModalClose} />
                    {this.state.redirectToShop && <Navigate to='/' replace={true} />}
                </div>
            </div>
        );
    }
}