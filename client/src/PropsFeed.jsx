import React, { Component } from 'react';
import axios from 'axios';

class PropsFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            props: []
        }
    }
    componentDidMount() {
        console.log('PropsFeed rendering correctly')
        // axios call to get all props submitted
        axios.get(`api/props`)
        .then(res => {
            this.setState({
                props: res.data.data
            })
        })
    }
    render() {
        let myPropsList = this.state.props.map( (prop, index) => {
            return <li key={index}>{prop.body}</li>
        })
        return(
            <div>
            <p className="PropsFeedText">This is a list of all props:</p>
            <ul>
                {myPropsList}
            </ul>
            </div>
        )    
    }
}

export default PropsFeed;