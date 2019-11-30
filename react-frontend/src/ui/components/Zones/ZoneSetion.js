import React, { Component } from "react";
import "./css/ZoneSection.css";
import ZoneCard from "./ZoneCard.js";
import {forEach} from "react-bootstrap/cjs/utils/ElementChildren";
//import data from "../../../Data";

export default class ZoneSection extends Component {
  render() {
    const { data, handler } = this.props;
    //console.log(data)
    return (
      <div id="Zones">
            {/*{console.log("data",data)}*/}

           {data.map(Zone => {
             return <div id="Zone"> <h2> {Zone.name} </h2>   <ZoneCard content={Zone.name} items={Zone.items}  className="card" /> </div>;
          })}
      </div>
    );
  }
}
