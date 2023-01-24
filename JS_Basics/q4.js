// Implement inheritance. Define a constructor function SortArray which 
// Has a property originalArray
// Has get function to getSortedArray 
// Has a private function to sort the array.
// Takes as an input to construct an array of numbers
// Define another constructor function (SortObjectArray) which extends SortArray, and is used to sort array of JSON object

function SortArray(arr) {
    this.originalArray = arr;
    this.getSortedArray = function () {
        return this.sortArray();
    }
    this.sortArray = function () {
        return this.originalArray.sort((a, b) => a - b);
    }
}

function SortObjectArray(arr) {
    SortArray.call(this, arr);
}

SortObjectArray.prototype = Object.create(SortArray.prototype);
SortObjectArray.prototype.constructor = SortObjectArray;

let obj = new SortObjectArray([5, 2, 3, 1, 6, 4]);
console.log(obj.getSortedArray());

// Sort array of JSON objects using SortObjectArray constructor function
// let arr = [
//     {
//         "channel": "A",
//         "name": "shoe"
//     },
//     {
//         "channel": "A",
//         "name": "electronics"
//     },
//     {
//         "channel": "B",
//         "name": "apparel"
//     },
//     {
//         "channel": "C",
//         "name": "electronics"
//     }    
// ];

// let obj = new SortObjectArray(arr);
// console.log(obj.getSortedArray());

