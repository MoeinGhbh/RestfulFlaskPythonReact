import React, {Component} from 'react'
import Switch from "@material-ui/core/Switch";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {distancArray} from "../../Helper";
import Button from "@material-ui/core/Button";
import axios from "axios";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Input from '@material-ui/core/Input';

class CreatePart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkState: false,
            Zones: [],
            ZoneId: ''

        }
    }

    componentDidMount() {
        axios.post('http://127.0.0.1:5000/api/v1.0/allHome?token=' + localStorage.getItem('LStoken'))
            .then(res => {
                this.setState({Zones: res.data.data})
            }).catch(res => {
            //this.props.history.push("/")
        })
    }

    updatechange = (e) => {
        console.log(e);
        this.setState({[e.target.name]: e.target.value})

    }

    deleteZone = (e) => {
        const {zoneName, zoneId} = this.state
        axios.post("http://127.0.0.1:5000/api/v1.0/delZone?token=" + localStorage.getItem("LStoken"),
            {
                "zoneId": zoneId
            })
            .then(res => {
                    if (res.status == 200) {
                        this.componentDidMount()
                        alert('قسمت با موفقیت حذف گردید')
                    }
                }
            )
            .catch(() => {
                    alert("این قسمت حذف نگردید")
                }
            )
    }

    changeCheckState = (e) => {
        // console.log("e=>>> ", e);
        this.setState({checkState: e.target.checked})
    }


    render() {
        const {Zones} = this.state;
        console.log('Zonessss', Zones);
        return (
            <div>
                <table>
                    <tr>
                        <td colSpan="2">
                            <label> حذف کردن قسمت به خانه ی هوشمند </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>آیا قسمتی برای برای حذف وجود دارد؟</label>
                        </td>
                        <td>
                            <Switch
                                checked={this.state.checkState}
                                onChange={this.changeCheckState}
                                name={"checkState"}
                            />
                        </td>
                        <td>
                            {this.state.checkState == true ?


                                <label>
                                    نام قسمت جدید را وارد نمایید

                                    <FormControl>
                                        <InputLabel id="demo-simple-select-label">قسمت</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={this.state.zoneId}
                                            onChange={this.updatechange}
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


                                </label>


                                : null}
                        </td>
                        <td>
                            <Button variant="contained" color="secondary"
                                    onClick={this.deleteZone}> حذف</Button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }

}

export default CreatePart;