import React, {Component} from 'react';
import {Button, Modal, Table} from 'react-bootstrap';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
    render() {
        console.log("cart:", this.props.cart)
        return (
            <div>
                <>
                    <Modal
                        show={this.props.show}
                        onHide={() => this.props.close()}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                        <Modal.Title>Your Cart</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td></td>
                                        <td></td>
                                        <td></td> 
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.props.close()}>
                                Close
                            </Button>
                            <Button variant="success">Go to Checkout</Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
        );
    }
}