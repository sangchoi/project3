import React, { Component } from 'react';
import './SetUpPage.css';

class SetUpPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            depName: '',
            userName: '',
            employeeId: '',
            users: [],
            deps: [],
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        // get all departments

        // get all people
    }

    handleInputChange(e) {
        console.log('handleInputChange()')
        e.preventDefault()
        const name = e.target.name;
        const value = e.target.value;
        console.log({ name, value })
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        switch(e.target.name) {
            case 'addDep':
                this.addDep();
                break;
            case 'addUser':
                this.addUser();
                break;
            default:
                console.log('there was an error');
        }
    }

    addDep() {
        // axios to make a department
        console.log(this.state.depName)
    }
    addUser() {
        // axios to make a user
        console.log(this.state.userName, this.state.employeeID)
    }
    render() {
        return (
            <div className="SetUpPage">
                <h1>Set up your Town</h1>
                <div className="Teams two-column">
                    <div className="LeftTeams col1">
                        <h3>Add Teams</h3>
                        <form name="addDep" onSubmit={ this.handleSubmit }>
                            <input 
                                name="depName" 
                                onChange={ this.handleInputChange } 
                                type="text" 
                                placeholder="Enter team name here..."/>
                            <br/>
                            <input 
                                onSubmit={ this.handleSubmit } 
                                type="submit" 
                                value="Create Department"/>
                        </form>
                    </div>
                    <div className="RightTeams col2">
                        added teams should show up here
                        <ul>
                            <li>DevOps</li>
                            <li>Sales</li>
                            <li>IT</li>
                            <li>Marketing</li>
                        </ul>
                    </div>
                </div>
                <div className="People two-column">
                    <div className="LeftPeople col1">
                        <h3>Add People</h3>
                        <form name="addUser" onSubmit={ this.handleSubmit }>
                            <input onChange={ this.handleInputChange } type="text" placeholder="Enter name" name="userName"/>
                            <br/>
                            <input onChange={ this.handleInputChange } type="text" placeholder="Enter employee ID here" name="employeeID"/>
                            <p>Helpful hint: Employee ID is the number that employees will use to sign in for the first time</p>
                            <input type="submit" value="Create Department"/>
                        </form>
                    </div>
                    <div className="RightPeople col2">
                        <ul>
                            <li>I'm a person you made</li>
                            <li>Me too!</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SetUpPage