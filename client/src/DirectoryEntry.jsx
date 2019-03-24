import React, { Component } from 'react';

const DirectoryEntry = ({ user, goToProfile, giveProps }) => {
    return (
        <div className="DirectoryEntry">
            <img src="https://via.placeholder.com/50" alt="small user avatar"/>
            <span className="name"> {user.name} </span>
            <span className="department"> {user.dep} </span>
            <button onClick={ e => giveProps( e, user ) }> give props </button>
        </div>
    )
}

export default DirectoryEntry