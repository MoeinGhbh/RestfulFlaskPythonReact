import React, {Component} from 'react'
import Switch from "@material-ui/core/Switch";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {distancArray} from "../../Helper";
import Button from "@material-ui/core/Button";

class CreatePart extends Component {
    render() {
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
                                        {/*{*/}
                                        {/*    distancArray(data, "accessLevel").map(roles => {*/}
                                        {/*        return <MenuItem*/}
                                        {/*            value={roles}>{roles}</MenuItem>*/}
                                        {/*    })*/}
                                        {/*}*/}
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