import React from 'react'
import './BurgerBtnAdmin.css'

const BurgerBtn = props => {
  return (
    <div onClick={props.click}>
      <a href="#!"><i class="fas fa-bars admin-mode"></i></a>
    </div>
  )
}

export default BurgerBtn;
