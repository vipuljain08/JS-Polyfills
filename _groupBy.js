// Lodash _.groupBy() method creates an object composed of keys generated from the results of running each element of collection through the iterate function.

// Syntax:
// _.groupBy(collection, [iteratee])

// Parameters:
// Collection: It is the collection that method iterates over.
// Iterateee: It is the function/property invoked for every element in the array.

// Return Value: composed aggregates object.

function groupBy(collection, iterable) {
    return collection.reduce((obj, elem) => {
        let key = typeof iterable === 'function' ? iterable(elem) : elem[iterable]
        if(obj.hasOwnProperty(key)) {
            obj[key] = [...obj[key], elem]
        } else {
            obj[key] = [elem]
        }
        return obj
    }, {})
}

let users = ['vipul', 'jain', 'john', 'aditi', 'garg']
let num = [3.1, 1.2, 3.3]

console.log(groupBy(users, 'length')) 
// Output : {
//   '4': [ 'jain', 'john', 'garg' ],
//   '5': [ 'vipul', 'aditi' ]
// }

console.log(groupBy(num, Math.floor))
// Output: { '1': [ 1.2 ], '3': [ 3.1, 3.3 ] }