import React, {Component} from "react";
import "./css/ZoneSection.css";
import ZoneCard from "./ZoneCard.js";
import {forEach} from "react-bootstrap/cjs/utils/ElementChildren";
//import data from "../../../Data";

export default class ZoneSection extends Component {
    render() {
        const {data, handler} = this.props;
        return (


            <div id="Zones">
                {
                    data.map((Zone, index) => {
                        return (<div id="Zone">
                                <a id={Zone.zoneName}>
                                         <h2> {Zone.zoneName} </h2>
                                                 <ZoneCard
                                                    zoneIndex={index}
                                                    zoneName={Zone.zoneName}
                                                    items={Zone.items}
                                                    handler={handler}
                                                    zoneId={Zone.zoneId}
                                                    className="card"/>
                                </a>
                        </div>)
                    })
                }
            </div>
        );
    }
}
