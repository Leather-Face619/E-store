const express = require('express');
const db = require('./config/mongooseConnect')
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
const ProductRoute = require('./routes/product')
const OwnerRoute = require('./routes/owner')
const UserRoute = require('./routes/user')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")))
app.use("/owner",OwnerRoute)
app.use("/product",ProductRoute)
app.use("/user",UserRoute)
app.get('/', (req, res) => {
   res.send("op in the chat")
})
app.listen(3000, (req, res) => console.log("app runnig on 3000"))