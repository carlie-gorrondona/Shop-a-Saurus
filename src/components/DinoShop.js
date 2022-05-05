import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/DinoShop.css';
import {Button, Row} from 'react-bootstrap';
import DinoCard from './DinoCard';
import DinosaurService from '../services/DinosaurService';

export default class DinoShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dinosaurs: [],
            cart: [],
        }

        this.addToCart = this.addToCart.bind(this)
    }

    addToCart(dinosaur, quantity) {
        console.log("Add To Cart")

        var cart_data = {
            id: dinosaur.dino_id,
            name: dinosaur.dino_name,
            quantity: quantity,
            price: dinosaur.dino_price,
        }

        // Fetch the old cart data
        const old_cart = JSON.parse(localStorage.getItem('cart'));
        console.log("cart", old_cart)


        let index = old_cart.findIndex(old => old.id === cart_data.id);
        
        // if item does not exits in old_cart push new item into it
        if (index === -1) {
            old_cart.push(cart_data)
            console.log("add new item", cart_data)

        // else lets update the quantity
        } else {

            // if quantity is not equal to the max amount of dinos + new quantity is not greater than the max dino quantity 
            // increase the quantity.
            if ((old_cart[index]["quantity"] + quantity) <= dinosaur.dino_quantity) {
                old_cart[index]["quantity"] += quantity

                console.log("update new item", old_cart[index])
            // else do some magic UI error letting user know max quantity has been reached
            } else {
                // Do something with the error
            }
        }

        //Now that updates have been made lets create a new cart with the old cart date and load that into storage
        var new_cart = [];
        new_cart = old_cart
        localStorage.setItem('cart', JSON.stringify(new_cart));

        // now lets set the state
        this.setState({cart: new_cart});
    }

    componentDidMount() {
        console.log("Mount component")

        //Check local storage for dinosaur data
        if (localStorage.getItem('dinosaurs') === null) {
            console.log("No dinos")
            DinosaurService.getDinosaurs().then((res) => {
                this.setState({dinosaurs: res.data});
                localStorage.setItem('dinosaurs', JSON.stringify(res.data));
            }).catch(error => {
                console.error('There was an error!', error);
            });
        } else {
            const dinosaurs = JSON.parse(localStorage.getItem('dinosaurs'));
            console.log("DinoShop", dinosaurs)
            this.setState({
                dinosaurs: dinosaurs, 
            });
        }

        // Check local storage for cart data
        if (localStorage.getItem('cart') === null) {
            this.setState({
                cart: [], 
            });
        } else {
            const cart = JSON.parse(localStorage.getItem('cart'));
            console.log(cart)

            this.setState({
                cart: cart, 
            });
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className='shopbackgroundoverlay'>
                    <h3>Our Dinosaurs</h3>
                    <br></br>
                    <Row xs={1} md={3} className="g-4">
                        {(this.state.dinosaurs || []).map(dinosaur => (
                            <DinoCard key={dinosaur.dino_id} dinosaur={dinosaur} addToCart={this.addToCart}/>
                        ))}
                    </Row>
                    <br></br>
                    <br></br>
                    <Button variant='success'>Spare No Expense</Button>
                </div>
            </div>
        );
    }
}
