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
let Code;


class ZoneCard extends Component {
    constructor(props) {
        super(props);
    }

    updateState = (e) => {
        const {items, zoneIndex, zoneName, zoneId} = this.props;
        let itemsTemp = items;

        if (e.target.value == "") {
            itemsTemp[parseInt(e.target.name)].status = e.target.checked;
            this.props.handler(itemsTemp, zoneIndex, zoneName, zoneId)

        } else if (e.target.value == "Slow") {
            if (e.target.checked == true) {
                itemsTemp[parseInt(e.target.name)].status = e.target.checked;
                this.props.handler(itemsTemp, zoneIndex, zoneName, zoneId)
                //normal
                itemsTemp[parseInt((parseInt(e.target.name) + 1))].status = false;
                this.props.handler(itemsTemp, zoneIndex, zoneName, zoneId)
                //fast
                itemsTemp[parseInt((parseInt(e.target.name) + 2))].status = false;
                this.props.handler(itemsTemp, zoneIndex, zoneName, zoneId)
            } else {
                itemsTemp[parseInt(e.target.name)].status = e.target.checked;
                this.props.handler(itemsTemp, zoneIndex, zoneName, zoneId)
            }
        } else if (e.target.value == "Normal") {
            if (e.target.checked == true) {
                //normal
                itemsTemp[parseInt(e.target.name)].status = e.target.checked;
                this.props.handler(itemsTemp, zoneIndex, zoneName, zoneId)
                //slow
                itemsTemp[parseInt((parseInt(e.target.name) - 1))].status = false;
                this.props.handler(itemsTemp, zoneIndex, zoneName, zoneId)
                //fast
                itemsTemp[parseInt((parseInt(e.target.name) + 1))].status = false;
                this.props.handler(itemsTemp, zoneIndex, zoneName, zoneId)
            } else {
                //normal
                itemsTemp[parseInt(e.target.name)].status = e.target.checked;
                this.props.handler(itemsTemp, zoneIndex, zoneName, zoneId)
            }
        } else if (e.target.value == "Fast") {
            if (e.target.checked == true) {
                //fast
                itemsTemp[parseInt(e.target.name)].status = e.target.checked;
                this.props.handler(itemsTemp, zoneIndex, zoneName, zoneId)
                //normal
                itemsTemp[parseInt((parseInt(e.target.name) - 1))].status = false;
                this.props.handler(itemsTemp, zoneIndex, zoneName, zoneId)
                //slow
                itemsTemp[parseInt((parseInt(e.target.name) - 2))].status = false;
                this.props.handler(itemsTemp, zoneIndex, zoneName, zoneId)
            } else {
                //fast
                itemsTemp[parseInt(e.target.name)].status = e.target.checked;
                this.props.handler(itemsTemp, zoneIndex, zoneName, zoneId)
            }

        }


        // send data to hardware
        let sendStatus
        e.target.checked == true ? sendStatus = 1 : sendStatus = 0
        axios.post('http://127.0.0.1:5000/api/v1.0/sentoboard?token=' + localStorage.getItem('LStoken')
            , ({
                    Code: Code,
                    group: Zoncardgroup,
                    itemId: ZoncarditemId,
                    status: sendStatus
                }
            )
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
                    Code = item.code
                    return (
                        item.group != "Aircondition" ?
                            <div id="divOth">
                                {item.group == "Lamp" ? <img src={Lamp} alt="" className="imgIcon"/> : null}
                                {item.group == "Socket" ? <img src={Socket} alt="" className="imgIcon"/> : null}
                                {item.group == "Curtain" ? <img src={Curtain} alt="" className="imgIcon"/> : null}
                                <label>  {item.group} {item.itemName}  </label>
                                <Switch name={index}
                                        checked={item.status.toString() == "true"}
                                        onChange={this.updateState}
                                        zoneId={zoneId}

                                />
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
                                            zoneId={zoneId}
                                            value={item.speedType}
                                    />
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
