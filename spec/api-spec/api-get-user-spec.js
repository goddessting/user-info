'use strict';

let request = require('supertest');

let app = require('../../server');

describe('test get user by id', function () {
    let user;

    beforeEach(function () {
        user = {id: "22"};
    });

    it('get successfully', function (done) {
        request(app)
            .post('/getUserById')
            .set('Accept', 'application/json')
            .send(user)
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
