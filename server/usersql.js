let UserSQL = {
    insert: 'INSERT INTO User(username,name,age,sex,telephone,email,other) VALUES(?,?,?,?,?,?,?)',
    queryAll: 'SELECT * FROM User',
    update:'UPDATE User SET USERNAME=?, NAME=?, AGE=?, SEX=?, TELEPHONE=?, EMAIL=?, OTHER=? WHERE id=?',
    delete: 'DELETE FROM User WHERE id=?',
    deleteByUsername: 'DELETE FROM User WHERE username=?',
    queryByUsername: 'SELECT * FROM User WHERE username=?',
};

module.exports = UserSQL;


