import React, {Component} from 'react'
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import {Button} from "@material-ui/core";
import {string} from "prop-types";
import ZoneCardEdit from "../components/Zones/ZoneCardEdit"

class DeleteItemsofPart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Zones: [],
            zoneId: ''
            ,items: []
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    componentDidMount() {
        axios.post('http://127.0.0.1:5000/api/v1.0/allHome?token=' + localStorage.getItem('LStoken'))
            .then(res => {
                this.setState({Zones: res.data.data})
            }).catch(resl => {
            this.props.history.push("/")
        })
    }

    reloadhandledata(){

        console.log('reloadhandledata');
        axios.post('http://127.0.0.1:5000/api/v1.0/allHome?token=' + localStorage.getItem('LStoken'))
            .then(res => {
                // console.log('res',res);
                // console.log('res',res.data.data);
                this.setState({Zones: res.data.data})
            })
    }





    render() {
        const {Zones} = this.state
        return (
            <div>
                <table>
                    <tr>
                        <td colSpan="2">
                            <label> اضافه کردن اقلام به خانه ی هوشمند </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>قسمت خانه را انتخاب نمایید.</label>
                        </td>
                        <td>
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">قسمت</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.zoneId}
                                    onChange={this.handleChange}
                                    name="zoneId"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {
                                        Zones.map(zone => {
                                            return <MenuItem
                                                value={zone.zoneId}>{zone.zoneName}
                                            </MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {this.state.zoneId != "" ?

                                Zones.map(Zone => {
                                    // if (Zone.zoneId == this.state.zoneId & Zone.items !== [])  {
                                    if (Zone.zoneId == this.state.zoneId )  {

                                        return (
                                            <div id="Zone">
                                                <ZoneCardEdit
                                                    zoneName={Zone.zoneName}
                                                    items={Zone.items}
                                                    zoneId={Zone.zoneId}
                                                    reloadhandledata={this.reloadhandledata}
                                                    className="card"
                                                />
                                            </div>

                                        );

                                    }
                                })
                                : null}
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default DeleteItemsofPart;