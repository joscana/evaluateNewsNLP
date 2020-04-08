const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const AYLIENTextAPI = require('aylien_textapi');
const textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
const apidata = {}

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/get', sendData);

function sendData (request, response) {
    console.log("sendData called")
    response.send(apidata);
};


app.post('/addSentiment', addSentiment);

function addSentiment (request, response){
    const body = request.body;
    apidata.sentiment = body.sentiment;
    console.log(apidata);
    const jsonData = JSON.parse('{"response": "POST received}');
    response.send(jsonData);
}



