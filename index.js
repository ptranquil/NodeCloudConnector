const express = require('express');
const serverless = require('serverless-http');
const routes = require('./src/routes/routes');

/** Initializing the Express Application */
const app = express();

/** Middleware to parse incoming JSON data from HTTP requests */
app.use(express.json());

/** Routes for user api */
app.use('/api/users', routes);

/** Health check API */
app.get('/health-check', (req, res) => {
  return res.json({
    status: true,
    message: 'API is working!!'
  });
});

/**
 * serverless(app) : Wraps the Express application with serverless-http to make it compatible with AWS Lambda or other serverless environments.
 * module.exports.handler : This exports wrapped Express app as a handler function. AWS Lambda will invoke this function whenever the Lambda function is triggered, effectively running the Express app within a serverless environment.
 */
module.exports.handler = serverless(app);
