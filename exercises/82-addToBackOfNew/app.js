// Write your function here

let addToBackOfNew = (array, element) => {
    let newArray = []
    newArray.push(element)
    const finalArray = array.concat(newArray)
    return finalArray
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output);