import React, {Component} from 'react'
import {Button} from "@material-ui/core";

class CreateUser extends Component {
    addName = () => {

    }

    render() {

        return (
            <div>
                <table>
                    <tr>
                        <td colSpan="2">
                            <label>ایجاد نام کاربری</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>نام کاربری را وارد کنید</label>
                        </td>
                        <td>
                            <input type="text"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>رمز عبور خود را وارد کنید</label>
                        </td>
                        <td>
                            <input type="text"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>رمز عبور خود را دوباره وارد کنید</label>
                        </td>
                        <td>
                            <input type="text"/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <Button type="button" onClick={this.addName}>ذخیره</Button>

                        </td>
                    </tr>
                </table>
            </div>
        )
    }


}

export default CreateUser;