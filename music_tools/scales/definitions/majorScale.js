'use strict'

/** 
*   An object whose keys describe the indices of
*   the major scale notes in an array of chromatic notes,
*   and whose values describe the intervals from the root
*   R = Root
*   M = Major
*   m = minor
*   P = Perfect
*   @constant
*   @type {Object.<number, string>}
*/
const majorScaleDefinition = {
    0: 'R',
    2: 'm2',
    4: 'M3',
    5: 'P4',
    7: 'P5',
    9: 'm6',
    11: 'M7'
}

module.exports = majorScaleDefinition