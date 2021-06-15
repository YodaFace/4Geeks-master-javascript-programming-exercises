// Write your function here

const keep = (array, whatToCompare) => {
    let newArray = array.filter(function(element) {
        return element === whatToCompare;
    })
    return newArray
}

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); //--> [2, 2]