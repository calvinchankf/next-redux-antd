import React from 'react';
import { Link } from "react-router-dom"

import './style.css'

export default () => {
    return (
        <div className='header'>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/counter">Counter</Link></div>
            <div><Link to="/topics">Topics</Link></div>
        </div>
    );
}