// load env
require('dotenv').config()

//const createError = require('http-errors');
const express = require('express');
var cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const router = require('./src/routes');
const knex = require('knex');
const knexConfig = require('./knexfile');
const { UnauthorizedError, ValidationError, AccessDeniedError, notFound, NotFoundError} = require('./src/exceptions');
const app = express();
app.use(cors());
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

// Initialize Knex
const db = knex(knexConfig);
global.db = db;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', router);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(new NotFoundError());
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  if (err instanceof UnauthorizedError) {
    return res.status(401).json({
      message: err?.message || 'Unauthorized'
    })
  } else if (err instanceof ValidationError) {
    return res.status(422).json(err?.errors || { 'global': 'Validation errors occurred' })
  } else if (err instanceof AccessDeniedError) {
    return res.status(403).json(err?.message)
  }
  else if (err instanceof NotFoundError) {
    return res.status(404).json(err?.message)
  }

  if (err instanceof Error) {
    console.log("57")
    console.log(err)
    return res.status(500).json({
      message: "Internal Server Error",
      error: err
    });
  }
  next()
});


module.exports = app;
