import React, {Component} from "react";
import "./css/ZoneCard.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import Switch from '@material-ui/core/Switch';

class ZoneCard extends Component {
    constructor(props) {
        super(props);
    }

    updateState = (e) => {
        const {items, zoneIndex, zoneName, zoneId} = this.props;
        let itemsTemp = items;
        itemsTemp[parseInt(e.target.name)].status = e.target.checked;
        // Object.assign(items, { status:  e.target.checked });
        console.log("lll"+zoneId)
        this.props.handler(itemsTemp, zoneIndex, zoneName,zoneId )

    }

    render() {
        let {zoneName} = this.props;
        let {items} = this.props;
        let {zoneId} = this.props;
        return (
            <div className="Card">
                {items.map((item, index) => {
                    //console.log("item.status ", Boolean(item.status.toString()));
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
