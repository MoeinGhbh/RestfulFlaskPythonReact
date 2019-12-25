import React, {Component} from "react";
import "./css/Panel.css";
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import axios from "axios";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {distancArray} from "../../Helper";
import CreateUser from "../components/CreateUser";
import CreateRole from "../components/CreateRole";

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {checkState: false, newZone: '', newZonerole: '', age: ''}
        const myToken = localStorage.getItem("LStoken")
    }


    updateState = (e) => {
        this.setState({checkState: e.target.checked})
    }

    getZoneRole = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    addZone = (e) => {
        //console.log(localStorage.getItem("LStoken"))
        const {newZone, role} = this.state
        axios.post("http://127.0.0.1:5000/api/v1.0/addZone?token=" + localStorage.getItem("LStoken"),
            {
                "newZone": this.state.newZone,
                "role": this.state.newZonerole
            })
            .then(res => {
                    console.log(res)
                }
            )
            .catch(() =>
                // r => alert(r)
                alert("این قسمت قبلا اضافه شده است")
            )
    }

    handleChange = (e) => {
        this.setState({age: e.target.value})
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
                    </tr>
                    <tr>
                        <td>
                            <CreateUser/>
                        </td>
                    </tr>
                    <tr>
                        <td>

                            <table>
                                <tr>
                                    <td colspan="2">
                                        <label> اضافه کردن قسمت به خانه ی هوشمند </label>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>آیا ناحیه جدید ایجاد شده است؟</label>
                                    </td>
                                    <td>
                                        <Switch
                                            checked={this.state.checkState}
                                            onChange={this.updateState}
                                        />
                                    </td>
                                    {this.state.checkState == true ?
                                        <label>
                                            نام قسمت جدید را وارد نمایید
                                            <input type="text"
                                                   name="newZone"
                                                   value={this.state.newZone}
                                                   onChange={this.getZoneRole}/>
                                            نقش را انتخاب نمایید

                                            <FormControl>
                                                <InputLabel id="lblRole">نقش</InputLabel>
                                                <Select
                                                    labelId="lblRole"
                                                    id="demo-simple-selectaaaa"
                                                    value={this.state.newZonerole}
                                                    onChange={this.getZoneRole}
                                                    name="newZonerole"
                                                >
                                                    {/*<input type="text"*/}
                                                    {/*       value={this.state.newZonerole}*/}
                                                    {/*       onChange={this.getZoneRole}*/}
                                                    {/*       name="newZonerole"/>*/}

                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    {
                                                        distancArray(data, "accessLevel").map(roles => {
                                                            return <MenuItem
                                                                value={roles}>{roles}</MenuItem>
                                                        })
                                                    }
                                                </Select>
                                            </FormControl>

                                            <Button variant="contained" color="secondary"
                                                    onClick={this.addZone}> ذخیره</Button>
                                        </label> : null}
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>

                        <td>
                            <table>
                                <tr>
                                    <td colspan="2">
                                        <label> اضافه کردن اقلام به خانه ی هوشمند </label>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>نقش را انتخاب نمایید</label>
                                    </td>
                                    <td>
                                        <FormControl>
                                            <InputLabel id="demo-simple-select-label">نقش</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={this.state.age}
                                                onChange={this.handleChange}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                {
                                                    distancArray(data, "accessLevel").map(roles => {
                                                        return <MenuItem
                                                            value={roles}>{roles}</MenuItem>
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
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
                                                value={this.state.age}
                                                onChange={this.handleChange}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                {
                                                    data.map(zone => {
                                                        return <MenuItem
                                                            value={zone.zoneName}>{zone.zoneName}</MenuItem>
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </td>
                                </tr>
                            </table>
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



