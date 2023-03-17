
//At this checkpoint you are asked to write an algorithm that fulfills the following description:

// Description:

// Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
// Example:
// Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
// Output: 13 (distinct elements 4, 7, 2 )
// Give two Solutions to this problem, using different types of data structures each time.
// Now, given two sets of integers, write also two algorithms to print the sum of overlapping elements in two sets. The elements in each set are unique or there are no duplicates within a set.
// Example: 

// Set 1: [12, 13, 6, 10]
// Set 2: [13, 10, 16, 15]
// Sum of overlapping elements: 46
// Explanation: Common elements are 10, 13
// nstructions
// Problem 1, Solution 1 with an array.
// Initialize sum = 0. Compare each element of set one with the second set and if element is not present then add that element to sum. Then do the vice versa to add elements from the second set. 
// Problem 1, Solution 2 with an hash table.
// Insert all the elements from both the sets with the element as key and its count (in both arrays).
// Now iterate through the constructed map and sum all the elements with count = 1.
// Problem 2, same approaches with little modifications.

// 

let arr1 = [1, 2, 3, 4, 5,];
let arr2 = [5, 6, 7, 8, 9,];

let a = arr1.length;
let b = arr2.length;

let sum = 0;

function addToSum (arr1, arr2, a, b) {
    let allElement = new Set();

    for(i = 0;  i < b; i++) {
        allElement.add(b[i]);
        
    for(i = 0; i < a; i++){
        if(!allElement.has(a[i]))
            console.log(a[i] + sum);
        
        }
    sum += i;
    }
    return sum
}

// function addToSum(arr1, arr2) {
//     let newArr = arr1.concat(arr2);
//     let val = newArr.reduce(function(accumulator, currentValue){
//       return accumulator + currentValue;
//     });
    
//     return val;
//   }

console.log(addToSum([1, 2, 3, 4, 5,], [5, 6, 7, 8, 9,]))