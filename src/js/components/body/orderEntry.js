import React from 'react';
import Side from './side';
export default class OrderEntry extends React.Component {
    constructor() {
        super();
    }
    addChange(e) {
        this.props.changeTitle(e.target.value);
    }
    render() {
        return (
            <div>
                <Side side={this.props.side}/>
                <input value={this.props.side} onChange={this.addChange.bind(this)} />
            </div>
        );
    }
}