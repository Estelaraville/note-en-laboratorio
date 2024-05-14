var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

//Vamoc a creaar las primeras rutas
var indexRouter = require('./routes/index');