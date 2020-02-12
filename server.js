const express = require('express');
const db = require('./db');
const cors = require('cors');
const path = require('path')
const app = express();


app.use(cors());

app.use(express.static('public'));


app.post('/location/:ip', async (req , res) => {
   
    try{
        const Ip = req.params.ip;
        console.log('ip,',Ip);
        
        res.status(200).send({location:Ip});
       
      }catch(e){
       
        res.status(400).send({error:e});
      }
});

app.post('/history', async (req , res) => {
   
});

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public','index.html'))
})
const PORT = process.env.PORT || 5000;
// The `listen` method launches a web server.
app.listen(PORT,()=>console.log(`🚀  Server ready at 5000`))