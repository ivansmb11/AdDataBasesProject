const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use( cors() );

app.use( express.json() );

// app.use( 'api/auth', require('./routes/auth') );

app.listen( process.env.PORT, () => {
    console.log(`Server running in port ${ process.env.PORT }`);    
});
