require('dotenv').config()

let express = require('express');
let app = express();
var path = require('path');


app.use(express.static(path.join(__dirname, 'public')))

var port = process.env.PORT || 8090;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, (param) => {
    console.log("App started : http://localhost:"+port);
})