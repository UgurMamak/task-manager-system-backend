'use strict';

const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');

const config=require('./config2');

//Add request routes
const authRoutes=require('./routes/auth-routes');

const app=express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


//routes
app.use('/api',authRoutes.routes);



app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));


/*var multiparty = require('multiparty');
var http=require('http');
var util=require('util');*/

