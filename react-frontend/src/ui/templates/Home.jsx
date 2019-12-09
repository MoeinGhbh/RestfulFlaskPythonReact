import React, {Component, useEffect} from "react";
import axios from "axios";
//import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import Navigator from "../components/Navigator/Navigation";
import img from "../img/BMS.jpg";
import "./css/Home.css";
import ZoneSection from "../components/Zones/ZoneSetion";
//import data from "../../Data.json";
//import data2 from "../components/API";
//import data2 from "../components/dataAcessLayer.jsx";


class Home extends Component {
  constructor() {
    super();
    this.state = {
            data: []}
    this.handler = this.handler.bind(this);
    const myRole = localStorage.getItem("LSrole")
    const myToken =   localStorage.getItem("LStoken")
       //console.log(myRole)
      //console.log(myToken)
  }
   componentDidMount() {
      axios.post('http://127.0.0.1:5000/api/v1.0/allHome?token='+ localStorage.getItem("LStoken"))
            .then(res =>{
                this.setState({data: res.data.data})
            })
       setInterval(()=> axios.post('http://127.0.0.1:5000/api/v1.0/allHome?token='+ localStorage.getItem("LStoken"))
            .then(res =>{
                this.setState({data: res.data.data})
            }),20000)
    }


  handler=(data,zoneIndex)=> {
      console.log("data " ,data,zoneIndex);//"items": [{"id": 1, "group": "lamp", "name": "Halogen", "status": "true"},{"id": 2, "group": "lamp", "name": "luster", "status": "false"}]
      //  "1": {"id": 1, "name": "TVRoom",items:[] },

      // this.state.data[parseInt(zoneIndex)].items=data;
      // this.setState({...this.state});

      axios.post("http://127.0.0.1:5000/api/v1.0/update",{})
          .then(res=>{
              if(res.status==200){
                  this.state.data[parseInt(zoneIndex)].items=data;
                  this.setState({...this.state});
          }
      })

  }

  render() {
    const { data, handler } = this.props;
    //console.log({data})
    return (
      <div class="container-fluid">
        <h1>BMS</h1>
        <p> Building Management System is way to make smart homes</p>
        <Navigator data={this.state.data} handler={this.handler}  />
        <br />
        {/* <div className="icone" id="icone">
          <img src={img} alt="" className="img" />
        </div>  */}
        <ZoneSection data={this.state.data} handler={this.handler} />
        {/* <Container>
          <Row>
            <Col>TV Room</Col>
            <Col>Kitchen</Col>
          </Row>
          <Row>
            <Col>Rome 1</Col>
            <Col>Rome 2</Col>
            <Col>Rome 3</Col>
          </Row>
        </Container> */}
      </div>
    );
  }
}

export default Home;
