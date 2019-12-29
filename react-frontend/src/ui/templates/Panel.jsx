import React, {Component} from "react";
import "./css/Panel.css";
import CreateUser from "../components/CreateUser";
import CreateRole from "../components/CreateRole";
import CreatePart from "../components/CreatePart";
import CreateItemsofPart from "../components/CreateItemsofPart";
import DeleteRole from "../components/DeleteRole";
import DeleteUser from "../components/deleteUser";
import DeletePart from "../components/DeletePart"
import DeleteItemsofPart from "../components/DeleteItemsofPart"

class Panel extends Component {
    constructor(props) {
        super(props);
        const myToken = localStorage.getItem("LStoken")
    }

    render() {
        const data = this.props.location.state
        return (
            <div className="divMain">
                <table>
                    <tr>
                        <td>
                            <CreateRole/>

                        </td>
                        <td>
                            <DeleteRole/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <CreateUser/>
                        </td>
                        <td>
                            <DeleteUser/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <CreatePart/>
                        </td>
                        <td>
                            <DeletePart/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <CreateItemsofPart/>
                        </td>
                        <td>
                            <DeleteItemsofPart/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>بازگشا به صحه ی اصلی</label>
                        </td>
                        <td>
                            <label>
                                {/*<Button onClick={this.props.push} />*/}
                            </label>
                        </td>
                    </tr>
                </table>

            </div>
        );
    }
}

export default Panel;



