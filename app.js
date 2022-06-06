const express = require('express');
const app = express();
const morgan = require('morgan');
const reportRouter = require ('./routes/reportRoutes');


const newLocal = process.env.NODE_ENV === 'development';
// MiddleWare

if (newLocal) {
  app.use(morgan('dev'));
}


app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware code!');
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/reports', reportRouter);
module.exports = app;


