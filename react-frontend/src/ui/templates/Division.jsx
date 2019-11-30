import React, {Component, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Home.css";
import ZoneSection from "../components/Zones/ZoneSetion";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
     const { data, handler, name} = this.props;
     console.log("igiuhgiu" + { name })
    return (
      <div class="container-fluid">
      </div>
    );
  }
}
export default Home;
