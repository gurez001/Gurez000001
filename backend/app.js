const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config({path:'config/config.env'});
const cors = require('cors');

app.use(express.json())
app.use(cookieParser())
app.use(bodyparser.urlencoded({extended:true}))
app.use('/uploads',express.static('uploads'))


// Define your CORS options
var corsOptions = {
  origin: 'http://localhost:3000/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Use CORS middleware with options
// app.use(cors(corsOptions));

//Routers import
const productRouter = require('./routes/productsRoutes');
const userRouter = require('./routes/userRoutes');
const order = require('./routes/orderRoutes');
const paymentRouter = require('./routes/paymentRoute');
const imageRouter = require('./routes/imageGelleryRoute');
const categoreRoute = require('./routes/categoreRoute');


app.use('/api/v1/',productRouter);
app.use('/api/v1/auth',userRouter);
app.use('/api/v1',order);
app.use('/api/v1',paymentRouter);
app.use('/api/v1',imageRouter);
app.use('/api/v1',categoreRoute);





//-- Middleware for err 
const errMiddleware = require('./middleware/error');
app.use(errMiddleware);
module.exports = app;





