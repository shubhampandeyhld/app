
//var jsforce = require('jsforce');
var express = require('express');
const { json } = require('express');
const app = express()
const port = process.env.PORT || 3000
/*
const {URL, username , password ,token} = process.env
console.log(URL)
var conn = new jsforce.Connection({
  loginUrl : 'https://login.salesforce.com'
  
});*/
app.get("/",(req,res)=>{
  console.log('called')
 res.json("hello")
})
app.get('/ipl',(req,res1)=>{


fetch('https://hs-consumer-api.espncricinfo.com/v1/pages/matches/current?lang=en&latest=true')
.then(res=>res.json()).then(res=>{
    for(const game of res['matches'])
    {
       if(game['series']['name'] == 'Indian Premier League' && game['stage'] == 'FINISHED'){
  console.log(game)
       }
       
    }
})


res1.json("hello ipl")




















})
/*require('dotenv').config()
conn.login('shubhampandey@nagarro.com','Qwerty@26faSTerZO7sobMFI1LsZRCooR', function(err, userInfo) {
    console.log({username,password})
  if (err) { return console.error(err); }
  // Now you can get the access token and instance URL information.
  // Save them to establish connection next time.
  console.log(conn.accessToken);
  console.log(conn.instanceUrl);
  console.log(conn.loginUrl)
  // logged in user property
  console.log("User ID: " + userInfo.id);
  console.log("Org ID: " + userInfo.organizationId);
  // ...
});
// Create the LWR App Server

*/


app.listen(port,(req,res)=>{
    console.log(req)
    
    
})