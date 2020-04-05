import React, {Component} from "react";
import '../styles/ContactPage.css';
import {Prompt} from 'react-router-dom';

class ContactPage extends Component{
    state = {
      text: '',
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({text: ''})
    };

    handleChange = (e) => {
        this.setState({text: e.target.value})
    };

    render(){
        return(
            <>
            <form className="contact" onSubmit={this.handleSubmit}>
                <h1>Formularz kontaktowy</h1>
                <textarea className="contact__text" name="contact" onChange={this.handleChange} rows="5" value={this.state.text} placeholder="Wpisz wiadomość" />
                <button className="contact__btn">Wyślij</button>
            </form>
                <Prompt when={this.state.text !== ''} message='Nie zapisane zmiany. Czy chcesz opuścić stronę'/>
            </>
        );
    }
};

export default ContactPage;