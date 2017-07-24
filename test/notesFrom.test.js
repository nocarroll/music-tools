'use strict';

const expect = require('chai').expect
const app = require('../app')
const notesFrom = app.notesFrom

describe('#notesFrom', function() {
    it('should be a function', function() {
        const result = typeof notesFrom === 'function'
        expect(result).to.equal(true)
    })
    it('should return an array', function() {
        const result = Object.prototype.toString.call( notesFrom() ) === '[object Array]'
        expect(result).to.equal(true)
    })
    it('should return an array of twelve items', function() {
        const result = notesFrom().length === 12
        expect(result).to.equal(true)
    })
    it('should return an array beginning with the note passed as the first argument', function() {
        const result = notesFrom('F').join() === ['F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'].join()
        expect(result).to.equal(true)
    })
    it('should return an array beginning with C if no note is passed as the first argument', function() {
        const result = notesFrom('C').join() === ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'].join()
        expect(result).to.equal(true)
    })
    it('should throw an error if an invalid note name is passed', function() {
        expect(() => notesFrom(123)).to.throw(/Value passed is not valid note name./)
    })    
})