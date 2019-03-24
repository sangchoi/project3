import React, { Component } from 'react';
import Props from './Props';

class MyProps extends Component {
    constructor(props) {
        super(props)
        this.state = {
            props: []
        }
    }
    render() {
        let MyPropsList = this.state.props.map(singleProps => <Props user={ this.props.user } singleProps={ singleProps }/>)
        return ( 
            <div className="MyProps">
            <h2>These are my props</h2>
            <p>asdkljflkasdjfl;a</p>
            <p>jasdlkfjalskdjfl;asdkjf;</p>
            <p>asdjfkasdhfklashdfkjashf</p>
                { MyPropsList }
            </div>
        )
    }
}

export default MyProps;