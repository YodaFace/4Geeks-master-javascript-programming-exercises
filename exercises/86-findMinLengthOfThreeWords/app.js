// Write your function here
function findMinLengthOfThreeWords (a, b, c) {
    // if (a.length < b.length || if a.length < c.length)
    //     if (b.length < c.length)
    //         return b
        if (a.length < b.length && a.length < c.length) return  a.length
        else if (b.length < a.length && b.length < c.length) return b.length
        else if (c.length < a.length && c.length < b.length) return c.length

    // return a.length < b.length && a.length < c.length ? a.length
    //      : b.length < a.length && b.length < c.length ? b.length
    //      : c.length < a.length && c.length < b.length ? c.length
}

// function example(…) {
//     return condition1 ? value1
//          : condition2 ? value2
//          : condition3 ? value3
//          : value4;
// }

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1