import React , {Component} from 'react';
import data from "../../../data";


class button extends Component{
    render(){

        const {lblBtn} = this.props;
        const {onClick} = this.props;

        return(
            <button type="button" onClick={onClick} >  {lblBtn} </button>
        );
    }
}

export default button;