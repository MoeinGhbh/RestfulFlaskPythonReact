import React, { Component } from "react";
import "./css/login.css";
import { withRouter } from "react-router";
import Button from "react-bootstrap/Button";

class login extends Component {
  constructor(props) {
    super(props);
    this.routChange = this.routChange.bind(this);
    this.routChangeBack = this.routChangeBack.bind(this);
  }
  routChange() {
    this.props.history.push("/panel");
  }
  routChangeBack() {
    this.props.history.push("/");
  }
  render() {
    const { data, handler } = this.props;
    return (
      <div className="divlog">
        <table className="tbllog">
          <tr>
            <td colSpan="2">
              <h4> به کنترل پنل سیستم خانه ی هوشمند خوش آمدید </h4>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <label>نام کاربری</label>
            </td>
            <td>
              <input />
            </td>
          </tr>
          <tr>
            <td>
              <label>رمز عبور</label>
            </td>
            <td>
              <input />
            </td>
          </tr>

          <tr>
            <td colSpan="2">
              <Button onClick={this.routChange} data={data} handler={handler}> ورود </Button>
              <Button onClick={this.routChangeBack} data={data} handler={handler}> بازگشت </Button>
            </td>
            <td></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default withRouter(login);
