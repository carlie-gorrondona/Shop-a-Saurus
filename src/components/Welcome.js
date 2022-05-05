import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Welcome.css';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import DinosaurService from '../services/DinosaurService';

export default class Welcome extends Component {

    componentDidMount() {
        DinosaurService.getDinosaurs().then((res) => {
            this.setState({dinosaurs: res.data});
            localStorage.setItem('dinosaurs', JSON.stringify(res.data));
        }).catch(error => {
            console.error('There was an error!', error);
        });
    }

    render() {
        return (
            <div className="welcomepanel" id="welcome">
                <div className="backgroundoverlay">
                    <div className='foregroundtext'>
                        <h1>Welcome to Shop-a-Saurus!</h1>
                        <h2>The world's only online retailer of Dinosaurs.</h2>
                        <Button to='/shop' as={Link} className='button'>Shop our Dinosaurs</Button>
                    </div>
                </div>
            </div>
        );
    }
}