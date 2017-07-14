let express = require('express');
let router = express.Router();

let db = require('../connection');

let userSQL = require('../usersql');

router.post('/getUserById', (req, res) => {
    db.query(userSQL.queryById, req.body.id, function (err, result) {
        if (err) return err;

        res.send(result);
    });
});

module.exports = router;