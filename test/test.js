'use strict';

const expect = require('chai').expect
const notes = require('../notes')

describe('#notes', function() {
    it('should be an array', function() {
        var result = Object.prototype.toString.call( notes ) === '[object Array]'
        expect(result).to.equal(true)
    })
    it('should have 12 items', function() {
        var result = notes.length
        expect(result).to.equal(12)
    })
    it('should begin at note A', function() {
        var result = notes[0]
        expect(result).to.equal('A')
    })
    it('should end at note G#', function() {
        var result = notes[notes.length - 1]
        expect(result).to.equal('G#')
    })
})