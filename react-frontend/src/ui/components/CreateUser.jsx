import React, {Component} from 'react'
import {Button} from "@material-ui/core";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {distancArray} from "../../Helper";
import FormControl from "@material-ui/core/FormControl";

class CreateUser extends Component {
    constructor() {
        super();
        this.state = {
            newuser: '',
            newpassword: '',
            secondpassword: '',
            roleId:'',
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

    addName = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    insertUserPass = event => {
        const {newuser, newpassword, secondpassword,roleId} = this.state
        console.log(newuser, newpassword, secondpassword,roleId)
        console.log(localStorage.getItem("LStoken"))
        if (newpassword == secondpassword)
            axios.post('http://127.0.0.1:5000/api/v1.0/createuser?token=' + localStorage.getItem("LStoken"),
                {
                    "username": newuser,
                    "password": newpassword,
                    "roleId": roleId
                }
            ).then(resu => {
                if (resu.status == 200) {
                    alert("نام کاربری با موفقیت ثبت گردید")
                }
            })
                .catch(res => {
                    alert("نام کاربری وجود دارد")
                })

        else {
            alert("رمز ها با هم منطبق نیستند")
        }
    }

    render() {
        const {roles} = this.state
        return (
            <div>
                <table>
                    <tr>
                        <td colSpan="2">
                            <label>ایجاد نام کاربری</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>نام کاربری را وارد کنید</label>
                        </td>
                        <td>
                            <input type="text" name="newuser" onChange={this.addName} value={this.state.newuser}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>رمز عبور خود را وارد کنید</label>
                        </td>
                        <td>
                            <input type="password" name="newpassword" onChange={this.addName}
                                   value={this.state.newpassword}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>رمز عبور خود را دوباره وارد کنید</label>
                        </td>
                        <td>
                            <input type="password" name="secondpassword" onChange={this.addName}
                                   value={this.state.secondpassword}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>نقش مورد نظر را انتخاب کنید</label>
                        </td>
                        <td>
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">نقش</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.roleId}
                                    onChange={this.addName}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {
                                        roles.map(role => {
                                            return <MenuItem
                                                value={role.id}>{role.role}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <Button type="button" variant="contained" color="secondary" onClick={this.insertUserPass}>ذخیره</Button>

                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default CreateUser;