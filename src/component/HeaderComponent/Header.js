import React from 'react';
import './header.scss';
import logo from './../../asset/VeniaLogo.png';
import icon from './../../asset/search.png';
import user_icon from './../../asset/user.png';
import shopping_bag_icon from './../../asset/shopping-bag.png';
import menu_icon from './../../asset/menu@2x.png';
 

class Header extends React.Component {
    state = {flag: false}
    render() {
      return(
        <>
        <header>
            <div className="menu-icon" onClick={() =>{
                this.setState({flag: !this.state.flag})
            }}>
                <img src={menu_icon} className="menu-icon" alt="menu_icon" />
            </div>
             <img src={logo} className="App-logo" alt="VeniaLogo" />
            <nav>
                <div className="nav-middle-section">
                    <lable>Women</lable>
                    <lable>Men</lable>
                    <lable>Smart Gear</lable>
                    <lable>Accessories</lable>
                </div>
                
                <div className="nav-right-section">
                   
                    <div className="search-icon">
                        <img src={icon} className="header-icon" alt="search_icon" />
                    </div>
                    <lable class="search-field">Search</lable>
                    
                    <div className="user-icon">
                        <img src={user_icon} className="header-icon" alt="user_icon" />
                    </div>
                    <lable class="sign-in-field">Sign In</lable>
                    <div className="user-icon">
                        <img src={shopping_bag_icon} className="header-icon" alt="shopping_bag_icon" />
                    </div>
                </div>
                
            </nav>
        </header>
            
             {this.state.flag?<div className="nav-mobile-middle-section">
               
                    <lable>Women</lable>
                    <lable>Men</lable>
                    <lable>Smart Gear</lable>
                    <lable>Accessories</lable>
                </div>
                :""}
            </>
        ) 
        
      
    }
  }

export default Header;
