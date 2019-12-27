import React, {Component} from "react";
import "./css/Panel.css";
import CreateUser from "../components/CreateUser";
import CreateRole from "../components/CreateRole";
import CreatePart from "../components/CreatePart";
import CreateItemsofPart from "../components/CreateItemsofPart";
import DeleteRole from "../components/DeleteRole";


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
                            <DeleteRole />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <CreateUser/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <CreatePart />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <CreateItemsofPart />
                        </td>
                    </tr>
                </table>
                {/*{*/}
                {/*    data.map(rr => {*/}
                {/*        console.log(rr)*/}
                {/*    })*/}
                {/*}*/}
                {/*<div id="Zones">*/}
                {/*    /!* <h2>{data.navigation.content}</h2> *!/*/}
                {/*    {data.map(Zone => {*/}
                {/*        return (*/}
                {/*            <div id="Zone">*/}
                {/*                <ZoneCardEdit*/}
                {/*                    content={Zone.zoneName}*/}
                {/*                    items={Zone.items}*/}
                {/*                    className="card"*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*        );*/}
                {/*    })}*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Panel;



