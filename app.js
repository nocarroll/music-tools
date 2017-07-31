const notes = require('./music_tools/notes/notes')
const notesFrom = require('./music_tools/notes/notesFrom')
const scale = require('./music_tools/scales/scale')

console.log(scale('A'), scale('C'), scale('F'))

module.exports = {
    notes,
    notesFrom,
    scale
}