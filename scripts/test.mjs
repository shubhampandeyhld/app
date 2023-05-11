import { createServer } from "lwr";
import jsforceAjaxProxy from "jsforce-ajax-proxy";
/*

var jsforce = require('jsforce');
var conn = new jsforce.Connection({
  loginUrl : 'https://test.salesforce.com',
  
});
conn.login(username, password, function(err, userInfo) {
  if (err) { return console.error(err); }
  // Now you can get the access token and instance URL information.
  // Save them to establish connection next time.
  console.log(conn.accessToken);
  console.log(conn.instanceUrl);
  // logged in user property
  console.log("User ID: " + userInfo.id);
  console.log("Org ID: " + userInfo.organizationId);
  // ...
});*/
// Create the LWR App Server
const lwrServer = createServer({
    serverType : 'express'
});
// Get the internal express app
const expressApp = lwrServer.getInternalServer("express");

    expressApp.get('/api',(req,res)=>{
        res.json('helo')
    })

    lwrServer.listen(({PORT,SERVER_MODE})=>{
 console.log('app is on ',PORT)
    })


