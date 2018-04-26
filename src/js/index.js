global.jQuery = global.$ = require('jquery');
import React from 'react'
import ReactDOM from "react-dom";
import Layout from './layout';

const orderbook = document.getElementById('orderbook');
ReactDOM.render(<Layout/>, orderbook);