import React, {Component, useEffect} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigator from "../components/Navigator/Navigation";
import "./css/Home.css";
import ZoneSection from "../components/Zones/ZoneSetion";
import img from "../img/BMS.jpg";
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";

class Home extends Component {
    constructor(props) {
    super(props);
    this.state = {
            data: []}
    this.handler = this.handler.bind(this);
    const myRole = localStorage.getItem("LSrole")
    const myToken =   localStorage.getItem("LStoken")

        //console.log("sssssss"+localStorage.getItem("username"))
  }
   componentDidMount() {
      axios.post('http://127.0.0.1:5000/api/v1.0/perRoleHome?token='+ localStorage.getItem("LStoken"), {"role":localStorage.getItem("LSrole")})
            .then(res =>{
                this.setState({data: res.data.data})
            })
       setInterval(()=> axios.post('http://127.0.0.1:5000/api/v1.0/perRoleHome?token='+ localStorage.getItem("LStoken"), {"role":localStorage.getItem("LSrole")})
            .then(res =>{
                this.setState({data: res.data.data})
            }),2000)
    }

  handler=(data,zoneIndex, name, zoneId)=> {
      //console.log("data" ,data,zoneIndex,name, zoneId);
      axios.post("http://127.0.0.1:5000/api/v1.0/update?token="+ localStorage.getItem("LStoken"),{"zoneIndex":zoneIndex,"dataitem":data,"nameZone":name, "zoneId":zoneId })
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
      m fcv                        <Col>TV Room</Col>
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
