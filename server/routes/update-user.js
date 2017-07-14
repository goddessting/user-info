let express = require('express');
let router = express.Router();

let db = require('../connection');

let userSQL = require('../usersql');

router.post('/updateUser', (req, res) => {
    db.query(userSQL.update, [req.body.username, req.body.name, req.body.age, req.body.sex, req.body.telephone, req.body.email, req.body.other, req.body.id], function (err, result) {
        if (err) return err;

        res.send(result);
    });
});

module.exports = router;