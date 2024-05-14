var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

//Vamos a crear las primeras rutas
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

//Vamos a visualizar los elementos
var app = express();

//vamos a visualizar la view
//Sirve para decirle al codigo donde se enuentra cada archivode cada vista
app.set('views', path.join(__dirname, 'views'));

//Tengo que definir el tipo de plantilla
app.set('views engine', 'ejs');

//Vamos a usar la ruta
app.use('/', indexRouter);
app.use('./users', userRouter);

//definir directorios publicos
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//por si hay un error 404
app.use(function(req, res, next){
    next(createError(404));
});

//para el manejo del handler
app.use(function(err, req, res, next){
    res.locals.message= err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
})

module.exports = app;