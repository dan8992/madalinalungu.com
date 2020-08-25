import React from 'react'
import './BurgerBtn.css'

const BurgerBtn = props => {
  return (
    <div onClick={props.click}>
      <a href="#!"><i class="fas fa-bars user-mode"></i></a>
    </div>
  )
}

export default BurgerBtn;
