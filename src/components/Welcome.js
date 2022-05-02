import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Welcome.css';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate()

    return (
        <div className="welcomepanel" id="welcome">
            <div className="backgroundoverlay">
                <div className='foregroundtext'>
                    <h1>Welcome to Shop-a-Saurus!</h1>
                    <h2>The world's only online retailer of Dinosaurs.</h2>
                    <Button onClick={() => navigate("/shop")} className='button'>Shop our Dinosaurs</Button>
                </div>
            </div>
        </div>
    );
}

export default Welcome