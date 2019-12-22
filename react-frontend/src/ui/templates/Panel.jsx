import React, {Component} from "react";
import "./css/Panel.css";
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import axios from "axios";
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {checkState: false, newZone: '', role: '', age: ''}
        const myToken = localStorage.getItem("LStoken")
    }


    updateState = (e) => {
        this.setState({checkState: e.target.checked})
    }

    getZoneRole = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    addZone = (e) => {
        console.log(localStorage.getItem("LStoken"))
        const {newZone, role} = this.state
        axios.post("http://127.0.0.1:5000/api/v1.0/addZone?token=" + localStorage.getItem("LStoken"),
            {
                "newZone": this.state.newZone,
                "role": this.state.role
            })
            .then(
                r => console.log(r)
            )
    }

    handleChange = (e) => {
        this.setState({age:e.target.value})
        // console.log('ssss'+this.state.age)
    }

    render() {





        return (

            <div className="divMain">


                <table>
                    <tr>
                        <td>

                            <table style={{border: "1px solid black"}}>
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
                                    {this.state.checkState == true?
                                        <label>نام قسمت جدید را وارد نمایید <input type="text" name="newZone" value={this.state.newZone}
                                                                                           onChange={this.getZoneRole}/>
                                            نقش را انتخاب نمایید <input type="text" value={this.state.role} onChange={this.getZoneRole}
                                                                        name="role"/>
                                            <Button variant="contained" color="secondary" onClick={this.addZone}> ذخیره</Button>
                                        </label>:null}
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
                                    <td></td>
                                    <td>
                                        <FormControl>
                                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={this.state.age}

                                                onChange={this.handleChange}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>

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
