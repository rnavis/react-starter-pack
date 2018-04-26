import React from 'react';
import Header from './components/top/header';
import Footer from './components/base/footer';
import OrderBook from './components/body/orderBook';
export default class Layout extends React.Component {
    render() {
        const year = 2018;
        return (
            <div><Header/><OrderBook/><Footer year={year}/></div>
        );
    }
}