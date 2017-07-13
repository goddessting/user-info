'use strict';

let request = require('supertest');

let app = require('../../server');

describe('test insert users', function () {
    let user;

    beforeEach(function () {
        user = {
            username: 'tingbaobao',
            name: 'tingbaobao',
            age: 22,
            sex: 'nv',
            telephone: '15829348754',
            email: '1766153116@qq.com',
            other: ''
        };
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
