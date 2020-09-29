const fs              = require('fs');
const path            = require('path');
const basename        = path.basename(__filename);
const models          = {};
const mongoose      = require('mongoose');
const CONFIG        = require('../config/config');

if(CONFIG.MONGO_HOST != ''){
    let files = fs
      .readdirSync(__dirname)
      .filter((file) => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
      .forEach((file) => {
        var filename = file.split('.')[0];
        var model_name = filename.charAt(0).toUpperCase() + filename.slice(1);
        models[model_name] = require('./'+file);
    });

    var mongo_location;
    if(CONFIG.MONGO_USER != '' & CONFIG.MONGO_PASSWORD != '') {
        mongo_location = 'mongodb://'+CONFIG.MONGO_USER+':'+CONFIG.MONGO_PASSWORD+"@"+CONFIG.MONGO_HOST+':'+CONFIG.MONGO_PORT + '/'+CONFIG.DB_NAME;
    } else {
        mongo_location = 'mongodb://'+CONFIG.MONGO_HOST+':'+CONFIG.MONGO_PORT + '/'+CONFIG.DB_NAME;
    }
    

    mongoose.set('useFindAndModify', false);
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useUnifiedTopology', true);
    mongoose.set('useCreateIndex', true);

    mongoose.connect(mongo_location).catch((err)=>{
        console.log('*** Can Not Connect to Mongo Server:', mongo_location)
    })

    let db = mongoose.connection;

    module.exports = db;

    db.once('open', ()=>{
        console.log('Connected to mongo at '+mongo_location);
    })
    db.on('error', (error)=>{
        console.log("error", error);
    })
    // End of Mongoose Setup
}else{
    console.log("No Mongo Credentials Given");
}

// console.log(db)
module.exports = models;
