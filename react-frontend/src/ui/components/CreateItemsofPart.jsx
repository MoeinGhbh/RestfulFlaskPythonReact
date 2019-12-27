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
            itemName: ''
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

                console.log('countofitems', countofitems);


                for (i; i < countofitems + 1; i++) {


                    eachZone.items.map(ListItems => {
                        console.log('ListItems.itemId', ListItems.itemId);
                        console.log('i', i);
                        if (i == ListItems.itemId) {
                            find = true
                            console.log('find = true', find = true);
                        }
                    })
                    if (find == false) {

                        LastIndex = i
                        console.log('(find == false)', LastIndex);
                    }
                }
                console.log('find', find);
                if (find == true) {
                    console.log('LastIndex = index + 1', countofitems + 1);
                    LastIndex = countofitems + 1
                }
                eachZone.items.push({
                    group: group,
                    itemId: LastIndex,
                    itemName: itemName,
                    status: true
                })

                console.log(eachZone.items);

                axios.post('http://127.0.0.1:5000/api/v1.0/additems?token=' + localStorage.getItem('LStoken'),
                    {
                        'group': group,
                        'itemName': itemName,
                        'zoneId': zoneId
                    }
                ).then(res => {
                    if (res.status == 200) {
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
                        <td></td>
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