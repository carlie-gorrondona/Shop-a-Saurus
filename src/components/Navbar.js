import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Navbar.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link, Outlet} from 'react-router-dom';
import Login from './Login';
import Cart from './Cart';
import DinosaurService from '../services/DinosaurService';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: false,
            loggedIn: false,
            showCart: false,
            dinosaurs: [],
            cart: [],
            user: {}
        }
        this.handleLoginClose = this.handleLoginClose.bind(this)
        this.handleCartClose = this.handleCartClose.bind(this)
        this.loadCart = this.loadCart.bind(this)
        this.removeCartItem = this.removeCartItem.bind(this)
        this.onLogout = this.onLogout.bind(this)
    }

    handleLoginClose() {
        this.setState({showLogin: false});
    }

    handleCartClose() {
        this.setState({showCart: false});

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

    componentDidMount() {
        DinosaurService.getDinosaurs().then((res) => {
            this.setState({dinosaurs: res.data});
            localStorage.setItem('dinosaurs', JSON.stringify(res.data));
        }).catch(error => {
            console.error('There was an error!', error);
        });

        // Check local storage for cart data
        if (localStorage.getItem('cart') === null) {
            this.setState({
                cart: [], 
            });
        } else {
            const cart = JSON.parse(localStorage.getItem('cart'));
            console.log("current cart", cart)

            this.setState({
                cart: cart, 
            });
        }

        //Get user from localstorage
        if (localStorage.getItem('user') === null) {
            this.setState({
                user: {}, 
                loggedIn: false,
            });
        } else {
            const user = JSON.parse(localStorage.getItem('user'));
            console.log("check Logged In user", user)

            this.setState({
                user: user, 
                loggedIn: true,
            });
        }
    }


    //Load and show cart on click
    loadCart() {
        this.setState({showCart: true})

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

    onLogout() {
        this.setState({
            loggedIn: false,
            user: {}
        })
        localStorage.removeItem('user');
    }

    removeCartItem(cartID) {
        let newCart = this.state.cart.filter(item => item.id !== cartID);
        this.setState({
            cart: newCart,
        })

        localStorage.setItem('cart', JSON.stringify(newCart));
    }
    

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className='navbar'>
                    <Container>
                    <Navbar.Brand to='/' as={Link} className='brandname'>Shop-a-Saurus</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Item>
                                <Nav.Link to={`/shop`} as={Link} >Shop</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link to='/about' as={Link}>About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link to='/contact' as={Link}>Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav className="justify-content-end">
                            <Nav.Item>
                                {
                                   this.state.loggedIn
                                    ? <Nav.Link className="loginlink" onClick={() => this.onLogout()}>Log out</Nav.Link>
                                    : <Nav.Link className="loginlink" onClick={() => this.setState({showLogin: true})}>Login</Nav.Link>
                                }
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='shoppingcart' onClick={() => this.loadCart()}><img src="https://img.icons8.com/pastel-glyph/64/ffffff/shopping-bag--v3.png" alt='cart'/></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Login show={this.state.showLogin} close={this.handleLoginClose}/>
                <Cart show={this.state.showCart} close={this.handleCartClose} removeCartItem={this.removeCartItem} cart={this.state.cart}/>
                <Outlet />
            </div>
            
        );
    }
}