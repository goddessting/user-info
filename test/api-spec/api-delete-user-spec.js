'use strict';

let request = require('supertest');

let app = require('../../server');
let userSQL = require('../.././server/usersql');
let db = require('../.././server/connection');


describe('test delete user', function () {
    let user;

    beforeEach(function () {
        user = {
            id: 50,
            username: 't',
            name: 'tingbaobao',
            age: 22,
            sex: 'nv',
            telephone: '15829348754',
            email: '1766153116@qq.com',
            other: ''
        };

        db.query(userSQL.insert, user);

    });

    it('delete successfully', function (done) {
        request(app)
            .post('/deleteUser')
            .set('Accept', 'application/json')
            .send({id:50})
            .expect('Content-Type', /json/)
            .expect(200, {tip: "success"}, done);
    });
});

