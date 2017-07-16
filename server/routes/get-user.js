let express = require('express');
let router = express.Router();

let db = require('../connection');

let userSQL = require('../usersql');

router.post('/getUser', (req, res) => {
    db.query(userSQL.queryByUsername, req.body.username, function (err, result) {
        if (err) return err;

        res.send(result);
    });
});

module.exports = router;