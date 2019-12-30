import React, {Component} from "react";
import "./css/ZoneCard.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import Switch from '@material-ui/core/Switch';
import axios from "axios";

let Zoncardgroup;
let ZoncarditemId;

class ZoneCard extends Component {
    constructor(props) {
        super(props);


    }

    updateState = (e) => {
        const {items, zoneIndex, zoneName, zoneId} = this.props;
        let itemsTemp = items;
        itemsTemp[parseInt(e.target.name)].status = e.target.checked;
        this.props.handler(itemsTemp, zoneIndex, zoneName, zoneId)

        // console.log(items)
        // console.log('uart', zoneId, Zoncardgroup, ZoncarditemId, e.target.checked)
        // def sendtoBoard(zoneId,type,status):
        let sendStatus
        e.target.checked == true ? sendStatus = 1 : sendStatus = 0

        axios.post('http://127.0.0.1:5000/api/v1.0/sentoboard?token=' + localStorage.getItem('LStoken')
            , ({
                zoneId: zoneId,
                group: Zoncardgroup,
                itemId: ZoncarditemId,
                status: sendStatus
            })
        )
    }

    render() {
        let {zoneName} = this.props;
        let {items} = this.props;
        let {zoneId} = this.props;
        return (
            <div className="Card">
                {items.map((item, index) => {
                    //console.log("item.status ", Boolean(item.status.toString()));

                    Zoncardgroup = item.group
                    ZoncarditemId = item.itemId

                    return (<div>
                        <label>  {item.group} {item.itemName}   </label>
                        <Switch
                            name={index}
                            checked={item.status.toString() == "true"}
                            onChange={this.updateState}
                            zoneId={zoneId}
                        />
                    </div>)
                })
                }
            </div>
        );
    }
}

export default ZoneCard;
