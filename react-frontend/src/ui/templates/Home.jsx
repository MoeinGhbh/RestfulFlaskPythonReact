import React, {Component, useEffect} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigator from "../components/Navigator/Navigation";
import "./css/Home.css";
import ZoneSection from "../components/Zones/ZoneSetion";
import img from "../../favicon.png";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.handler = this.handler.bind(this);
        const myRole = localStorage.getItem("LSrole")
        console.log(myRole);
        const myToken = localStorage.getItem("LStoken")
    }

    componentDidMount() {
        axios.post('http://127.0.0.1:5000/api/v1.0/perRoleHome?token=' + localStorage.getItem("LStoken"), {"role": localStorage.getItem("LSrole")})
            .then(res => {
                if (res.status == 200) {
                    this.setState({data: res.data.data})
                }
            })
        setInterval(() => axios.post('http://127.0.0.1:5000/api/v1.0/perRoleHome?token=' + localStorage.getItem("LStoken"), {"role": localStorage.getItem("LSrole")})
                .then(res => {
                    if (res.status == 200) {
                        this.setState({data: res.data.data})
                    }
                }).catch(r => {
                    this.props.history.push("/")
                })
            , 2000)
    }

    handler = (data, zoneIndex, name, zoneId) => {
        //console.log("data" ,data,zoneIndex,name, zoneId);
        axios.post("http://127.0.0.1:5000/api/v1.0/update?token=" + localStorage.getItem("LStoken"), {
            "zoneIndex": zoneIndex,
            "dataitem": data,
            "nameZone": name,
            "zoneId": zoneId
        })
            .then(res => {
                if (res.status == 200) {
                    this.state.data[parseInt(zoneIndex)].items = data;
                    this.setState({...this.state});
                }
            })
    }

    render() {
        const {data, handler, history} = this.props;
        return (
            <div className="firstdiv">
                <table className="tblHome">
                    <tr>
                        <td>
                        </td>
                        <td>
                            <img id="img" src={img} alt="" className="img"/>
                        </td>
                        <td>
                            <div id="bmsdiv">
                                <h1>BMS</h1>
                                <p> Building Management System is way to make smart homes</p>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td colSpan="4">
                            <Navigator data={this.state.data} handler={this.handler}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="4">
                            <ZoneSection data={this.state.data} handler={this.handler}/>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Home;
