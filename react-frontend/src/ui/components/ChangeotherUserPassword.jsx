import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import axios from "axios";


class ChangePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {userName: '', newPassword: ''}
    }

    changePassword = event => {
        const {userName, newPassword} = this.state
        const user = localStorage.getItem("username")
        axios.post("http://127.0.0.1:5000/api/v1.0/otherUserChangePassword?token=" + localStorage.getItem("LStoken"), {
            "userName": userName,
            "newPassword": newPassword
        }).then(r =>
            //console.log(r)
            alert('رمز عبور کاربر مورد نظر با موفقیت تغییر یافت')
        )
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
                            <label>نام کاربری</label>
                        </td>
                        <td>
                            <input type="text" name="userName" value={this.state.userName}
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