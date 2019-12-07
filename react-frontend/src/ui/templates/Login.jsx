import React, { Component, TextInput } from "react";
import "./css/login.css";
import { withRouter } from "react-router";
import Button from "react-bootstrap/Button";
import axios from "axios";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {login: [],name:'',pass:''}
    this.routChange = this.routChange.bind(this);
    this.routChangeBack = this.routChangeBack.bind(this);
    let userAccess=false;

    this.namehandleChange = this.namehandleChange.bind(this);
    this.passhandleChange = this.passhandleChange.bind(this);

  }

  namehandleChange(event) {
    this.setState({name: event.target.value});
    console.log(this.state)
    localStorage.setItem('LSusername', this.state["username"]);
  }

  passhandleChange(event) {
    this.setState({pass: event.target.value});
    console.log(this.state)
    localStorage.setItem('LSpassword', this.state["password"]);
  }

  routChange() {
    const ttt = localStorage.getItem('LStoken')
    console.log(ttt)
    //this.props.history.push("/Home");
  }
  routChangeBack() {
    this.props.history.push("/");
  }

  componentDidMount() {
    axios.post("http://127.0.0.1:5000/api/login",{"username":"admin","password":"123"})
        .then(res =>{
          this.setState({userAccess: res.data})
        })
    console.log(login)
    localStorage.setItem('LStoken', this.userAccess);



  }

  render() {
    const { login } = this.props;

    //console.log(login)
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
              <input type="text" value={this.state.name} onChange={this.namehandleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label>رمز عبور</label>
            </td>
            <td>
              <input type="text" value={this.state.pass} onChange={this.passhandleChange} />
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
