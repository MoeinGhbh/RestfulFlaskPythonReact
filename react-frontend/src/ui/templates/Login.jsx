import React, { Component, TextInput } from "react";
import "./css/login.css";
import { withRouter } from "react-router";
import Button from "react-bootstrap/Button";
import axios from "axios";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {loginToken:'',name:'',pass:''}
    this.routChangeBack = this.routChangeBack.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  routChange = event => {
    const gotUser = this.state["name"]
    const gotPass = this.state["pass"]

    axios.post("http://127.0.0.1:5000/api/login",{"username":gotUser,"password":gotPass})
        .then(res =>{
          this.setState({loginToken: res.data})
        })
    console.log(this.state)
    localStorage.setItem("LStoken", this.loginToken);
    const ttt = localStorage.getItem('LStoken')
    console.log(ttt)
    //this.props.history.push("/Home");
  }
  routChangeBack() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="divlog">
        <table className="tbllog">
          <tr>
            <td colSpan="2">
              <h4> به سیستم خانه ی هوشمند خوش آمدید </h4>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <label>نام کاربری</label>
            </td>
            <td>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label>رمز عبور</label>
            </td>
            <td>
              <input type="text" name="pass" value={this.state.pass} onChange={this.handleChange} />
            </td>
          </tr>

          <tr>
            <td colSpan="2">
              <Button onClick={this.routChange} > ورود </Button>
              <Button onClick={this.routChangeBack} > رمز خود را فراموش کرده اید؟ </Button>
            </td>
            <td></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default withRouter(login);
