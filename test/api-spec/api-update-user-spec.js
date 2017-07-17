'use strict';

let request = require('supertest');

let app = require('../../server');
let userSQL = require('../.././server/usersql');
let db = require('../.././server/connection');

describe('test update users', function () {
    let user, updateUser;

    beforeEach(function () {
        user = {
            id: 52,
            username: 'ttt',
            name: 'tingbaobao',
            age: 22,
            sex: 'nv',
            telephone: '15829348754',
            email: '1766153116@qq.com',
            other: ''
        };

        updateUser ={
            id: 52,
            username: 'litingting',
            name: 'tingbaobao',
            age: 2,
            sex: 'nan',
            telephone: '15829348754',
            email: '1766153116@qq.com',
            other: ''
        };

        db.query(userSQL.insert, user);
    });

    afterEach(function () {
        db.query(userSQL.delete, {id: 52});
    });

    it('update successfully', function (done) {
        request(app)
            .post('/updateUser')
            .set('Accept', 'application/json')
            .send(updateUser)
            .expect('Content-Type', /json/)
            .expect(200)
            .expect({tip: "success"}, done);
    });
});

