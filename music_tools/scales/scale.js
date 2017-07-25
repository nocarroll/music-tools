'use strict'

const notesFrom = require('../notes/notesFrom')
const majorScaleDefinition = require('./definitions/majorScale')
/**
 *  Returns an array of 7 notes describing a scale
 *      - starting from the given note, defaulting to C
 *      - describing the given scale, defaulting to a Major scale
 *  @param {String} root 
 *  @param {String} scaleType 
 *  @return {string[]} scale(root, scaleType)
 */
const scale = (root, scaleType) => {
    let scale = []
    const definitions = {
        major: majorScaleDefinition
    }
    if (!scaleType) {
        // TODO: add module to translate scaleTypes to definitions
        scaleType = 'major'
    }
    for (let scaleNoteIndex in definitions[scaleType]) {
        scale.push(notesFrom(root)[scaleNoteIndex])
    }
    return scale
}

module.exports = scale