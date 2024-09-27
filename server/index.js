const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const controller = require('./controller')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use( '/api/v1/upload-media', controller )

app.listen(5000, () => {
    console.log('server is running at 5000 port')
})