'use strict';

let request = require('supertest');

let app = require('../../server');

describe('test update users', function () {
    let user;

    beforeEach(function () {
        user = {
            id: "22",
            username: 'tt',
            name: 'tingbaobao',
            age: 22,
            sex: 'nv',
            telephone: '15829348754',
            email: '1766153116@qq.com',
            other: ''
        };
    });

    it('update successfully', function (done) {
        request(app)
            .post('/updateUser')
            .set('Accept', 'application/json')
            .send(user)
            .expect('Content-Type', /json/)
            .expect(200)
            .expect({tip: "success"}, done);
    });
});

