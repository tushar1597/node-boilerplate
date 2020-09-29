const express 		= require('express');
const logger 	    = require('morgan');
const bodyParser 	= require('body-parser');
// const passport      = require('passport');
const pe            = require('parse-error');
const cors          = require('cors');
const expressValidator  = require('express-validator');

const v1            = require('./routes/v1');
// const authRoutes    = require('./routes/auth-routes');
// const profileRoutes    = require('./routes/profile-routes');

const cookieSession = require('cookie-session');

const app = express();

const CONFIG = require('./config/config');
// const passportConfig = require('./config/passport-config');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [CONFIG.SESSION.cookieKey]
}));

// initialise passport
// app.use(passport.initialize());
// app.use(passport.session());

// set up view engine
app.set('view engine', 'ejs');

const models = require("./models");

// CORS
app.use(cors());

// console.log('hlo') ;

app.use(express.json());
// app.use(expressValidator({
//     customValidators: {
//         isValidMongoId: function(value) {
//             var regex = /^[0-9a-f]{24}$/;
//             return regex.test(value);
//         },
//         isValidEmail: function(value) {
//             if (!value) return false;
//             var value = value.trim();
//             var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//             return email_regex.test(value);
//         },
//     }
// }));

// Set up routes
app.use('/v1', v1);
// app.use('/auth', authRoutes);
// app.use('/profile', profileRoutes);

app.use('/', function(req, res){
	res.statusCode = 200;//send the appropriate status code
	res.json({status:"success", message:"Mongo API", data:{}})
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

process.on('unhandledRejection', error => {
    console.error('Uncaught Error', pe(error));
});
