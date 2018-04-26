const jQuery = require('jquery');
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Layout } from './components/orderLayout/layout';


const orderbook = document.getElementById('orderbook');
render(<Layout/>, orderbook);