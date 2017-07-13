let express = require('express');
let router = express.Router();

let db = require('.././db/connection');

let userSQL = require('../db/usersql');

router.post('/insertUser', (req, res) => {
    db.query(userSQL.insert, [req.body.username, req.body.name, req.body.age, req.body.sex, req.body.telephone, req.body.email, req.body.other], function (err, result) {
        if (err) return err;

        res.send('User added to database with ID: ' + result.insertId);
    });
});

module.exports = router;