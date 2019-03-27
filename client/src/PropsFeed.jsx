import React, { Component } from 'react';
import axios from 'axios';

class PropsFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            props: [],
            page: 0
        }
        this.nextPageHandler = this.nextPageHandler.bind(this)
        this.previousPageHandler = this.previousPageHandler.bind(this)
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
    // go to next page of props
    nextPageHandler(e) {
        this.setState((state) => {
            return { page: state.page + 1 }
        })
    }
    previousPageHandler(e) {
        this.setState((state) => {
            return { page: state.page - 1 }
        })
    }

    // function to update feed immediately
    render() {
        let pagenum = this.state.page
        // console.log('here are the nums', pagenum * 12, pagenum + 1 *)
        let myPropsList = this.state.props.slice(pagenum * 12, (pagenum + 1) * 12).map( (prop, index) => {
            return <li key={index}>{prop.body}</li>
        })
        return(
            <div>
            <p className="PropsFeedText">This is a list of all props:</p>
            <ul>
                {myPropsList}
            </ul>
            
            <button onClick={ this.previousPageHandler }>Previous Page</button>
            <span>{'page: ' + pagenum }</span>
            <button onClick={ this.nextPageHandler }> Next Page </button>
            </div>
        )    
    }
}

export default PropsFeed;