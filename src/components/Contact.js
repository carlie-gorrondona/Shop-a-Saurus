import React, {Component} from 'react';
import './Contact.css';

export default class Contact extends Component {
    render() {
        return (
            <div className='contact' id='contact'>
                <div className='backgroundoverlaycontact'>
                    <h3>Contact</h3>
                    <p>Purchasing real, living dinosaurs sounds too good to be true? It probably is, but if you have any concerns, give us a shout--or a rawr--via the form below.</p>
                    <form className='form'>
                        <fieldset>
                            <legend>Contact Form</legend>
                            <table>
                                <tr><td>Name</td><td><input type='text'/></td></tr>
                                <tr><td>Email</td><td><input type='email'/></td></tr>
                                <tr><td>Phone</td><td><input type='tel'/></td></tr>
                                <tr><td>Message</td><td><input type='textarea'/></td></tr>
                                {/* <tr><td><input id='submitbutton' type="submit"/></td></tr> */}
                            </table>
                            <input id='submitbutton' type="submit"/>
                            {/* <label>First name: <input type="text"></input></label>
                            <label>Email: <input type='email'></input></label>
                            <label>Phone Number: <input type='tel'></input></label>
                            <label>Message: <input type='textarea'></input></label>
                            <input type="submit" id='submitbutton'></input> */}
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}