import React, {Component} from 'react'
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import {Button} from "@material-ui/core";
import {string} from "prop-types";

class CreateItemsofPart extends Component {
    constructor() {
        super();
        this.state = {
            Zones: [],
            zoneId: '',
            group: '',
            itemName: '',
            speedType: ''
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

    AddItems = event => {
        const {group, itemName, zoneId, Zones} = this.state;
        Zones.map(eachZone => {
            if (eachZone.zoneId == zoneId) {

                let i = 1
                let find = false
                let LastIndex = 0
                let countofitems = eachZone.items.length
                let blankFind = false

                for (i; i < countofitems + 1; i++) {
                    eachZone.items.map(ListItems => {
                        if (i == ListItems.itemId) {
                            find = true
                        }
                    })
                    if (find == false) {
                        LastIndex = i
                        blankFind = true
                    } else {
                        find = false
                    }
                }
                if (blankFind == false) {
                    LastIndex = countofitems + 1
                }
                if (group != "Aircondition") {
                    eachZone.items.push({
                        group: group,
                        itemId: LastIndex,
                        itemName: itemName,
                        status: true
                    })
                } else if (group == "Aircondition") {
                    eachZone.items.push({
                        group: group,
                        itemId: LastIndex,
                        itemName: itemName,
                        speedType: "On/Off",
                        status: true
                    })
                    eachZone.items.push({
                        group: group,
                        itemId: LastIndex,
                        itemName: itemName,
                        speedType: "Slow",
                        status: true
                    })
                    eachZone.items.push({
                        group: group,
                        itemId: LastIndex,
                        itemName: itemName,
                        speedType: "Normal",
                        status: true
                    })
                    eachZone.items.push({
                        group: group,
                        itemId: LastIndex,
                        itemName: itemName,
                        speedType: "Fast",
                        status: true
                    })
                }


                axios.post('http://127.0.0.1:5000/api/v1.0/additems?token=' + localStorage.getItem('LStoken'),
                    {
                        'eachZone.items': eachZone.items,
                        'zoneId': zoneId
                    }
                ).then(res => {
                    if (res.status == 200) {
                        this.componentDidMount()
                        alert('تجهیز با موفقیت ثبت شد')
                    }
                }).catch(resllt => {
                    alert('تجیز ثبت نگردید')
                })
            }
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
                            <label>نام دسته را انتخاب نمایید</label>
                        </td>
                        <td>
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">تجیزات</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.group}
                                    onChange={this.handleChange}
                                    name="group"
                                >
                                    <MenuItem value="Lamp">Lamp</MenuItem>
                                    <MenuItem value="Socket">Socket</MenuItem>
                                    <MenuItem value="Curtain">Curtain</MenuItem>
                                    <MenuItem value="Aircondition">Aircondition</MenuItem>
                                </Select>
                            </FormControl>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>نام تجهیز را ثبت نمایید</label>
                        </td>
                        <td>
                            <input type="text" value={this.state.itemName} name="itemName"
                                   onChange={this.handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <Button variant="contained" color="secondary" zone={Zones}
                                    onClick={this.AddItems}> ذخیره </Button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }

}

export default CreateItemsofPart;