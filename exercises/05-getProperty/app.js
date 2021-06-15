function getProperty(obj, key) {
  // your code here
    return obj[key]


}

var car = {
        model: 'Toyota'
        };

// array {model: 'Toyota', type: '4door'}

var output = getProperty(car, 'model');
console.log(output)