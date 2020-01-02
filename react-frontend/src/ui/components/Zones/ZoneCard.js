import React, {Component} from "react";
import "./css/ZoneCard.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import Switch from '@material-ui/core/Switch';
import axios from "axios";
import Lamp from "../../img/Lamp.png"
import Socket from "../../img/Socket.png"
import Curtain from "../../img/Curtain.png"
import Aircondition from "../../img/Aircondition.png"

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
                    Zoncardgroup = item.group
                    ZoncarditemId = item.itemId
                    return (
                        item.group != "Aircondition" ?
                            <div id="divOth">
                                {item.group == "Lamp" ? <img src={Lamp} alt="" className="imgIcon"/> : null}
                                {item.group == "Socket" ? <img src={Socket} alt="" className="imgIcon"/> : null}
                                {item.group == "Curtain" ? <img src={Curtain} alt="" className="imgIcon"/> : null}
                                <label>  {item.group} {item.itemName} {item.speed} </label>
                                <Switch name={index}
                                        checked={item.status.toString() == "true"}
                                        onChange={this.updateState}
                                        zoneId={zoneId}/>
                            </div>
                            :
                            item.group == "Aircondition" ?
                                <div id="divAir">
                                    {item.group == "Aircondition" ?
                                        <img src={Aircondition} alt="" className="imgIcon"/> : null}
                                    <label>  {item.group} {item.itemName} {item.speedType} </label>
                                    <Switch name={index}
                                            checked={item.status.toString() == "true"}
                                            onChange={this.updateState}
                                            zoneId={zoneId}/>
                                </div>
                                :
                                null
                    )
                })
                }
            </div>
        );
    }
}

export default ZoneCard;
