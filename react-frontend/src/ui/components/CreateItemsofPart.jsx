import React, {Component} from 'react'

class CreateItemsofPart extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td colSpan="2">
                            <label> ایجاد نقش </label>
                        </td>
                        <td>

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
                        <td>

                        </td>
                        <td>
                            <input type="button"/>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }

}

export default CreateItemsofPart;