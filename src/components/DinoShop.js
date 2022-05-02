import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/DinoShop.css';
import { Row} from 'react-bootstrap';
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

    addToCart(dinosaur, quatity) {
        console.log("Add To Cart")
        console.log("dino-to-add",dinosaur);

        var cart_data = {
            id: dinosaur.dino_id,
            name: dinosaur.dino_name,
            quatity: quatity,
            price: dinosaur.dino_price,
        }

        var temp = this.state.cart;
        console.log("old car", temp);

        temp.push(cart_data)
        this.setState({cart: temp});

        console.log("new car",this.state.cart);
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
    }
    
    componentDidMount() {
        console.log("Mount component")
        const dinosaurs = JSON.parse(localStorage.getItem('dinosaurs'));
        console.log(dinosaurs)
        
        if (dinosaurs === null) {
            DinosaurService.getDinosaurs().then((res) => {
                this.setState({dinosaurs: res.data});
            });

            localStorage.setItem('dinosaurs', JSON.stringify(this.state.dinosaurs));
        } else {
            this.setState({
                dinosaurs: dinosaurs, 
            });
        }


        const cart = JSON.parse(localStorage.getItem('cart'));
        console.log(cart)
        if (cart === null) {
            this.setState({
                cart: [], 
            });
        } else {
            this.setState({
                cart: cart, 
            });
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className='shopbackgroundoverlay'>
                    <Row xs={1} md={3} className="g-4">
                        {(this.state.dinosaurs || []).map(dinosaur => (
                            <DinoCard key={dinosaur.dino_id} dinosaur={dinosaur} addToCart={this.addToCart}/>
                        ))}
                    </Row>
                </div>
            </div>
        );
    }
}
