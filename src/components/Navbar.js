import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link, Outlet} from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" sticky="top" className='navbar'>
                    <Container>
                        <Navbar.Brand to='/' as={Link} className='brandname'>Shop-a-Saurus</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link to='/shop' as={Link}>Shop</Nav.Link>
                            <Nav.Link to='/about' as={Link}>About</Nav.Link>
                            <Nav.Link to='/contact' as={Link}>Contact</Nav.Link>
                            <Nav.Link to='/login' as={Link} className="loginlink">Login</Nav.Link>
                            <Nav.Link to='/cart' as={Link} className='shoppingcart'><img src="https://img.icons8.com/pastel-glyph/64/ffffff/shopping-bag--v3.png"/></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Outlet />
            </div>
            
        );
    }
}