// Write your function here

function getIndexOf(letter, string) {
    for (let i = 0; i < string.length; i++) {
        if (letter === string[i]) {
        return i }
    }
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2