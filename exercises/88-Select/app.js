// Write your function here

// HAD TROUBLE WITH THIS // 
function select (arr, obj) {
    let newObj = {};
    for (let key of arr) {
            if (key in obj)
                newObj[key] = obj[key];
    }
    return newObj;
}


var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }