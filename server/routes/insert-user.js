let express = require('express');
let router = express.Router();

let db = require('../connection');

let userSQL = require('../usersql');

router.post('/insertUser', (req, res) => {
    db.query(userSQL.insert, [req.body.username, req.body.name, req.body.age, req.body.sex, req.body.telephone, req.body.email, req.body.other], function (err) {
        if (err) return res.status(500).json({tip: err.message});

        res.json({tip: "success"});
    });
});

module.exports = router;