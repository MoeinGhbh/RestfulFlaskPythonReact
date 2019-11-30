import React, {Component, useEffect} from "react";
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
  }
   componentDidMount() {
        fetch('http://127.0.0.1:5000/api/v1.0/allHome')
            .then(response => response.json())
            .then(responseData => this.setState({data: responseData.data}))
    }
  handler(data) {
    this.setState(data);
  }
  render() {
    const { data, handler } = this.props;
    return (
      <div class="container-fluid">
        <h1>BMS</h1>
        <p> Building Management System is way to make smart homes</p>
        <Navigator data={this.state.data} handler={this.handler} name={"asdfas"} />
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
