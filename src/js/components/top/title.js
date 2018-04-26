import React from 'react'
export default class Title extends React.Component {
    constructor() {
        super();
        this.state = {app:"Order Management System"};
    }
    render() {
        //let app = "Order Management System 2.0";
        setTimeout(() => {
            this.setState({app:  "Order  Management System 3.0"});
        }, 2000);
        return (
            <div><h1> {this.state.app} </h1></div>
        );
    }
}