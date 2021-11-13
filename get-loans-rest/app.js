const express = require('express');
const cors = require('cors');
const { dbConection } = require('./db/config')
require('dotenv').config();

const app = express();

dbConection();

app.use( cors() );

app.use( express.json() );

app.use( '/api/v1/auth', require('./routes/auth') );

app.listen( process.env.PORT, () => {
    console.log(`Server running in port ${ process.env.PORT }`);    
});
