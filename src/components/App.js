import React, { PropTypes } from 'react';

export default class App extends React.Component {
    render(){
        return (
            <div>
                <h1>APP HEADER</h1>
                {this.props.children}
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
}