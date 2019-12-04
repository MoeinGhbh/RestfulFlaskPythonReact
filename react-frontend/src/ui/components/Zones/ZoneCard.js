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
            const{ items } = this.props;
            Object.assign(items, { status: "off" });
            console.log(items)
        }

        // const[state, setState] = React.useState({
        //     checkedA: true,
        //     checkedB: true,
        //   });
        //
        // const handleChange = name => event => {
        //     setState({ ...state, [name]: event.target.checked });
        //   };

    render() {
    let { name } = this.props;
    let { items } = this.props;
    console.log(items)

    return (
      <div className="Card">
        <h3>{name}</h3>
        {/* <img src={} height="42" width="42" /> */}

         {items.map(item=>{

                return(<div>
                    <label> {item.group}  {item.name} {item.status}  {Boolean('true')} {Boolean('True')} </label>

                    <Switch
                        checked={item.status}
                        onChange={this.updateState}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />

                     <Switch
                        checked={true}
                        onChange={this.updateState}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />

                     <Switch
                        checked={false}
                        onChange={this.updateState}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />

                </div>)
            })
        }

      </div>
    );
  }
}
export default ZoneCard;
