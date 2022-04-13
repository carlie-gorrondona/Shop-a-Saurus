import React, {Component} from 'react';
import Navigation from './Navbar';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div className='about' id='about'>
                <div className='backgroundoverlayabout'>
                    <h3>About</h3>
                    <p>We are the world's one and only online dinosaur retailer since 2022. With the success of Dino DNA extraction from mosquitos thanks to Dr. Crichton's research, dinosaurs are able to walk the earth again, and we wanted to ensure you have the ability to own one. Why spend thousands a day to maybe see them in a park when you can look out your window and see your very own dinosaur every day of the week? It's a no bird-brainer. Shop-a-Saurus has the largest variety of dinosaurs available for purchase, and since we work directly with the producer, you get them at the cheapest price available.</p>
                </div>
            </div>
        );
    }
}