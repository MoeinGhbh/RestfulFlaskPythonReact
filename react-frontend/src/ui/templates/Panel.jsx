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
                        <td colSpan="2">
                            <CreateItemsofPart/>
                        </td>

                    </tr>
                    <tr>
                        <td colSpan="2">
                            <div className="divMain">
                                <DeleteItemsofPart/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>.                                                  .</label>
                        </td>
                    </tr>
                </table>

            </div>
        );
    }
}

export default Panel;



