'use strict';

const expect = require('chai').expect
const app = require('../app')
const notes = app.notes

describe('#notes', function() {
    it('should be an array', function() {
        const result = Object.prototype.toString.call( notes ) === '[object Array]'
        expect(result).to.equal(true)
    })
    it('should have 12 items', function() {
        const result = notes.length
        expect(result).to.equal(12)
    })
    it('should begin at note A', function() {
        const result = notes[0]
        expect(result).to.equal('A')
    })
    it('should end at note G#', function() {
        const result = notes[notes.length - 1]
        expect(result).to.equal('G#')
    })
})