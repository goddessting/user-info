'use strict';

let request = require('supertest');

let app = require('../../server');
let db = require('../../db/connection');

describe('test delete user', function () {
    let user;

    beforeEach(function () {
        user = {id: "5"};
    });

    it('delete successfully', function (done) {
        request(app)
            .post('/deleteUser')
            .set('Accept', 'application/json')
            .send(user)
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

