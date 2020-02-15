const express = require('express');
const db = require('./db');
const cors = require('cors');
const path = require('path')
const app = express();
const bodyParser = require("body-parser");
const AWS = require('aws-sdk')

require('dotenv').config();

app.use(cors());
//us-east-1
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/location', async (req , res) => {
    console.log('test api')
    
    try{
        console.log('body,',req.body)
        const Ip = req.body.ip;
        const latitude = req.body.latitude;
        const longitude = req.body.longitude;
        var d = new Date();
        var date = d.getDate();
        var time = d.toString();
        time = time.split(' ')
        var year = time[3]
        var month = time[1]
        var arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        var month_num = arr.indexOf(month)+1;
        var newtime = year + '-' + month_num + '-' + date 
        var result = await db.dbfunction.addlocation(Ip,date,newtime,latitude,longitude)
        var params = {
          Message: 'Latitude:' + req.body.latitude +', Longtitude: '+ req.body.longitude,
          PhoneNumber: '+1' + req.body.mobile,
          MessageAttributes: {
              'AWS.SNS.SMS.SenderID': {
                  'DataType': 'String',
                  'StringValue': 'Idt'
              }
          }
      };
  
      var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();
  
      publishTextPromise.then(
        function (data) {
              console.log('data,',data)
        }).catch(
            function (err) {
              console.log('error,',err)
        });
        

        res.status(200).send({location:result});
        
      }catch(e){
       
        res.status(400).send({error:e});
      }
});

app.get('/history', async (req , res) => {
    try{
       
        
        var result = await db.dbfunction.getAllLocations()
        res.status(200).send({location:result});
        
      }catch(e){
       
        res.status(400).send({error:e});
      }
});

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public','index.html'))
})

const PORT = process.env.PORT || 5000;
// The `listen` method launches a web server.
app.listen(PORT,()=>console.log(`🚀  Server ready at 5000`))