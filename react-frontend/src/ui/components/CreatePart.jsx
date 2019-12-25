import React, {Component} from 'react'
import Switch from "@material-ui/core/Switch";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {distancArray} from "../../Helper";
import Button from "@material-ui/core/Button";
import axios from "axios";

class CreatePart extends Component {
    constructor() {
        super()
        this.state = {
            checkState: false,
            newZone: '',
            newZonerole: '',
            roles: []
        }
    }

    componentDidMount() {
        axios.post('http://127.0.0.1:5000/api/v1.0/GetAllroles?token=' + localStorage.getItem('LStoken'))
            .then(res => {
                this.setState({roles: res.data.data})
            }).catch(res => {
            this.props.history.push("/")
        })
    }

    updateState = (e) => {
        console.log(e);
        this.setState({[e.target.name]: e.target.value})
    }

    addZone = (e) => {
        //console.log(localStorage.getItem("LStoken"))
        const {newZone, newZonerole} = this.state
        axios.post("http://127.0.0.1:5000/api/v1.0/addZone?token=" + localStorage.getItem("LStoken"),
            {
                "newZone": newZone,
                "role": newZonerole
            })
            .then(res => {
                    this.setState({roles: res});
                }
            )
            .catch(() =>
                // r => alert(r)
                alert("این قسمت قبلا اضافه شده است")
            )
    }

    changeCheckState = (e) => {
        console.log("e=>>> ", e);
        this.setState({checkState: e.target.checked})
    }


    render() {
        const {roles} = this.state;
        return (
            <div>
                <table>
                    <tr>
                        <td colSpan="2">
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
                                onChange={this.changeCheckState}
                                name={"checkState"}
                            />
                        </td>
                        {this.state.checkState == true ?
                            <label>
                                نام قسمت جدید را وارد نمایید
                                <input type="text"
                                       name="newZone"
                                       value={this.state.newZone}
                                       onChange={this.updateState}/>
                                نقش را انتخاب نمایید

                                <FormControl>
                                    <InputLabel id="lblRole">نقش</InputLabel>
                                    <Select
                                        labelId="lblRole"
                                        id="demo-simple-selectaaaa"
                                        value={this.state.newZonerole}
                                        onChange={this.updateState}
                                        name="newZonerole"
                                    >
                                        <MenuItem value={"none"}>
                                            <em>None</em>
                                        </MenuItem>
                                        {
                                            roles.map(roles => {
                                                return (<MenuItem
                                                    value={roles.id}>{roles.role}</MenuItem>)
                                            })
                                        }
                                    </Select>
                                </FormControl>

                                <Button variant="contained" color="secondary"
                                        onClick={this.addZone}> ذخیره</Button>
                            </label> : null}
                    </tr>
                </table>
            </div>
        )
    }

}

export default CreatePart;