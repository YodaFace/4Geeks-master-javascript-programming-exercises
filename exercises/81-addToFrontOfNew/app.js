// Write your function here

let addToFrontOfNew = (someArray, valueToAdd) => {
    let array2 = []
    array2.push(valueToAdd)
    const array3 = array2.concat(someArray)
    return array3
}


var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); //--> [1, 2]