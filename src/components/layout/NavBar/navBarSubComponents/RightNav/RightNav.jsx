import React from 'react'
import './RightNav.css';


const RightNav = (props) => {

  return (
    <div  style={{display: props.click ? 'initial' : 'none' }} >
      <ul class="right-nav-elem">
        <li><a  href="/portofolio">portofolio</a></li>
        <li><a  href="/about">about</a></li>
        <li><a  href="/contact">contact</a></li>
        <li><a  href="/shop">shop</a></li>
      </ul> 
    </div>
  )
}

export default RightNav;
