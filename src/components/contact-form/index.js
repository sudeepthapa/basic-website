import React, { Component } from 'react'
import Button from '../../widgets/button';
import './contact.css';
class Form extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
    errors:{}
  }

  // handleNameChange = (e) => {
  //   this.setState({
  //     name:e.target.value
  //   })
  // }

  // handleEmailChange = (e) => {
  //   this.setState({
  //     email:e.target.value
  //   })
  // }

  // handlePhoneChange = (e) => {
  //   this.setState({
  //     phone:e.target.value
  //   })
  // }

  // handleMessageChange = (e) => {
  //   this.setState({
  //     message:e.target.value
  //   })
  // }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      errors: {
        ...this.state.errors,
        [e.target.name]:''
      }
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    
    let errors = {};

    // TODO:: Form Validation Check for "valid email" "required" "textarea should not exceed 250 characters" "remove white spaces"

    let isValid = true;

    if (this.state.name === '') {
      errors.name = "Name is required" 
      isValid = false;
    } else if (this.state.name.length < 5) {
      errors.name = "Name should be at least 5 characters" 
      isValid = false;
    }

    if (this.state.message === '') {      
      errors.message = "Message is required." 
      isValid = false;
    }
    else if (this.state.message.length < 10) {
      errors.message = "Message must be greater than 10 characters." 
      isValid = false;
    }

    this.setState({
      errors: errors
    })

    if (isValid) {
      console.log("The form is valid please proceed.")
    }  
  }

  render() {
    // Object Destructuring
    const { name, email, phone, message } = this.state;

    const abc = {
      a: 1,
      b: 2,
      c: 3
    }

    const words = ['ab', 'bc', 'cd'];

    const wordsCopy = [...words, 'fdasfda']

    const aword = "Pineapple";
    console.log([...aword])

    // Spread Operator
    const abcCopy = { ...abc, a: 10, d: 40 };
    

    console.log(abc)
    console.log(abcCopy)


    return (
      <div id="contact-form">
        <h1>Contact Us</h1>
        <form onSubmit = {this.handleFormSubmit}>
          <input type="text" className={this.state.errors.name ? 'error-block':''} name="name" value={name} placeholder="Name" onChange={this.handleChange} />
          <div className="error"> {this.state.errors.name} </div>
          <input type="text" name="email" value={email} placeholder="Email" onChange = {this.handleChange} />
          <input type="text" name="phone" value={phone} placeholder="Phone" onChange={ this.handleChange }/>
          <textarea name="message" className={this.state.errors.message ? 'error-block':''} placeholder="Message" value={message} onChange={this.handleChange}></textarea>
          <div className="error"> {this.state.errors.message} </div>
          <Button type="submit" title = "Submit" />
        </form>
      </div>
    )
  }
}

export default Form;
