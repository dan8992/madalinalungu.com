import React, { Component } from 'react'
import Logo from '../../layout/NavBar/navBarSubComponents/Logo/Logo';
import BurgerBtn from '../../Admin/AdminBurgerMenu/BurgerBtnAdmin/BurgerBtnAdmin';
import RightNav from './RightNav/RightNav';
import Backdrop from '../../layout/NavBar/navBarSubComponents/BackDrop/BackDrop';

import './AdminBurgerMenu.css'



class AdminBurgerMenu extends Component {
    state = {
        sideDrawerOpen: false
      }
      
      drawerToggleClickHandler = () => {
        this.setState((prevState) => {
          return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
      }
      
      backDropClickHandler = () => {
        this.setState({ sideDrawerOpen: false});
      }

    render() {


    let sideDrawer;
    let backdrop;
    if(this.state.sideDrawerOpen) {
        sideDrawer  = <RightNav click={this.state.sideDrawerOpen} />;
        backdrop = <Backdrop  click={this.backDropClickHandler} />;
    } 

    return (
        <div id="navbar" class="navbar">
            <Logo />
            <nav>
                <div className="burger-btn">
                    <BurgerBtn  click={this.drawerToggleClickHandler}  />
                </div>
                {sideDrawer}
                {backdrop}
            </nav>
        </div>
    )
}
}

export default AdminBurgerMenu;