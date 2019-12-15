import React , {Component} from 'react';


class ChangePassword extends Component {
    render(){
        return(
            <div>
                <table>
                    <tr>
                        <td>
                            <label>رمز قبلی</label>
                        </td>
                        <td>
                            <inpu></inpu>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>رمز جدید</label>
                        </td>
                        <td>
                            <input/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>تکرار رمز جدید</label>
                        </td>
                         <td>
                            <input/>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default ChangePassword;