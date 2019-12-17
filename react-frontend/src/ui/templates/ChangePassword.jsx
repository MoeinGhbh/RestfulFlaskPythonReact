import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import axios from "axios";


class ChangePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {oldPassword: '', newPassword: ''}
        //console.log("aaaaaaa"+localStorage.getItem("username"))
    }

    changePassword = event => {
        const {oldPassword, newPassword} = this.state
        //console.log("bbbbbbb"+localStorage.getItem("username"))
        const user = localStorage.getItem("username")
        axios.post("http://127.0.0.1:5000/api/v1.0/changePassword?token=" + localStorage.getItem("LStoken"), {
            "username": user,
            "oldPassword": oldPassword,
            "newPassword": newPassword
        }).then(r => console.log(r))
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td>
                            <label>رمز قبلی</label>
                        </td>
                        <td>
                            <input type="text" name="oldPassword" value={this.state.oldPassword}
                                   onChange={this.handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>رمز جدید</label>
                        </td>
                        <td>
                            <input type="text" name="newPassword" value={this.state.newPassword}
                                   onChange={this.handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <Button onClick={this.changePassword}> تغییر رمز ورود </Button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default ChangePassword;