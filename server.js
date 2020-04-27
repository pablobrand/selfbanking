//Install express server
const express = require('express');
const path = require('path');

const app = express();

//Blockchain imports
const ethers = require('ethers');


//API Section
app.get("/dummyAPI", (req, res, next)=>{
    res.json(["Hola Senor!"]);
});



// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/frontend/dist/self-bank'));
app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/frontend/dist/self-bank/index.html'));
});



// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);