'use strict'

const notes = require('./notes')

 /**
 *  Returns an array of 12 chromatic notes starting from the given note, defaulting to C
 * @param {String} root 
 * @return {string[]} notesFrom(root)
 */
const notesFrom = (root) => {
    // build an array of notes from this empty array
    let ordered = []
    let defaultStartingNote = 'C'
    // find where the root is in the array of notes
    const rootIdx = notes.indexOf(root || defaultStartingNote)
    // if the note isn't in the array of notes, start at C
    if (rootIdx === -1) {
        throw new Error('Value passed is not valid note name.')
    }
    for (let i = rootIdx; i < notes.length + rootIdx; i++) {
        // 'wrap around' if notes[i] is undefined
        ordered.push(notes[i] || notes[i - notes.length])
    }
    return ordered
}

module.exports = notesFrom