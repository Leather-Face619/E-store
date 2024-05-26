const express = require('express');
const db = require('./config/mongooseConnect')
const app = express();
const path = require('path');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")))

app.get('/', (req, res) => {
   res.send("op in the chat")
})
app.listen(3000, (req, res) => console.log("app runnig on 3000"))