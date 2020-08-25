import React from 'react'

import './Product.css'

const Product = props => {
  return (
    <div class="product-card">
      <div class="badge">SOLD</div>
      <div class="product-tumb">
        <img src={props.image} alt="" />
      </div>
      <div class="product-details">
        <h4><a href="#!">painting name</a></h4>
        <p>Painting description and details</p>
        <div class="product-price">€300.00</div>
      </div>
    </div>
  )
}

export default Product;
