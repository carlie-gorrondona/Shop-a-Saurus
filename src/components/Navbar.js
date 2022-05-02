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
        }
        this.handleLoginClose = this.handleLoginClose.bind(this)
        this.handleCartClose = this.handleCartClose.bind(this)
    }

    handleLoginClose() {
        this.setState({showLogin: false});
    }

    handleCartClose() {
        this.setState({showCart: false});
    }

    componentDidMount() {
        DinosaurService.getDinosaurs().then((res) => {
            this.setState({dinosaurs: res.data});
        });
    }


    render() {
        // Set data on local store
        localStorage.setItem('dinosaurs', JSON.stringify(this.state.dinosaurs));
        var cart = JSON.parse(localStorage.getItem('cart'));

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
                                <Nav.Link className="loginlink" onClick={() => this.setState({showLogin: true})}>Login</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='shoppingcart' onClick={() => this.setState({showCart: true})}><img src="https://img.icons8.com/pastel-glyph/64/ffffff/shopping-bag--v3.png" alt='cart'/></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Login show={this.state.showLogin} close={this.handleLoginClose}/>
                <Cart show={this.state.showCart} close={this.handleCartClose} cart={cart}/>
                <Outlet />
            </div>
            
        );
    }
}