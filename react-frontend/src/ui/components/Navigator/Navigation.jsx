import React, {Component} from "react";
//import "./css/navigationSection.css";
//import logo from "./img/profile.jpg";
//import logoWhite from "./img/logo-white.png";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuItem from "./MenuItems";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";

export default class NavagationSection extends Component {

    render() {
        const {data} = this.props;
        console.log("navigation ", data);
        return (
            <div>
                <session>
                    <Navbar bg="primary" variant="dark">
                        <Nav className="mr-auto">
                            <NavDropdown title="Home" id="collasible-nav-dropdown">
                                {data.map(submenu => {
                                    return <MenuItem zoneName={submenu.zoneName}/>;
                                })}

                            </NavDropdown>

                            <NavLink className={"nav-link"} href="/Panel"
                                     to={{

                                         pathname: '/Panel',
                                         state: data
                                     }}>Control Panel</NavLink>
                            <Nav.Link href="/ChangePassword">Change Password</Nav.Link>
                        </Nav>

                        <Navbar.Brand href="#home">به خانه ی هوشمند خوش آمدید</Navbar.Brand>
                    </Navbar>

                </session>
            </div>
        );
    }
}
