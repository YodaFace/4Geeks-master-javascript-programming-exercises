// Write your function here

function getElementsLessThan100AtProperty (obj, key) {
    if ( !Array.isArray(obj[key]) || (obj[key].length == 0)) {
        return 0
    } 
     newArray = obj[key].filter((element) => {
            return element < 100 
     });
     return newArray
}

var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]