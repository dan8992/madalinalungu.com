import React from 'react';
import NavBar from '../layout/NavBar/NavBar';
import Footer from '../layout/Footer/Footer';
import Product from './Product/Product';
import Img1 from '../layout/Gallery/paitings/01.png'
import Img2 from '../layout/Gallery/paitings/02.png'
import Img3 from '../layout/Gallery/paitings/03.png'
import Img4 from '../layout/Gallery/paitings/04.png'
import Img5 from '../layout/Gallery/paitings/05.png'
import Img6 from '../layout/Gallery/paitings/06.png'
import Img7 from '../layout/Gallery/paitings/07.png'
import Img8 from '../layout/Gallery/paitings/08.png'
import Img9 from '../layout/Gallery/paitings/09.png'
import Img10 from '../layout/Gallery/paitings/10.png'
import Img11 from '../layout/Gallery/paitings/11.png'
import Img12 from '../layout/Gallery/paitings/12.png'
import Img13 from '../layout/Gallery/paitings/13.jpg'
import Img14 from '../layout/Gallery/paitings/14.png'
import Img15 from '../layout/Gallery/paitings/15.png'
import Img16 from '../layout/Gallery/paitings/16.png'
import Img17 from '../layout/Gallery/paitings/17.png'
import Img18 from '../layout/Gallery/paitings/18.png'
import Img19 from '../layout/Gallery/paitings/19.png'
import Img20 from '../layout/Gallery/paitings/20.png'
import Img23 from '../layout/Gallery/paitings/23.png'
import Img28 from '../layout/Gallery/paitings/28.jpg'
import Img29 from '../layout/Gallery/paitings/29.jpg'
import Img30 from '../layout/Gallery/paitings/30.jpg'
import './Shop.css'

const Home = () => {
    return( 
    <div>
      <NavBar />
      <div className="collection">
        <Product image={Img1} />
        <Product image={Img2} />
        <Product image={Img3} />
        <Product image={Img4} />
        <Product image={Img5} />
        <Product image={Img6} />
        <Product image={Img7} />
        <Product image={Img8} />
        <Product image={Img9} />
        <Product image={Img10} />
        <Product image={Img11} />
        <Product image={Img12} />
        <Product image={Img13} />
        <Product image={Img14} />
        <Product image={Img15} />
        <Product image={Img16} />
        <Product image={Img17} />
        <Product image={Img18} />
        <Product image={Img19} />
        <Product image={Img20} />
        <Product image={Img23} />
        <Product image={Img28} />
        <Product image={Img29} />
        <Product image={Img30} />
      </div>

      <Footer />
    </div>
    )
  }


export default Home;
