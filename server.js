const express= require('express');
const path=require('path');
const axios = require('axios')
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/',express.static(path.join(__dirname,'public')));





app.listen(4356);