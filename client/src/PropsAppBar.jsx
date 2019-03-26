import React from 'react';
import { Link } from 'react-router-dom';

const PropsAppBar = props => {
    return (
        <div className="PropsAppBar" style={{display:'flex'}}>
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <Link to='/profile'>
                <button>Profile</button>
            </Link>
            <Link to='/community'>
                <button>Community</button>
            </Link>
            <Link to='/setup'>
                <button>Setup</button>
            </Link>
            <Link to='/chat'>
                <button>Chat</button>
            </Link>
            <Link to='/logout'>
                <button>Logout</button>
            </Link>
        </div>
    )
}

export default PropsAppBar;