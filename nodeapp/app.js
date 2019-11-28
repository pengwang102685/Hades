var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
<<<<<<< HEAD
var zskRouter=require('./routes/zsk')

=======
var tuiRouter = require('./routes/tui');
>>>>>>> a36d4821907e15b70d16fd78d05e81b76fd70a9d
var app = express();


app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use('*',(req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  var type = true;
  if (JSON.stringify(req.body) == "{}") {
      var json = req.query;
  } else {
      var json = req.body; 
  }
  for (i in json) {
      if (json[i] == '') { type = false; }
  }
  if (type) { 
    req.data = json; 
      next();
  } else {
      res.send({ ok: 2, data: '' });
  }
});





app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
<<<<<<< HEAD
app.use('/zsk',zskRouter)

=======
app.use('/tui', tuiRouter);
>>>>>>> a36d4821907e15b70d16fd78d05e81b76fd70a9d
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
