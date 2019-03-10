import React from 'react';
import { Link } from 'react-router';

export default class HomePage extends React.Component {
    render(){
        return (
            <div>
                <h1>HOME PAGE</h1>
                <Link to="course">COURSE PAGE</Link>
                <Link to="about">ABOUT PAGE</Link>
            </div>
        );
    }
}