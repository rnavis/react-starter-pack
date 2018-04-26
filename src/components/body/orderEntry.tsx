import React from 'react';
import Side from './side';
interface OrderEntryProps {
    side: string;
    changeTitle: (any) => void;
}
interface OrderEntryState {

}
export default class OrderEntry extends React.Component<OrderEntryProps, OrderEntryState> {
    constructor(props) {
        super(props);
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