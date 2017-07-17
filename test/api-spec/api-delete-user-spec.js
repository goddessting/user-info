'use strict';

let request = require('supertest');

let app = require('../../server');
let userSQL = require('../.././server/usersql');
let db = require('../.././server/connection');


describe('test delete user', function () {

    it('delete successfully', function (done) {
        request(app)
            .post('/deleteUser')
            .set('Accept', 'application/json')
            .send({id: 50})
            .expect('Content-Type', /json/)
            .expect(200, {tip: "success"}, done);
    });
});

