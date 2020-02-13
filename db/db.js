const mongoCollections = require("./mongoCollections");
const connection = require("./mongoConnection");
const locations = mongoCollections.locations;

const ObjectID = require('mongodb').ObjectID;
const axios = require('axios')
//User


async function getAllLocations(){
    const locationCollection = await locations();
    const targets = await locationCollection.find().toArray();
    if(targets === null) throw 'user not found!';

    return targets;
}

async function addlocation(ip,date,time,latitude,longitude) {
    console.log('in add location')
    console.log('ip,',ip)
    
    
    let newlocation = {
        ip:ip,
        latitude:latitude,
        longitude:longitude,
        date:date,
        time:time
    }
   
    const locationCollection = await locations();
 
    const InsertInfo = await locationCollection.insertOne(newlocation);
  
    if (InsertInfo.insertedCount === 0) throw 'Insert fail!';

    return newlocation;
}



module.exports = {
    getAllLocations,
    addlocation
};