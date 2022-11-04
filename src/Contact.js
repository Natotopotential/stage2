import React from 'react'
import {useState} from "react"

function Contact() {
const [firstName,setFirstName] = useState("Enter your first name")
const [lastName,setLastName] = useState("Enter your last name")

const[email,setEmail] = useState('yourname@email.com')
const [body,setBody] = useState("send me a message and I'll reply as soon as possible")

  return (
    <section id='form' className='section'>
      <div className='form-section'>
        <div className='form-title'>
          <h3>Contact Me</h3>
          <p>
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>
        <form className='form-details'>
          <div className='form-profile'>
            <div className='form-control'>
              <label htmlFor='firstName' id='first__name'>
                First Name
              </label>
              <input type='text'value={firstName} className='form-info' />
            </div>
            <div className='form-control'>
              <label htmlFor='LastName ' id='last__name'>
                Last Name
              </label>
              <input type='text'value={lastName} className='form-info' />
            </div>
          </div>

          {/* <div className='form-control'></div>
          <div className='form-control'></div>
          <div className='form-control'></div> */}

          <label htmlFor='email' id='email'>
            Email
          </label>
          <input type='text' value={email} className='form-info' />
          <label htmlFor='message' id='message'>
            Message
          </label>
          <textarea
            name='body'
            required
            id='message'
            className='form-message'
            value={body}
          ></textarea>
          <div className='form-m'>
            <input type='radio' className='form-radio' />
            <label htmlFor='agreement'>
              you agree to providing your data name who may contact you
            </label>
          </div>

          <button id='btn__submit'>Send message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
