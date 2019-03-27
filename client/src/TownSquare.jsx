import React from 'react';
import PropsFeed from './PropsFeed';
import PropsPieChart from './PropsPieChart';

const TownSquare = props => {
    return (
        <div className="townsquare">
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