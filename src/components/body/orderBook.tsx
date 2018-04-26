import React from 'react';
import OrderEntry from './orderEntry';
interface Props {

}
interface State {
    side: string;
}
export default class OrderBook extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {side: "Default"};
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