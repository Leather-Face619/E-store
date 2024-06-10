const express = require('express');
var flash = require('connect-flash');
const db = require('./config/mongooseConnect')
const isLaggedIn = require('./middleware/isLoggedIn')
const app = express();
var cookieParser = require('cookie-parser')
var session = require('express-session')
const path = require('path');

const indexRoute = require('./routes/index')
const ProductRoute = require('./routes/product')
const OwnerRoute = require('./routes/owner')
const UserRoute = require('./routes/user')

require('dotenv').config()
app.use(cookieParser())
app.use(session({
  
   resave: false,
   saveUninitialized: false,
   secret: process.env.Express_Session_secret
 }))

app.use(flash());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")))
app.set('view engine', 'ejs');

app.use("/",indexRoute)
app.use("/owner",OwnerRoute)
app.use("/product",ProductRoute)
app.use("/user",UserRoute)

app.listen(3000, (req, res) => console.log("app runnig on 3000"))