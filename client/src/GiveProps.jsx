import React, { Component } from 'react';

class GiveProps extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sender: this.props.sender,
            recipient: this.props.recipient,
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
        e.preventDefault()
        console.log({ state: this.state })
    }

    render() {
        return (
            <div className="GiveProps">
            <h2>Give Props Form</h2>
                <p><img src="https://via.placeholder.com/30" alt="extra small user avatar"/>  To [Name]: { this.state.recipient.name } <span> Department: { this.state.sender.dep }</span> </p>
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
        )
    }
}

export default GiveProps;