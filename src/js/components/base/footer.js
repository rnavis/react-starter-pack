import React from 'react'
export default class Footer extends React.Component {
    render() {
        return (
            <div><footer> Copyright Thomson Reuters {this.props.year} </footer></div>
        );
    }
}