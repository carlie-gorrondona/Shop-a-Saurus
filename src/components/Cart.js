import React, {Component} from 'react';
import {Button, Modal, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
    render() {
        return (
            <div>
                <>
                    <Modal
                        show={this.props.show}
                        onHide={() => this.props.close()}
                        backdrop="static"
                        keyboard={false}
                        size='lg'
                    >
                        <Modal.Header closeButton>
                        <Modal.Title>Your Cart</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {(this.props.cart || []).map(cart => (
                                        <tr key={cart.id}>
                                            <td>{cart.name}</td>
                                            <td>{cart.quantity}</td>
                                            <td>${(cart.price * cart.quantity).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                                            <td><Button variant='danger' onClick={() => this.props.removeCartItem(cart.id)}>Remove</Button></td>
                                        </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.props.close()}>
                                Close
                            </Button>
                            <Button variant="success" to='/checkout' as={Link} onClick={() => this.props.close()}>Go to Checkout</Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
        );
    }
}