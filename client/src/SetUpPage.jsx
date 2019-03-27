import React, { Component } from 'react';
import './SetUpPage.css';
import axios from 'axios';

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
        this.getDeps = this.getDeps.bind(this);
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
                this.getDeps()
                break;
            case 'addUser':
                this.addUser();
                this.getUsers();
                break;
            default:
                console.log('there was an error');
        }
    }

    addDep() {
        // axios to make a department
        console.log(this.state.depName)
        axios.post('/api/deps', { name: this.state.depName, members: [] })
    }
    addUser() {
        // axios to make a user
        console.log(this.state.userName, this.state.employeeID)

    }
    getDeps() {
        axios.get('/api/deps')
        .then(res => {
            this.setState({
                deps: res.data.data
            })
        })
    }
    getUsers() {
        axios.get('/api/user')
        .then(res => {
            console.log('getusers res', res)
            this.setState({
                users: res.data
            })
        })
    }
    componentDidMount() {
        // get all departments
        this.getDeps()

        // get all people
        this.getUsers()
    }
    render() {
        // make deps elements
        let deps = this.state.deps.map((dep, i) => {
            return (
                <div className="single-dep" key={ i }>
                    <span>{ dep.name }</span>
                </div>
            )
        })
        let users = this.state.users.map((user, i) => {
            return (
                <div className="single-user">
                    <span>{ user.name }</span>
                </div>
            )
        })
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
                            {deps}
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
                            { users }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SetUpPage