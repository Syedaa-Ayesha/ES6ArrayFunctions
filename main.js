// Write a function that uses reduce to find the sum of all elements in an array.

const number = [3, 5, 7, 9, 2, 10];
let summ = number.reduce((pre, cur) => {
      return pre + cur;
})
console.log(summ);

// Create a function that uses reduce to calculate the product of all elements in an array.

const num = [1, 2, 3, 1, 1, 1, 1, 1];
let mul = num.reduce((pre, cur) => {
      return pre * cur;
})
console.log(mul);

// Write a function to find the maximum value in an array using reduce.

const arr1 = [1, 21, 3, 6, 9]
let max = arr1.reduce((max, cur) => {
      return (cur > max) ? cur : max;
})
console.log(max);

// Create a function that uses filter to return an array containing only the even numbers from a given array.

const arr = [2, 5, 8, 9, 13, 12, 4, 6];
let evenNumber = arr.filter((val) => {
      return val % 2 === 0 ? val : console.log("Odd");
})
console.log(evenNumber);

// Write a function that uses filter to return an array with words longer than a specified length from a string array.

const strg = ["Ayesha", "Kulsoom", "Maryam", "Sana"];
let longerWord = strg.filter((val) => {
      return val.length > 5 ? val : console.log("Longer");
})
console.log(longerWord);


// Implement a function to filter out only the positive numbers from an array.

const integers = [-3, 5, 6, 8, -9, 0];
let positive = integers.filter((val, ind) => {
      return val >= 0 ? val : console.log(val);
})
console.log(positive);

// Write a function using filter to return an array containing only unique values from an array.

const unique = ["Ayesha", "Ayesha", "k", "A", "Arab"];
const result = [...new Set(unique)];
console.log(result);

// Create a function that uses map to return an array containing the squares of each element in the given array.

const no = [2, 1, 4, 9, 6, 3];
let square = no.map((val) => {
      return val ** 2;
})
console.log(square);

// Implement a function that uses map to convert each word in an array to uppercase.

let myName = ["Ayesha"];
let capital = myName.map((val) => {
      return val.toUpperCase();
})
console.log(capital);


// Write a function that uses map to double each element and then subtract a specified value.

const numbers = [2, 3, 4, 5];
let double = numbers.map((val) => {
      let subtractedValue = 2;
      return val * 2 - subtractedValue;

})
console.log(double);

// Create a function using map to return an array containing the lengths of each word in a string array.

const str = ["Syeda Ayesha", "Sana Sultan"];
let stringLength = str.map((val, ind) => {
      return `${val} Length is ${val.length}`;
});
console.log(stringLength);