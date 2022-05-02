import React, {Component} from 'react';
import {Form, Button, Toast, ToastContainer} from 'react-bootstrap';
import './styles/Contact.css';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name: '',
            email: '',
            number: '',
            message: ''
        }
        this.handleToastClose = this.handleToastClose.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleToastClose() {
        
        this.setState({show: false});
    }

    onSubmit() {
        // e.preventDefault();
        this.setState({show: true})
        this.setState({name: '', email: '', number: '', message: ''})
    }

    render() {
        console.log(this.state)
        return (
            <div className='contact' id='contact'>
                <div className='backgroundoverlaycontact'>
                    <Form>
                        <Form.Group className='contactheading'>
                            <h3>Contact Us</h3>
                        </Form.Group>
                        <Form.Group className='contactdesc'>
                            Purchasing real, living dinosaurs sounds too good to be true? It probably is, but if you have any concerns, give us a shout--or a rawr--via the form below.
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>First and Last Name</Form.Label>
                            <Form.Control type="name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} placeholder="Enter full name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type='phone' value={this.state.number} onChange={(e) => this.setState({number: e.target.value})} placeholder='Enter phone number'/>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as='textarea' rows={3} value={this.state.message} onChange={(e) => this.setState({message: e.target.value})} placeholder='Your message'/>
                        </Form.Group>
                        <Button className='formsubmit' onClick={() => this.onSubmit()}>
                            Submit
                        </Button>
                    </Form>
                </div>
                <ToastContainer position='bottom-end'>
                    <Toast
                        bg='success'
                        show={this.state.show} 
                        onClose={() => this.handleToastClose()} 
                        delay={5000}
                        autohide
                    >
                        <Toast.Header>
                            <img src="https://img.icons8.com/ios/50/000000/dinosaur.png" className='dinoheadicon'/>
                            <strong className="me-auto">Form Submitted</strong>
                        </Toast.Header>
                        <Toast.Body>Thank you! We will contact you within 3 business days. <br></br>
                            <a target="_blank" href="https://icons8.com/icon/5042/dinosaur" className='icons8anchortag'>Dinosaur icon by Icons8</a>
                            </Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>
        );
    }
}