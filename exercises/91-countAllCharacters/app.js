// Write your function here

let countAllCharacters = (string) => {
    let characterCount = {}
    for (let char of string) {
        // console.log(char)
        // console.log (characterCount[char])
        if (characterCount[char] === undefined) {
             characterCount[char] = 1
        } else {
            characterCount[char]++
        }
    }
    return characterCount
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}


// Instructions
// Write a function called "countAllCharacters".

// Given a string, "countAllCharacters" returns an object in which each key is a character of the given string. The value of each key should correspond to the number of times the character appears in the string.

// Notes:

// If the string is empty, countAllCharacters should return an empty array.


// console.log("---------------------------")

// let countNameCharacters = (string) => {
//     let characterCount = {}
//     for (let char of string) {
//         // console.log(char + " - This is the character in the string")
//         // console.log (characterCount[char] + " - This is the before the IF")
//         if (characterCount[char] === undefined) {
//              characterCount[char] = 1
//         } else {
//             characterCount[char]++
//         }
//     // console.log (characterCount[char] + " - This is the after the IF")
//     }
//     return characterCount
// }

// var output = countNameCharacters('William Cranmer');
// console.log(output); // --> {b: 1, a: 3, n: 2}