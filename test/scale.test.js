'use strict';

const expect = require('chai').expect
const app = require('../app')
const scale = app.scale

describe('#scale', function() {
    it('should be a function', function() {
        const result = typeof scale === 'function'
        expect(result).to.equal(true)
    })
    it('should return an array', function() {
        const result = Object.prototype.toString.call( scale() ) === '[object Array]'
        expect(result).to.equal(true)
    })
    it('should return an array of 7 items', function() {
        const result = scale().length === 7
        expect(result).to.equal(true)
    })
    it('should return an array beginning with the note passed as the first argument', function() {
        const result = scale('A')[0] === 'A'
        expect(result).to.equal(true)
    })
})