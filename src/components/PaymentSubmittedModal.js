import React, {Component} from 'react';
import {Modal, Spinner, Button} from 'react-bootstrap';

export default class PaymentSubmittedModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {  

        let modalBodyText = () => {
            if (this.props.showSpinner) {
                return (
                    <div>
                        <Spinner animation="border" role="status" variant='success'></Spinner>
                        <br></br>
                        Payment Processing...
                    </div>
                )
            } else {
                return (
                    <div>
                        Thank you! Email confirmation will be sent shortly.
                        <br></br>
                        You will be redirected to the home page in 5 seconds.
                    </div>
                )
            }
        } 


        return(
            <div>
                <Modal show={this.props.show} onHide={() => this.props.close()}>
                    <Modal.Header>
                        <Modal.Title>Payment Submitted</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            modalBodyText()
                        }
                    </Modal.Body>
                    <Modal.Body>
                        
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}