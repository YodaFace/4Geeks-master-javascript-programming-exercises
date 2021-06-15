// Write your function here


const getElementsGreaterThan10AtProperty = (obj, key) => {
    // console.log(obj)
    // console.log(obj.key)
    newArray = []
    for (item in obj.key)
        // console.log(obj.key[item])
        if (obj.key[item] > 10)
            newArray.push(obj.key[item])
    return newArray
}

var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]