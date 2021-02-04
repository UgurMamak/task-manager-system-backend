'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

assert("8080", 'PORT is required');
assert("localhost", 'HOST is required');


module.exports = {
    port: "8080",
    host: "localhost",
    url: "http://localhost:8080",
    firebaseConfig: {
        apiKey: "AIzaSyCB2GZOmubg5w7nyxoWVE1dqx2pJKLR_Hw",
        authDomain: "taskmanager-54ef1.firebaseapp.com",
        databaseURL: "https://taskmanager-54ef1-default-rtdb.firebaseio.com",
        projectId: "taskmanager-54ef1",
        storageBucket: "taskmanager-54ef1.appspot.com",
        messagingSenderId: "200844828030",
        appId: "1:200844828030:web:0711eed6782b9adc17e72f"
    },
}