import React, { Component } from "react";
import "./css/ZoneCard.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import Switch from '@material-ui/core/Switch';

class ZoneCard extends Component {
    constructor(props){
        super(props);
    }

    updateState=(e)=>{
            const{ items,zoneIndex, zoneName } = this.props;

            let itemsTemp=items;

            //console.log("to zone cartim "+ itemsTemp ,zoneIndex, zoneName)

            itemsTemp[parseInt(e.target.name)].status=e.target.checked;
            // Object.assign(items, { status:  e.target.checked });
            this.props.handler(itemsTemp,zoneIndex,zoneName)
            // console.log(itemsTemp)
    }

    render() {
    let { zoneName } = this.props;
    let { items } = this.props;
    console.log(items,"items")

    return (
      <div className="Card">


         {items.map((item,index)=>{
             console.log("item.status ",Boolean(item.status.toString()));
             return(<div>
                    <label>  {item.group} {item.itemName}   </label>

                    <Switch
                        name={index}
                        checked={item.status.toString()=="true"}
                        onChange={this.updateState}

                    />
                </div>)
            })
        }

      </div>
    );
  }
}
export default ZoneCard;
