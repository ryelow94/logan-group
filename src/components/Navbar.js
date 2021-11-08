import React, { Component } from "react";
import { MenuItems } from "./MenuItem";
import "./Navbar.css";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">The Logan Group Securities</h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key ={index} >
              <Link onClick={this.handleClick} to={item.link} className={item.cName}>
                {item.title}
              </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;