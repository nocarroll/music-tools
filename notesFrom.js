'use strict'

/**
 * Returns an array of chromatic notes starting from the given note, defaulting to C
 */
// import the notes module
const notes = require('./notes')

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