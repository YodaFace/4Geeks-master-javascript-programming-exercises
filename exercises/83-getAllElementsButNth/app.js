// Write your function here

let getAllElementsButNth = (array, index) => {
    let newArray = array.pop(index)
    return newArray
}


var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']