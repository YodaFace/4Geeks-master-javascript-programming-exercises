// Write your function here


const getNthElementOfProperty = (obj, key, el) => {return obj.key[el]}

var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2

