import React from 'react'
interface SideProps {
    side: string;
}
interface SideState {

}
export default class Side extends React.Component<SideProps, SideState> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>{this.props.side}</h3>
            </div>
        );
    }
}