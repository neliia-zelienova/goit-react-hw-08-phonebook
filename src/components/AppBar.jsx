import React from 'react';
import {Link} from 'react-router-dom'

const AppBar = ({userEmail}) => {
    return (
        <div>
            <Link to="/">Home</Link>
            <p>{userEmail}</p>
            <button type="button">Logout</button>
        </div>
    )
}

export default AppBar;