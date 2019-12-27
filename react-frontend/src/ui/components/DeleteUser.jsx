import React, {Component} from 'react'
import {Button} from "@material-ui/core";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {distancArray} from "../../Helper";
import FormControl from "@material-ui/core/FormControl";

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            username: ''
        }
    }

    componentDidMount() {
        axios.post('http://127.0.0.1:5000/api/v1.0/getallusers?token=' + localStorage.getItem('LStoken'))
            .then(res => {
                this.setState({users: res.data.data})
            })
    }

    updatestate = event => {
        this.setState({
            username: event.target.value
        })
    }

    deletetUserPass = event => {
        const {username} = this.state
        console.log('username', username)
        console.log(localStorage.getItem("LStoken"))
        axios.post('http://127.0.0.1:5000/api/v1.0/deleteuser?token=' + localStorage.getItem("LStoken"),
            {
                "username": username
            }
        ).then(resu => {
            if (resu.status == 200) {
                this.componentDidMount()
                alert("نام کاربری با موفقیت حذف گردید")
            }
        })
            .catch(res => {
                alert("نام کاربری وجود ندارد")
            })


    }

    render() {
        const {users} = this.state
        return (
            <div>
                <table>
                    <tr>
                        <td colSpan="2">
                            <label>حذف نام کاربری</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>نام کاربری را انتخاب نمایید</label>
                        </td>
                        <td>
                            {/*<input type="text" name="newuser" onChange={this.addName} value={this.state.newuser}/>*/}
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">نام کاربری</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.username}
                                    onChange={this.updatestate}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {
                                        users.map(user => {
                                            console.log(user);
                                            return <MenuItem
                                                value={user.username}>{user.username}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </td>
                    </tr>


                    <tr>
                        <td colSpan="2">
                            <Button type="button" variant="contained" color="secondary"
                                    onClick={this.deletetUserPass}>ذخیره</Button>

                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default CreateUser;