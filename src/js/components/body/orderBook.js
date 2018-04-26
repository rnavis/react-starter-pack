import React from 'react';
import OrderEntry from './orderEntry';
export default class OrderBook extends React.Component {
    constructor() {
        super();
        this.state = {side: "DDefault"};
    }
    changeTitle(side) {
        this.setState({side:side});
    }
    render() {
        return (
            <div>
                <OrderEntry changeTitle={this.changeTitle.bind(this)} side={this.state.side}/>
            </div>
        );
    }
}