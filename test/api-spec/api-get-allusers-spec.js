'use strict';

let request = require('supertest');

let app = require('../../server');

describe('test get all users', function () {

    it('get successfully', function (done) {
        request(app)
            .get('/getUsers')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
