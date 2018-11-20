const express= require('express');
const path=require('path');
const axios = require('axios')
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/',express.static(path.join(__dirname,'public')));





var port=Number(process.env.PORT || 3000);
app.listen(port,function(){
    console.log("App is running");
});
