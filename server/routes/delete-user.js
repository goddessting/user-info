let express = require('express');
let router = express.Router();

let db = require('../connection');

let userSQL = require('../usersql');

router.post('/deleteUser', (req, res) => {
    db.query(userSQL.delete, req.body.id, function (err) {
        if (err) return res.status(500).json({tip: err.message});

        res.json({tip: "success"});
    });
});

module.exports = router;