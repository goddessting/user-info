'use strict';

let request = require('supertest');

let app = require('../../server');
let userSQL = require('../.././server/usersql');
let db = require('../.././server/connection');

describe('test get user by username', function () {

    beforeEach(function () {
        db.query(userSQL.insert, ['t', 'tingbaobao', 22, 'nv', '15829348754', '1766153116@qq.com', '']);
    });

    it('get successfully', function (done) {
        request(app)
            .post('/getUser')
            .set('Accept', 'application/json')
            .send({username: 't'})
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    afterEach(function () {
        db.query(userSQL.deleteByUsername, 't');
    });
});
