const express =require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({path: 'config.env'});
const ApiError = require('./utils/apiError');
const globalError = require('./middlewares/errorMiddleware');
const dbConnection = require('./config/database');
const compression = require('compression');
const mountRoutes = require('./routes');
// Route
//Connect with db
dbConnection();

//express app
const app=express();

//Middleware
app.use(compression());

// Checkout webhook
app.post(
  express.raw({ type: 'application/json' }),
);

app.use(express.json({ limit: '20kb' }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log(`mode: ${process.env.NODE_ENV}`);
}


// Mount Routes
mountRoutes(app);

app.all('*', (req, res, next) => {
  next(new ApiError(`Cant't find this route: ${req.originalUrl}`, 400));
});

// Global error handling middleware for express
app.use(globalError);

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, ()=>{
    console.log(`App running running on port ${PORT}`);
}); 

//Handle rejection outside express
process.on("unhandledRejection", (err) => {
    console.error(`unhandledRejection Errors: ${err.name} | ${err.message}`);
    server.close(()=>{
      console.error(`Shutting down....`);
      process.exit(1);
    });
});