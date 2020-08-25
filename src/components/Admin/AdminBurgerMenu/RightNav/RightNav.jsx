import React from 'react'
import './RightNav.css';


const RightNav = (props) => {

  return (
    <div  style={{display: props.click ? 'initial' : 'none' }} >
      <ul class="right-nav-admin-elem">
        <li><a  href="/admin-portofolio">portofolio-adm</a></li>
        <li><a  href="/admin-about">about-adm</a></li>
        <li><a  href="/admin-shop">shop-adm</a></li>
      </ul> 
    </div>
  )
}

export default RightNav;
