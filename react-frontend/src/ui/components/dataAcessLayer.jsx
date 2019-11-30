import React, { Component } from 'react';
import axios from "axios";
const API_URL='http://localhost:5000';

class APIAccess extends Component{
    state = {
        users: []
    }
    ComponentDidMount=()=>{
        const url = '${API_URL}/api/v1.0/test';
        axios.get(url)
          .then(response => response.json())
            .then(responseData => this.setState({data: responseData.data}))
            }


    }

    export default APIAccess;




