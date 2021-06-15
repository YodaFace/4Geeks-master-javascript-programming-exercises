// Write your function here

const computeAverageOfNumbers = (someArray) => {
        let sumOfNumbers = 0 
        let avgOfNumbers = 0
        for (number of someArray){
            sumOfNumbers = (sumOfNumbers + number)
        }
        avgOfNumbers = sumOfNumbers / someArray.length
        return avgOfNumbers
}


var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3