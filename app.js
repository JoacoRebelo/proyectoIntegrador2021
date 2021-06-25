var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/product');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var profileRouter = require('./routes/profile');
var productAddRouter = require('./routes/productAdd');
var productEditRouter = require('./routes/productEdit');
var profileEditRouter = require('./routes/profileEdit');
var searchResultsRouter = require('./routes/searchResults');
var logoutRouter = require('./routes/logout');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const session = require('express-session');

app.use(session( {secret: "secretoso mensaje",
resave: false,
saveUninitialized: true
}));

const db = require('./database/models');

app.use((req, res, next) => {
  if(req.cookies.userId && !req.session.resultado) {
    db.Usuario.findByPk(req.cookies.userId).then(resultado => {
      req.session.resultado = resultado.name;
      return next();
    }).catch(error=>console.log(err));
  } else {
  	return next();
  }}
);


app.use((req, res, next) => {
  if(req.session.resultado){
    res.locals = {
      usuarioLogueado: false,
      nombreUsuario: req.session.resultado.name,
      fotoUsuario: req.session.resultado.url,
      idUsuario: req.session.resultado.id,
    }
  } else {
    res.locals = {
      usuarioLogueado: true
    }
  }
  return next();
});



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productsRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/profile', profileRouter);
app.use('/product-add', productAddRouter);
app.use('/product-edit', productEditRouter);
app.use('/profile-edit', profileEditRouter);
app.use('/search-results', searchResultsRouter);
app.use('/logout', logoutRouter);
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
