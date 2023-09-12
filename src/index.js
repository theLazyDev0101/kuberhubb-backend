const express           = require('express');
const app               = express();
const cors          	= require('cors');
const bodyParser    	= require('body-parser');
const dbConnection      = require('./dbConnection')
const readPool          = dbConnection.readPool
const writePool         = dbConnection.writePool
const fs            	= require('fs');
const config 		    = require('./config');

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

fs.readdir(config.controllerPath, (err, files) => {
    if (err) {
        console.log('error occurred', err)
    }
    else {
        files.forEach(file => {
            app.use('/api', require(config.controllerPath + file))
        })
    }
})

app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(bodyParser.json())

app.use(cors())

app.listen(5500, () => {
    console.log('server is running on "http://localhost:5500"')
})
