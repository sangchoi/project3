import React from 'react';
import PropsFeed from './PropsFeed';

const TownSquare = props => {
    return (
        <div className="townsquare">
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