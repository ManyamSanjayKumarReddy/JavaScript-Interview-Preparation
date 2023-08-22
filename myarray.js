// Creating an array with numbers
let arr = [99, 55, 12, 159];

// Creating another array with mixed data types
let anotherArr = ["Hitesh", 55, true];

// Logging the data type of the 'arr' variable
console.log(typeof arr);

// Accessing the first element of the 'arr' array
console.log(arr[0]);

// Getting the length of the 'arr' array
console.log(arr.length);

// Trying to access a non-existent property 'a' of the 'arr' array
console.log(arr.a); // This will output 'undefined'

// Creating an array with mixed data types
let array = [1, "a", 2, "b", 3, "c", 4, "d"];

// Using the 'at' method to access the value at index 1 in the 'array' array
console.log(array.at(1)); // Returns 'a'

// Using the 'indexOf' method to find the index of the value "d" in the 'array' array
console.log(array.indexOf("d")); // Returns 7

// Using the 'push' method to add elements to the end of the 'array' array
console.log(array.push(5, "e")); // Returns the new length of the array (10)

// Using the 'pop' method to remove and return the last element of the 'array' array
console.log(array.pop()); // Returns 'e'

// Using the 'shift' method to remove and return the first element of the 'array' array
console.log(array.shift()); // Returns 1

// Logging the updated 'array' after using 'shift'
console.log(array);

// Using the 'unshift' method to add an element at the beginning of the 'array' array
console.log(array.unshift(1)); // Returns the new length of the array (8)

// Logging the updated 'array' after using 'unshift'
console.log(array);

// Using the 'slice' method to extract a portion of the 'array' array
console.log(array.slice(2, 7)); // Returns a new array with elements from index 2 to 6

// Logging the unchanged 'array' after using 'slice'
console.log(array);

// Using the 'splice' method to remove elements from the 'array' array
console.log(array.splice(2, 7)); // Returns the removed elements from index 2 to 8

// Logging the updated 'array' after using 'splice'
console.log(array);

// Using the 'forEach' method to iterate through the 'array' array and log the data type of each element
array.forEach(item => console.log(typeof item));

// Using the 'forEach' method with a named function to log the data type of each element
array.forEach(function(item) {
    console.log("Type is:", typeof item);
});

// Using the 'map' method to iterate through the 'array' array and log each element
array.map(item => console.log(item));

// Using the 'filter' method to create a new array containing only string elements from the 'array' array
let newArr = array.filter(item => typeof item === 'string');
console.log(newArr);
