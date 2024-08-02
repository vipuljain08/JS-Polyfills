// Array.prototype.reduce()

// It runs a "reducer" callback function over all elements in the array, 
// in ascending-index order, and accumulates them into a single value.

// Syntax
// reduce(callbackFn)
// reduce(callbackFn, initialValue)

// Parameters:
// callbackfn: A function to execute for each element in the array.
// initialValue: A value to which accumulator is initialized the first time the callback is called.

// Return Value: single value

Array.prototype.myReduceFunc = function(cb, initialValue) {
    let accumulator = initialValue
    for(i=0; i<this.length; i++) {
        accumulator = cb(accumulator, this[i])
    }
    return accumulator
}

const myArr = [1, 2, 3, 4, 5]

// Using inbuilt reduce function
let result = myArr.reduce((acc, elem) => acc + elem, 0)
console.log(result) // 15

let result1 = myArr.myReduceFunc((acc, elem) => acc + elem, 0)
console.log(result1) // 15