// Write your function here

const getLastElementOfProperty = (obj, key) => {
    if ( Array.isArray (obj[key]) === [] || !Array.isArray (obj[key]) || obj[key] === '') {
        return undefined
    }
    let lastKey = obj.key.length -1
    for (key in obj) {
        // console.log(obj)
        // console.log(obj.key.length -1)
        // console.log(obj[key][key.length -1])
        return (obj[key][lastKey])
    }
}
// console.log(obj)

var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5
// console.log(obj.key.length)
