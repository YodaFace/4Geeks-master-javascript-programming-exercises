// Write your function here

let getAverageOfElementsAtProperty = (obj, key) => {
    let newArray = []
    if ( !Array.isArray(obj[key]) || (obj[key].length == 0)) {
        return 0
    } 
    newArray = obj[key].map(element => {
        if (element !== undefined) {
            return element;
        } else 
            return 0
    });
    const reducer = (accumulator, curr) => accumulator + curr;
    let sumArray = newArray.reduce(reducer, 0) / newArray.length;
    console.log("Anthing", typeof sumArray, obj[key])
    return sumArray 
}
var obj = {
  key: [1,2,3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2
