import React, { Component } from 'react';
import './SetUpPage.css';

class SetUpPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            depFormValue: {},
            peopleFormValue: {},
            users: [],
            deps: [],
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        console.log('handleInputChange()')
        e.preventDefault()
        console.log({ 
            targetValue: e.target.value,
            target: e.target.value,
            e
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log('formSubmit()')
        console.log('depformsubmit')
        console.log(e.target)
    }

    render() {
        return (
            <div className="SetUpPage">
                <h1>Set up your Town</h1>
                <div className="">
                    <div className="Teams two-column">
                        <div className="LeftTeams col1">
                            <h3>Add Teams</h3>
                            <form name="addDepartmentForm" onSubmit={ this.handleSubmit }>
                                <input name="name" onChange={ this.handleInputChange } type="text" placeholder="Enter team name here..."/>
                                <br/>
                                <input onSubmit={ this.handleSubmit } type="submit" value="Create Department"/>
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
                            <form name="addPeopleForm" onSubmit={ this.handleSubmit }>
                                <input onChange={ this.handleInputChange } type="text" placeholder="Enter name" name="name"/>
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
                <button className="checkToken">CHECK THE TOKEN USING THAT ONE ROUTE</button>
            </div>
        )
    }
}

export default SetUpPage