var UserSQL = {
    insert: 'INSERT INTO User(username,name,age,sex,telephone,email,other) VALUES(?,?,?,?,?,?,?)',
    queryAll: 'SELECT * FROM User'
};

module.exports = UserSQL;
