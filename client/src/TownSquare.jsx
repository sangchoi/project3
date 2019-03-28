import React from 'react';
import PropsFeed from './PropsFeed';
import PropsPieChart from './PropsPieChart';
import PropsAppBar from './PropsAppBar';

const TownSquare = props => {
    return (
        <div className="townsquare">
        <PropsAppBar logout={ props.logout } />
        <PropsPieChart />
            <div className="square">
                <PropsFeed />
            </div>
            <div className="data">
                <div className="company-data">
                    
                </div>
                <div className="user-data">
                </div>
            </div>
        </div>
    )
}

export default TownSquare;