import React, {Component, useState} from 'react';
import {Button, Modal, Image, InputGroup, Form} from 'react-bootstrap';
import './styles/DinoInfoPage.css';


export default class DinoInfoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show: false,
          quantity: 1, 
          disableDec: true, 
          disableInc: false
        };
    
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(max) {
        const plusState = this.state.quantity + 1;
        if (this.state.quantity < max){
            this.setState({quantity: plusState});
            this.setState({disable: false});
        }
        if (this.state.quantity == (max - 1)) {
            this.setState({disableInc: true});
        }
        if (this.state.quantity == 1) {
            this.setState({disableDec: false});
        }
    }

    decrement(max) {
        const minusState = this.state.quantity - 1;
        if (this.state.quantity > 1) {
                this.setState({quantity: minusState });
            if (this.state.quantity == 1 + 1) {
                this.setState({disableDec: true});
            }
        } else {
            this.setState({quantity: 1});
        }
        if (this.state.quantity == max) {
            this.setState({disableInc: false});
        }
    }
    
    render() {
        const { disableDec, disableInc } = this.state;

        return(
            <div>
                <Modal show={this.props.show} size='lg' onHide={() => this.props.close()}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.dinosaur.dino_name}</Modal.Title>
                        {/* <p>{this.props.dinosaur.dino_era} {this.props.dinosaur.dino_diet}</p> */}
                    </Modal.Header>
                    <Image src={this.props.dinosaur.dino_image} className="img-fluid"/>
                    <Modal.Body>
                        <h5>${this.props.dinosaur.dino_price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h5>
                        <br></br>
                        <h6>Era: {this.props.dinosaur.dino_era}</h6>         
                        <h6>Size: {this.props.dinosaur.dino_size}</h6>
                        <h6>Diet: {this.props.dinosaur.dino_diet}</h6>
                        <br></br>
                        {this.props.dinosaur.dino_info} 
                    </Modal.Body>
                    <Modal.Footer>
                        Quantity:
                        <InputGroup size='sm' className="w-25">
                            <Button 
                                className={`${disableDec ? 'mod-disable ' : ''}quantity-modifier modifier-left`} 
                                onClick={() => this.decrement(this.props.dinosaur.dino_quantity)}>
                                    &ndash;
                            </Button>
                            <Form.Control
                                size="sm" 
                                type="text"
                                value={this.state.quantity}
                                readOnly={true}
                                className="quantity-display"
                            />
                            <Button 
                                className={`${disableInc ? 'mod-disable ' : ''}quantity-modifier modifier-right`}
                                onClick={() => this.increment(this.props.dinosaur.dino_quantity)}>
                                    &#xff0b;
                            </Button>
                        </InputGroup>
                        <Button variant="success" onClick={() => this.props.addToCart(this.props.dinosaur, this.state.quantity)}>
                            Add to Cart
                        </Button>
                        <Button variant="secondary" onClick={() => this.props.close()}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}