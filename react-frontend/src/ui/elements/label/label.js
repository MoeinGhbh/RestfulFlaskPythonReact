import React , {Component} from 'react';

class label extends Component{
    render(){

        const {text} = this.props;
        return(
            <label> {text} </label>
        );
    }
}

export default label;