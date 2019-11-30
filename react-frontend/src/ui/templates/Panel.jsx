import React, { Component } from "react";
import "./css/Panel.css";
//import DropdownButton from "react-bootstrap/DropdownButton";
//import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
//import ItemCard from "../components/ItemsCard";
import data from "../../Data.json";
import ZoneCardEdit from "../components/Zones/ZoneCardEdit";

class Panel extends Component {
  constructor() {
    super();
    this.SelectZone = this.SelectZone.bind(this);
    this.ItemsOnZone = this.ItemsOnZone.bind(this);
    this.updateJsonItems = this.updateJsonItems.bind(this);
    var ZoneSelected,
      ItemSelected = "";
     this.state = { data };
    this.handler = this.handler.bind(this);
    var toooo = 0;
  }

  handler() {}

  updateJsonItems(e) {
    

    //onsole.log(data)

    //var myObj = JSON.stringify(data);
    //var myObj =data;
    
    //var i, j, h, nn;

    // myObj.navigation.map(p=>(
    //   console.log("aaaa"+p)
      
    // ))



    // for (i in data.navigation) {
    //   //console.log(i);
    //   for (j in data.[i].items) {
    //     //console.log(j);
    //     nn = data.navigation[i].items[j];
    //     // for (h in nn.Lamp) {
    //        //console.log(nn.Lamp);
    //       //Object.assign( nn.Lamp, { "100000": "off" });
    //     }
    //     for (h in nn.Curtains) {
    //       //console.log(h);
    //       //oook.push(<label> myObj.navigation[i].items[j].lamp</label>);
    //       //oook.push(<Button> delete </Button>);
    //     }
    //   }
    
    

    

    this.toooo = Number(e.target.id) + 1;
    //Object.assign( myObj.navigation.items.Lamp, { toooo: "off" });

    //console.log(data.navigation[this.ItemSelected].items[this.ItemSelected]);

    //Object.assign( myObj.navigation[this.ItemSelected].items[this.ItemSelected], { toooo: "off" });

    // oook = "";
    // var myObj, i, j, h, nn;
    // myObj = data;
    // var oook = [];
    // for (i in myObj.navigation) {
    //   for (j in myObj.navigation[i].items) {
    //     nn = myObj.navigation[i].items[j];
    //     for (h in nn.Lamp) {
    //       console.log(h);
    //     }
    //     for (h in nn.Curtains) {
    //       oook.push(<label> myObj.navigation[i].items[j].lamp</label>);
    //       oook.push(<Button> delete </Button>);
    //     }
    //   }
    // }
    //this.handler(data);
  }

  ItemsOnZone(e) {
    this.ItemSelected = e.target.value;
    //console.log(e.target.value);
    //this.setState({ inputvalue: e.target.value });
  }

  SelectZone(e) {
    this.ZoneSelected = e.target.value;
    //console.log(this.ZoneSelected);
    //this.setState({ inputvalue: e.target.value });
  }

  render() {
    //const { data, handler } = this.props;
    //console.log(data)
    return (
      <div className="divMain">
        <table style={{ border: "1px solid black" }}>
          <tr>
            <td colSpan="2">
              <label> اضافه کردن اقلام به خانه ی هوشمند </label>
            </td>
            <td></td>
          </tr>

          <tr>
            <td>
              <label> انتخاب قسمت خانه </label>
            </td>
            <td colSpan="2">
              <select id="Zones" onChange={this.SelectZone}>
                {/* items.map(item => {
                    return (<option value={item}>{item}</option>)
                  }) */}

                <option>Choose your option</option>
                <option value="0">TV Room</option>
                <option value="1">Kitchen</option>
                <option value="2">BathRoom</option>
                <option value="3">Room 1</option>
                <option value="4">Room 2</option>
                <option value="5">Room 3</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <label> اضافه کردن اقلام به هر قسمت خانه </label>
            </td>
            <td colSpan="2">
              <select id="Items" onChange={this.ItemsOnZone}>
                <option>Choose your option</option>
                <option value="0">Lamp</option>
                <option value="1">Curtains</option>
                <option value="2">AirCondition</option>
                <option value="3">Socket</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>انتخاب نام</label>
            </td>
            <input id="name" />
          </tr>

          <tr>
            <td colSpan="2"></td>
            <td>
              <Button onClick={this.updateJsonItems}  > اضافه کردن </Button>
            </td>
          </tr>
        </table>

        <div id="Zones">
          {/* <h2>{data.navigation.content}</h2> */}

          {data.navigation.map(Zone => {
            return (
              <div id="Zone">
                <ZoneCardEdit
                  content={Zone.name}
                  items={Zone.items}
                  className="card"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Panel;
