import React, {Component} from 'react';
import {Card, Button, Col} from 'react-bootstrap';
import DinoInfoPage from './DinoInfoPage';

export default class DinoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            cart: []
        }
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({show: false});
    }

    render() {
        return (
            <div>
                <Col>
                    <Card>
                        <Card.Img src={this.props.dinosaur.dino_image} onClick={() => this.setState({show: true})}/>
                        <Card.Body>
                            <Card.Title>{this.props.dinosaur.dino_name}</Card.Title>
                            <Card.Text>
                                <Button className='addtocartbutton' onClick={() => this.props.addToCart(this.props.dinosaur, 1)}>Add to Cart</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <DinoInfoPage 
                    show={this.state.show} 
                    close={this.handleClose} 
                    dinosaur={this.props.dinosaur} 
                    addToCart={this.props.addToCart}
                />
            </div>
        );
    }
}