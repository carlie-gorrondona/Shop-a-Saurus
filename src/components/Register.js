import React, {Component} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

export default class Login extends Component {
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
                    >
                        <Modal.Header closeButton>
                        <Modal.Title>Register</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="email" placeholder="Enter username" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" />
                                </Form.Group>
                                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group> */}
                                <Button variant="success" type="submit">
                                    Login
                                </Button>
                                <Form.Group>
                                    <br></br>
                                    <Form.Label>No Account? Register <a href='#register'>here</a>.</Form.Label>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.props.close()}>
                                Close
                            </Button>
                            {/* <Button variant="primary">Login</Button> */}
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
        );
    }
}