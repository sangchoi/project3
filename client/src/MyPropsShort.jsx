import React, { Component } from 'react';
import Props from './Props';
import axios from 'axios';
import './MyPropsShort.css'

class MyPropsShort extends Component {
    constructor(props) {
        super(props)
        this.state = {
            props: []
        }
    }
    componentDidMount() {
        console.log('MyProps componentDidMount, getting props')
        // get props with users and profiles
        axios.get(`api/user/${this.props.user._id}/props`)
        .then(res => {
            console.log(res)
            console.log('datadataprops', res.data.data)
            this.setState({
                props: res.data.data
            })
        })
    }
    render() {
        let MyPropsList = this.state.props.map((singleProps, i) => <Props user={ this.props.user } singleProps={ singleProps }  key={ i }/>)
        return ( 
            <div className="MyProps">
                <h2>These are my props</h2>
                <p>Example props</p>
                <p>[ingoing/outgoing icon] [content of props] [who the recipient is]</p>
                <p>Real props should show up below:</p>
                { MyPropsList }
            </div>
        )
    }
}

export default MyPropsShort;