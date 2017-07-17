'use strict';

let request = require('supertest');

let app = require('../../server');
let userSQL = require('../.././server/usersql');
let db = require('../.././server/connection');

describe('test update users', function () {
    let user, updateUser, insertId;

    beforeEach(function () {
        user = {
            username: 'ttt',
            name: 'tingbaobao',
            age: 22,
            sex: 'nv',
            telephone: '15829348754',
            email: '1766153116@qq.com',
            other: ''
        };

        db.query(userSQL.insert, ['ttt', 'tingbaobao', 22, 'nv', '15829348754', '1766153116@qq.com', ''], function (err,result) {
            insertId = result.insertId;
        });
    });

    afterEach(function () {
        db.query(userSQL.deleteByUsername, 'ttt');
    });

    it('update successfully', function (done) {
        request(app)
            .post('/updateUser')
            .set('Accept', 'application/json')
            .send({
                id: insertId,
                username: 'litingting',
                name: 'tingbaobao',
                age: 2,
                sex: 'nan',
                telephone: '15829348754',
                email: '1766153116@qq.com',
                other: ''
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .expect({tip: "success"}, done);
    });
});

