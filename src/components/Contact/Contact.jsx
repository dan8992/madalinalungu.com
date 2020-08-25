import React from 'react';
import NavBar from '../layout/NavBar/NavBar';
import Footer from '../layout/Footer/Footer';
import ContactForm from '../ContactForm/ContactForm';

import ContactInfo from '../ContactInfo/ContactInfo';
import '../Contact/Contact.css'

const Home = () => {
    return( 
    <div>
      <NavBar />
      <div className="content"> 
        <div className="info">
        <ContactInfo />
        </div>
        <div className="form">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
    )
  }


export default Home;
