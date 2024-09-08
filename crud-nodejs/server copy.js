const express =require('express');
const dotenv = require('dotenv');

const morgan = require('morgan');

dotenv.config({path: 'config.env'});
const ApiError = require('./utils/apiError');
const globalError = require('./middlewares/errorMiddleware');
const dbConnection = require('./config/database');
const multer = require("multer");
const compression = require('compression');
const mountRoutes = require('./routes');
const bodyParser = require('body-parser');
// Route
const upload = multer({ limits: { fileSize: 5 * 1024 * 1024 } }); // 5MB file size limit
//Connect with db
dbConnection();

//express app
const app=express();

//Middleware
app.use(bodyParser.urlencoded({
  extended:false
}));

app.use(bodyParser.json());

// app.post('/file-upload', (req,res)=>{
//       console.log('req.body: ', req.body);
//       res.status(201).json({ data: '2222' });
// });
app.post("/file-upload", upload.single("file"), (req, res) => {
    console.log("Request name:", req.name);
    console.log("File:", req.file);

    // Check whether req.file contains the file
    // If not, multer failed to parse, so notify the client
    if (!req.file) {
        res.status(413).send("File not uploaded! Please attach a JPEG file under 5 MB.");
        return;
    }
    // Successful completion
    res.status(201).send("File uploaded successfully");
});

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