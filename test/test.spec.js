const { expect } = require('chai');
const opts = require('../data/options');
const env = require('../endpoint/test');
const bent = require('bent');

describe('Testing Web Service', () => {
    const getStream = bent(env.uri);
    let stream;
    let headers;
    let body;

    before(async () => {
        stream = await getStream(opts.uri);
        headers = await stream.headers;
        body = await stream.json();
    });

    it('Verifying an http status code', () => {
        expect(stream.statusCode).to.be.equal(200);
    });

    it('Verifying an http response header', () => {
        expect(headers['content-type']).to.be.equal('application/json; charset=utf-8');
    });

    it('Verifying an http response body', () => {
        expect(body.length).to.be.equal(10);
    });
});