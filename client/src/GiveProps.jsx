import React, { Component } from 'react';
import axios from 'axios';
import './GiveProps.css';

class GiveProps extends Component {
    constructor(props) {
        super(props)
        this.state = {
            labels: [],
            body: '',
            
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(e) {
        let value = e.target.value
        let name = e.target.name
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        console.log('giving props')
        e.preventDefault()
        // assemble props
        let data = {
            from: this.props.sender._id,
            to: this.props.recipient._id,
            body: this.state.body
        }
        // make axios request
        axios.post('api/props', data)
        .then(res => {
            console.log('sent props to server', res)
            this.props.done()
        })
    }


    render() {
        console.log(this.props)
        if (this.props.show) {
            return (
                <div className="GivePropsModalOverlay">
                    <div className="GivePropsModal">
                    <h2>Give Props Form</h2>
                        <p>
                            <img src="https://via.placeholder.com/30" alt="extra small user avatar"/>  
                            <span>From Me </span> 
                        </p>
                        <p>
                            <img src="https://via.placeholder.com/30" alt="extra small user avatar"/>
                            <span>To : { this.props.recipient.name } </span>
                            <span>from { this.props.recipient.department } </span>
                        </p>
                        <form onSubmit={ this.handleSubmit }>
                            <br/>
                            <textarea name="body" placeholder="Enter props here" onChange={ this.handleInputChange }></textarea>
                            <br/>
                            <button>Did a great job</button><button>Went above and beyond</button>
                            <br/>
                            <button>Made life easier</button><button>Helped out</button>
                            <br/>
                            <input type="submit" value="Give Props"/>
                        </form>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

export default GiveProps;