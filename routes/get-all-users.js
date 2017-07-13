let express = require('express');
let router = express.Router();

let db = require('.././db/connection');

let userSQL = require('../db/usersql');

router.get('/', (req, res) => {
    db.query(userSQL.queryAll, function (err, result) {
        if (err) return err;

        res.send(result);
    });
});

module.exports = router;