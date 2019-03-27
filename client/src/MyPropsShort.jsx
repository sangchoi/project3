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
                <div className="MyPropsTextBox">
                <h2 className="MyPropsText">MY PROPS</h2>
                { MyPropsList }
                </div>
            </div>
        )
    }
}

export default MyPropsShort;