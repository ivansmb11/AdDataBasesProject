const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../db/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        
        this.paths = {
            auth:       '/api/v1/auth',
            users:      '/api/v1/users',
            loans:      '/api/v1/loans'
        }
    
        this.connectDB();
        
        this.middlewares();

        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.paths.auth, require('../routes/auth') );
        this.app.use( this.paths.users, require('../routes/users') );
        this.app.use( this.paths.loans, require('../routes/loans') );
    }

    listen() {
        this.app.listen( this.port, () =>  {
            console.log(`Server running in port ${ this.port }`);
        });
    }

}

module.exports = Server;
