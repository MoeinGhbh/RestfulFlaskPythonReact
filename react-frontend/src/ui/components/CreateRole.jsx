import React, {Component} from 'react'
import {Button} from "@material-ui/core";

class CreateRole extends Component {
    addName = () => {

    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td colSpan="2">
                            <label> ایجاد نقش </label>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <label>نقش را وارد کنید</label>
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

export default CreateRole;