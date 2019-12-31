import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import axios from "axios";


class ChangePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {newPassword: ''}
    }

    changePassword = event => {
        const {oldPassword, newPassword} = this.state
        axios.post("http://127.0.0.1:5000/api/v1.0/adminChangePassword", {
            "newPassword": newPassword
        }).then(r =>
            // console.log(r)
            alert('رمز عبور با موفقیت تغییر یافت')
        )
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    backHome = () => {
        this.props.history.push("/Home")
    }

    render() {
        return (
            <div>
                <table>

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

                        <td>
                            <Button onClick={this.changePassword}> تغییر رمز ورود </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button onClick={this.backHome}> بازگشت به صفحه ی اصلی </Button>
                        </td>
                    </tr>

                </table>
            </div>
        )
    }
}

export default ChangePassword;