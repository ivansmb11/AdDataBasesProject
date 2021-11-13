const mongoose = require('mongoose')

const dbConection = async() => {
    try {
    
        await mongoose.connect( process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database online!');
    
    } catch (error) {
        console.log( error );
        throw new Error('Error connecting to database :(');
    }
}

module.exports = {
    dbConection
}
