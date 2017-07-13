let express = require('express');
let router = express.Router();

let db = require('.././db/connection');

let userSQL = require('../db/usersql');

router.get('/insertUser', (req, res) => {
        db.query(userSQL.insert, 'litingting', function (err, result) {
            if (err) return err;
            res.send('User added to database with ID: ' + result.insertId);
        });
});

module.exports = router;