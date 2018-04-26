import React from 'react'
interface TitleProps {
}
interface TitleState {
    app: string;
}
export default class Title extends React.Component<TitleProps, TitleState> {
    constructor(props) {
        super(props);
        this.state = {app:"Order Management System "};
    }
    render() {
        //let app = "Order Management System 2.0";
        setTimeout(() => {
            this.setState({app:  "Order  Management System 4.0"});
        }, 2000);
        return (
            <div><h1> {this.state.app} </h1></div>
        );
    }
}