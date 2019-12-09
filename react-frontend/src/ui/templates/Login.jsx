import React, { Component, TextInput } from "react";
import "./css/login.css";
import { withRouter } from "react-router";
import Button from "react-bootstrap/Button";
import axios from "axios";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {loginToken:'',name:'',pass:'', role:''}
    this.routChangeBack = this.routChangeBack.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  routChange = event => {
    const {name,pass} = this.state

     if(name=="" || pass=="")
      alert('لطفا نام کاربری و رمز عبور خود را وارد کنید')
    else {
       axios.post("http://127.0.0.1:5000/api/login", {"username": name, "password": pass})
           .then(res => {
             if(res.status==200) {
               this.setState({loginToken: res.data})
             }
           })

       if (this.state["loginToken"] == "")
         alert('نام کاربری یا رمز عبور اشتباه می باشد')
       else if (this.state["loginToken"] != "")
       {
         const myToken = this.state["loginToken"]
         console.log(myToken)
         axios.post("http://127.0.0.1:5000/api/v1.0/getRole", {"username": name,"token":myToken})
           .then(res => {
             if(res.status==200) {
               this.setState({role: res.data.MineUserRole})

             }
           })


         localStorage.setItem("LStoken", this.state["loginToken"]);
         localStorage.setItem("LSrole" , this.state["role"]);


         if (localStorage.getItem("LSrole") != "")
                this.props.history.push("/Home");
       }
     }

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
              <input  type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label>رمز عبور</label>
            </td>
            <td>
              <input  type="password" name="pass" value={this.state.pass} onChange={this.handleChange} />
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
