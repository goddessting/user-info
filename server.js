const express = require('express');
const app = new express();
const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/'));

const insertUser = require('./routes/insert-users');
const getAllUsers = require('./routes/get-all-users');

app.use("/", getAllUsers);
app.use("/", insertUser);

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log('server start, listening is 3000');
});

module.exports = app;
