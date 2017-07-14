'use strict';

let request = require('supertest');

let app = require('../../server');
let userSQL = require('../.././server/usersql');
let db = require('../.././server/connection');

describe('test insert users', function () {
    let user;

    beforeEach(function () {
        user = {
            username: 't',
            name: 'tingbaobao',
            age: 22,
            sex: 'nv',
            telephone: '15829348754',
            email: '1766153116@qq.com',
            other: ''
        };
    });

    afterEach(function () {
        db.query(userSQL.deleteByUsername, user.username);
    });

    it('insert successfully', function (done) {
        request(app)
            .post('/insertUser')
            .set('Accept', 'application/json')
            .send(user)
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

