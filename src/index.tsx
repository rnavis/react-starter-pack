import $ from "jquery";

const jQuery = require('jquery');
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Layout } from './components/orderLayout/layout';
//alert($("#hhead").text());

const orderbook = document.getElementById('orderbook');
render(<Layout/>, orderbook);