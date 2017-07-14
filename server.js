const express = require('express');
const app = new express();
const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/'));

const getAllUsers = require('./server/routes/get-all-users');
const insertUser = require('./server/routes/insert-user');
const deleteUser = require('./server/routes/delete-user');
const getUser = require('./server/routes/get-user');
const updateUser = require('./server/routes/update-user');

app.use("/", getAllUsers);
app.use("/", insertUser);
app.use("/", deleteUser);
app.use("/", getUser);
app.use("/", updateUser);

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, './', 'index.html'));
});

app.listen(3000, () => {
    console.log('server start, listening is 3000');
});

module.exports = app;
