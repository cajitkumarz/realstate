//const http = require('http');
const express = require('express');
const app = express();
let bodyParser = require('body-parser');
const config = require('./config/app.json');
const PORT = config.port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/apistatus', function (req, res) {
    res.set('Content-Type', 'application/json');
    return res.status(200).json({
        status: 200,
        message: `API is working fine`
    })
});

app.post('/jorealstate', (req, res) => {
    res.sendFile(__dirname + '/public/index.ejs');
});




app.post('/contactus', (req, res) => {
    res.send('<h1> contact us page</h1><p> this is contact us page ')
});


var server = app.listen(PORT, () => {
    var port = server.address().port;
    // var host = server.address().address;
    console.log("App listening at http://127.0.0.1:%s",port);
    // console.log("App listening at http://%s:%s", host, port);
});

