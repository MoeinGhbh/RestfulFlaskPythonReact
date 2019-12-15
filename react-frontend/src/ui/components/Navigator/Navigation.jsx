import React, {Component} from "react";
//import "./css/navigationSection.css";
//import logo from "./img/profile.jpg";
//import logoWhite from "./img/logo-white.png";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuItem from "./MenuItems";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";

export default class NavagationSection extends Component {

    render() {
        const {data} = this.props;
        console.log(data)
        return (
            <div>
                <session>
                    <Navbar bg="primary" variant="dark">
                        <Nav className="mr-auto">
                            <NavDropdown title="Home" id="collasible-nav-dropdown">
                                {data.map(submenu => {
                                    return <MenuItem zoneName={submenu.zoneName}/>;
                                })}
                                {/* <NavDropdown.Item href="#TVRome/3.1">
                  Intro
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                TV Rome
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Kitchen
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Bed Rome Master
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Bed Rome North
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Bed Rome South
                </NavDropdown.Item> */}
                            </NavDropdown>
                            <Nav.Link href="/Panel" to={{
                                      pathname: '/Panel',
                                      state: {
                                        state: {data}
                                      }
                                    }}>Control Panel</Nav.Link>
                            <Nav.Link href="/ChangePassword">Change Password</Nav.Link>
                        </Nav>
                        {/* <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-light">Search</Button>
            </Form> */}
                        <Navbar.Brand href="#home">به خانه ی هوشمند خوش آمدید</Navbar.Brand>
                    </Navbar>
                    {/* <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="ChangePassword">ChangePassword</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav> */}
                </session>
            </div>
        );
    }
}
