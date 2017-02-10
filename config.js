// start server
var app = require("./server/server");
/*

//--------------------------------------------------------------------------------------------------------------------
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/users', users);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handlers,development error handler will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', { message: err.message, error: err  });
    });
}
// production error handler ; no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', { message: err.message, error: {}   });
});
module.exports = app;
//---------------------------------------------------------------------------------------------------------------------
// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/environment');
// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
        console.error('MongoDB connection error: ' + err);
        process.exit(-1);
    });
// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }
// Setup server
var app = express();
var server = require('http').createServer(app);
var socketio = require('socket.io')(server, {
    serveClient: config.env !== 'production',
    path: '/socket.io-client'
});
require('./config/socketio')(socketio);
require('./config/express')(app);
require('./routes')(app);
// Start server
server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});
// Expose app
exports = module.exports = app;
//---------------------------------------------------------------------------------------------------------------------
var errors = require('./components/errors');
var path = require('path');
var multer = require('multer');
var up = multer({storage: multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(process.cwd(), 'upload'));
    },
    filename: function (req, file, cb) {
        cb(null,Math.random() +""+ file.originalname);
    }
})});
module.exports = function(app) {
    // Insert routes below
    app.use('/api/complaints',up.single('file'), require('./api/complaint'));
    app.use('/api/buzzs', up.single('file'), require('./api/buzz'));
    app.use('/api/things', require('./api/thing'));
    app.use('/api/users', require('./api/user'));
    app.use('/auth', require('./auth'));
    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/!*').get(errors[404]);
    // All other routes should redirect to the index.html
    app.route('/!*').get(function(req, res) {
            res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
        });
};*/
