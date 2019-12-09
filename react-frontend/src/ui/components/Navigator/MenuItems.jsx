import React, { Component } from "react";
//import "./css/MenuItem.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";
//import data from '../../../data'

export default class MenuItem extends Component {
  render() {
       let { name } = this.props;
       //console.log({name})
    return (
      <NavDropdown.Item href="Division" eventKey={4}>
      {name}
    </NavDropdown.Item> 
    );
  }
}
