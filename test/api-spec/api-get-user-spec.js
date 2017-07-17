'use strict';

let request = require('supertest');

let app = require('../../server');
let userSQL = require('../.././server/usersql');
let db = require('../.././server/connection');

describe('test get user by id', function () {
    let user;

    beforeEach(function () {
        user = {
            id: 51,
            username: 'tt',
            name: 'tingbaobao',
            age: 22,
            sex: 'nv',
            telephone: '15829348754',
            email: '1766153116@qq.com',
            other: ''
        };

        db.query(userSQL.insert, user);

    });

    it('get successfully', function (done) {
        request(app)
            .post('/getUser')
            .set('Accept', 'application/json')
            .send({username: 'tt'})
            .expect('Content-Type', /json/)
            .expect(200, {
                id: 51,
                username: 'tt',
                name: 'tingbaobao',
                age: 22,
                sex: 'nv',
                telephone: '15829348754',
                email: '1766153116@qq.com',
                other: ''
            }, done);
    });

    afterEach(function () {
        db.query(userSQL.deleteByUsername, user.username);
    });
});
