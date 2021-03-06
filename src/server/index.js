const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const AYLIENTextAPI = require('aylien_textapi');
const textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/aylien', function (req, res) {
    console.log("::: getAylien :::")
    let text = req.query.text;
    textapi.sentiment({
        'url': text
    }, function(error, response) {
        if (error === null) {
            console.log(response);
            res.send(response)
        } else {
            console.log(error)
        }
    });
})