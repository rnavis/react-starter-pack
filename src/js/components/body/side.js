import React from 'react'
export default class Side extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h3>{this.props.side}</h3>
            </div>
        );
    }
}