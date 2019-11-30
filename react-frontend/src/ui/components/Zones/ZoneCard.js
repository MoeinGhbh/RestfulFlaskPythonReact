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
        this.updateState=this.updateState.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
        updateState(aaa){
            // console.log(aaa)
            // alert(aaa)
        }

        handleChange(aaa){
            // console.log(aaa)
            //  alert(aaa)
        }

    render() {
    let { name } = this.props;
    let { items } = this.props;

    var i,j,k,t,f;
    var rwLMP = [];
    var rwCTN = [];
    var rwACD = [];
    var rwSKT = [];

    {/*
    <BootstrapSwitchButton
    checked={false}
    onlabel='Admin User'
    offlabel='Regular User'
    onChange={(checked: boolean) => {
        this.setState({ isUserAdmin: checked })
    }} />
    */}


    for (j in  items)
      for (i in items[j].Lamp)
      {
          rwLMP.push(<label> {i} </label> );
          let tmp;
          if(items[j].Lamp[i]=="true")
                tmp=true
          else
              tmp=false
          rwLMP.push(<BootstrapSwitchButton  checked={tmp} onstyle="primary" offstyle="info"

          onClick={this.updateState(true)}
          />)

          rwLMP.push(
           <Switch
        checked={tmp}
        onChange={this.updateState(true)}
        value="true"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
          )

      }

    for (j in  items)
      for (i in items[j].Curtains)
      {
          let tmp;
          if(items[j].Curtains[i]=="true")
                tmp=true
          else
              tmp=false
        rwCTN.push(<label> {i} </label> );
        rwCTN.push(<BootstrapSwitchButton checked={tmp} onstyle="primary" offstyle="info"/>)
      }

      for (j in  items)
      for (i in items[j].AirCondition)
      {
          let tmp;
          if(items[j].AirCondition[i]=="true")
                tmp=true
          else
              tmp=false
        rwACD.push(<label> {i} </label> );
        rwACD.push(<BootstrapSwitchButton checked={tmp} onstyle="primary" offstyle="info"/>)
      }

      for (j in  items)
      for (i in items[j].Socket)
      {
          let tmp;
          if(items[j].Socket[i]=="true")
                tmp=true
          else
              tmp=false
        rwSKT.push(<label>  {i} </label> );
        rwSKT.push(<BootstrapSwitchButton checked={tmp} onstyle="primary" offstyle="info"/>)
      }
    return (
      <div className="Card">
        <h3>{name}</h3>
        {/* <img src={} height="42" width="42" /> */}
        <Container>
          <Row>
            <Col>{rwLMP}</Col>
            <Col>{rwCTN}</Col>
            <Col>{rwACD}</Col>
            <Col>{rwSKT}</Col>
              <Col><BootstrapSwitchButton  checked={true} onstyle="primary" offstyle="info"
          onChange={this.updateState(true)}
                onclick={this.updateState(true)}
              /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default ZoneCard;
