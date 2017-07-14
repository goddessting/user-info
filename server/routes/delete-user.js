let express = require('express');
let router = express.Router();

let db = require('../connection');

let userSQL = require('../usersql');

router.post('/deleteUser', (req, res) => {
    db.query(userSQL.delete, req.body.id, function (err, result) {
        if (err) return err;

        res.send(result);
    });
});

module.exports = router;