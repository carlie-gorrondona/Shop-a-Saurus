import React, {Component} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import UserService from '../services/UserService';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            email: "",
            password: "",
            user: {},
        };

        this.onLogin = this.onLogin.bind(this);
    }

    onLogin() {
        // e.preventDefault();
        this.setState({show: false})

        var request = {
            email: this.state.email,
            password: this.state.password
        }

        console.log(request)
        UserService.loginUser(request).then((res) => {
            
            this.setState({user: res.data[0]});
            localStorage.setItem('user', JSON.stringify(res.data[0]));

            console.log(res.data[0])
            window.location.reload();
        }).catch(error => {
            console.error('There was an error!', error);
        });
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
                        <Modal.Title>Login</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} placeholder="Enter password" />
                                </Form.Group>
                                <Button variant="success" onClick={() => this.onLogin()}>
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
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
        );
    }
}