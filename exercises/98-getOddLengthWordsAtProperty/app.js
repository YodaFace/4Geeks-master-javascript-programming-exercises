// Write your function here

let getOddLengthWordsAtProperty = (obj, key) => {
    let newArray = []
    if (!Array.isArray (obj.key)) {
        return newArray
    }
    newArray = obj.key.filter(function(word) {
        if (word.length % 2 !== 0){
            return word
        }
    }) 
    return newArray
}


var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']