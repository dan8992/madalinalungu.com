import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
      <div>
        <footer class="footer">
        <p>&copy; MadalinaLungu, 2020</p>
        <div class="social">
          <a href="https://www.instagram.com/madalinaaalungu/"><i class="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/madalinaalungu"><i class="fab fa-facebook"></i></a>
          <a href="https://www.youtube.com/channel/UCGVTVKySs8Xqcx7vQZ3ZyNg"><i class="fab fa-youtube"></i></a>
          <a href="https://www.tiktok.com/@madalinaaalungu"><img src="https://img.icons8.com/ios/50/000000/tiktok.png" alt=""/></a>      
        </div>
       </footer>
      </div>
    )
}

export default Footer;