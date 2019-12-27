import React, {Component} from 'react'
import {Button} from "@material-ui/core";
import axios from "axios"
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

class CreateRole extends Component {
    constructor() {
        super();
        this.state = {role: '', roles: []}
    }

    updatechange = event => {
        this.setState({role: event.target.value})
    }

    componentDidMount() {
        axios.post('http://127.0.0.1:5000/api/v1.0/GetAllroles?token=' + localStorage.getItem('LStoken'))
            .then(res => {
                this.setState({roles: res.data.data})
            }).catch(res => {
            this.props.history.push("/")
        })
    }


    delrole = event => {
        const {role} = this.state
        console.log(role);
        if (role != null) {
            axios.post('http://127.0.0.1:5000/api/v1.0/delrole?token=' + localStorage.getItem('LStoken'),
                {'role': role})
                .then(res => {
                    if (res.status == 200) {
                        console.log(res.status);
                        this.componentDidMount()
                        alert('نقش با نوفقیت حذف گردید')

                    }
                    if (res.status == 500) {
                        console.log(res.status);
                        alert('نقش وجود ندارد')
                    }
                })
                .catch(rr => {
                        alert('نقش مورد نظر برای نام کاربری استفاده شده است')
                    }
                )
        }
    }

    render() {
        const {roles} = this.state
        return (
            <div>
                <table>
                    <tr>
                        <td colSpan="2">
                            <label> حذف نقش </label>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <label>نقش را انتخاب نمایید</label>
                        </td>
                        <td>
                            {/*<input type="text" value={this.state.role} onChange={this.updatechange}/>*/}
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">نقش</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.role}
                                    onChange={this.updatechange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {
                                        roles.map(role => {
                                            return <MenuItem
                                                value={role.role}>{role.role}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="2">
                            <Button type="buttonn " variant="contained" color="secondary"
                                    onClick={this.delrole}>حذف</Button>
                        </td>

                    </tr>
                </table>
            </div>
        )
    }

}

export default CreateRole;