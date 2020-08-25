import React, { Component } from 'react'
import Logo from './navBarSubComponents/Logo/Logo';
import NavBarUl from './navBarSubComponents/NavBarUl/NavBarUl';
import BurgerBtn from './navBarSubComponents/BurgerBtn/BurgerBtn';
import RightNav from './navBarSubComponents/RightNav/RightNav';
import Backdrop from './navBarSubComponents/BackDrop/BackDrop';

import './NavBar.css'



class NavBar extends Component {
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
                <NavBarUl />
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

export default NavBar;