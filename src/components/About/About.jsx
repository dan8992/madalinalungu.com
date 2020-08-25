import React from 'react';
import NavBar from '../layout/NavBar/NavBar';
import Footer from '../layout/Footer/Footer';
import './About.css'
import profileImg  from '../layout/images/profil_img.jpg';
import signatureImg from  '../layout/images/signature.png';


const Home = () => {
    return( 
    <div>
      <NavBar />
      <div className="row">

      <div className="column column-1 profile-img">
          <img src={profileImg} alt=""/>
        </div>


        <div className="column column-2">
          <div className="signature">
            <img  src={signatureImg} alt=""/>
          </div>
          <div className="description">
            <p>
            I'm a Painter, a Dental Technician and a Graphic Designer. I live in Bucharest, a city with people that inspire me to paint since I was very young. I'm fascinated by colours, details and facial expressions. While working as a dental technician I've learned that eyes aren't solely mirrors of the soul, but teeth are too and this is why I choose to paint them. 
            I graduated from the School of music and art nr. 5 in Bucharest, " Nicolae Tonitza" Highschool of fine arts and " Titu Maiorescu" College of dental Technicians. 
            I think we learn until we die and this is why I paint, draw and engrave daily. I don't like to describe myself as an " artist", just because the word carries a lot of weight. I love Michelangelo, but I'm fascinated by Degas's delicacy and Caravaggio's colours. 
            Paiting has been the first way of expressing my emotions and will forever be my first love. 
            </p>
            <p>
            Personal exhibitions: 
            <p>
            2013 Palace of Parliament, Bucharest
            </p>
            <p>
            2017 “Horatiu Malaele” Gallery, Bucharest
            </p>
            <p>
            2017, Hotel JW Marriott, Bucharest
            </p>
            <p>
            2018 Energiea Pub, Bucharest
            </p>
            <p>
            2019 RePlace by UCC , Bucharest
            </p>
            </p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
    )
  }


export default Home;
