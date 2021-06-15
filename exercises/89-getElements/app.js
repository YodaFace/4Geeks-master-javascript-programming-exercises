// Write your function here

function getElementsThatEqual10AtProperty (obj, key) {
     newArray = obj[key].filter((element) => {
            return element == 10 
     });
     return newArray
}


var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]