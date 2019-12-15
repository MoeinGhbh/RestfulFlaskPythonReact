import React, {Component} from "react";
//import "./css/MenuItem.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import {object} from "prop-types";

export default class MenuItem extends Component {

    render() {
        const {zoneName} = this.props;
        // var anchor = JSON.stringify(zoneName);
        // var pond = "#";
        // var t = pond.concat(anchor);
        // const ff = {"anchor":t}

        return (
            // <NavDropdown.Item href={ff}>
             <NavDropdown.Item >
                {zoneName}
            </NavDropdown.Item>
        );
    }
}
