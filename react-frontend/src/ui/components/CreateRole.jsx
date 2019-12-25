import React, {Component} from 'react'
import {Button} from "@material-ui/core";
import axios from "axios"

class CreateRole extends Component {
    constructor() {
        super();
        this.state = {role: ''}
    }

    updatechange = event => {
        this.setState({role: event.target.value})
    }

    addrole = event => {
        const {role} = this.state
        if (role != null) {
            axios.post('http://127.0.0.1:5000/api/v1.0/addrole?token=' + localStorage.getItem('LStoken'), {'role': role})
                .then(res => {
                    if (res.status == 200) {
                        console.log(res.status);
                        alert('نقش با نوفقیت ثبت شد')
                    }
                    if (res.status == 500){
                        console.log(res.status);
                        alert('نقش وجود دارد')
                    }

                }).catch(rr => {

                        alert('نقش وجود دارد')

                }
            )
        }
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td colSpan="2">
                            <label> ایجاد نقش </label>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <label>نقش را وارد کنید</label>
                        </td>
                        <td>
                            <input type="text" value={this.state.role} onChange={this.updatechange}/>
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="2">
                            <Button type="button" variant="contained" color="secondary" onClick={this.addrole}>ذخیره</Button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }

}

export default CreateRole;