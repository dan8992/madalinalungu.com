import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className="contact-form">
      
    <form id="gform" method="POST" class="pure-form pure-form-stacked" data-email="admin@madalinalungu.com"
          action="https://script.google.com/macros/s/AKfycbxYg0KkaTMPFEjclEerZF239SRM5UFPceoeI3Mm0g-NnZxs1RdL/exec">

        <label for="name">Name </label>
        <input id="name" name="name" type="text" />

        <label for="message">Message </label>
        <textarea id="message" name="message" type="textarea" rows="10"></textarea>

        <label for="email">Your Email Address</label>
        <input id="email" name="email" type="email" 
               required />

        <button class="button-success pure-button button-xlarge">
            <i class="fa fa-paper-plane"></i>&nbsp;Send 
        </button>

    </form>
    </div>

  )
}

export default ContactForm;
