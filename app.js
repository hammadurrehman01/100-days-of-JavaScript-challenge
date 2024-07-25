// ========== DAY 1 ========== //

// Longest word in a string

// Q: Write a function findLongestWord that takes a string as an input and returns the longest word in a string. If there are multiple longest words, return the first one

// // Method: 1
// function findLongestWord(str) {
//     if (str.trim().length === 0) {
//         return false;
//     }

//     strArr = str.split(" ");
//     strArr = strArr.sort((a, b) => b.length - a.length);
//     console.log("strArr", strArr);
//     return strArr[0];
// }
// console.log(findLongestWord("JavaScript is the best and easy to understand"));


// // Method: 2
// let arr = ["Hammadddddddddd", "Ur", "Rehman"];

// arr = arr.reduce((acc, currVal) => {
//     return currVal.length > acc.length ? currVal : acc
// }, "")



// ========== DAY 2 ========== //

// // Create a function to generate hashtag

// ******** PREREQUISTRIES ******** //
// // String should not contain any white spaces
// // String should have first character in uppercase
// // String should not have more than 280 characters
// function generateHashtag(str) {
//     if (str.length > 280 || str.trim().length === 0) {
//         return false;
//     }
//     str = str.split(" ");
//     str = str.map((currWord) =>
//         // Method 1 for uppercase
//         // currWord.replace(currWord[0], currWord[0].toUpperCase())
//         // Method 2 for uppercase
//         currWord.charAt(0).toUpperCase() + currWord.slice(1)
//     )
//     str = `#${str.join("")}`;
// }

// generateHashtag("my name is hammad ur rehman")


// ========== DAY 3 ========== //
// Count how many I in missIssippi

// function countChar(word, char) {
//     var word = word.toLowerCase();
//     var char = char.toLowerCase();

//     const totalCount = word.split("").reduce((acc, currChar) => {
//         if (currChar === char) {
//             acc++
//         }
//         return acc;
//     }, 0)
//     console.log(totalCount);
// }

// countChar("MissIssippi", "I")



// ==== ****** DAY 4 ****** ==== //
// Identify whether the each side of triangle equal or what or identify what type of triangle is this

// function findTheSidesOfTriangle(a, b, c) {
//     if (a === b && b == c) {
//         return "equilateral"
//     }
//     if (a === b || b == c || a === c) {
//         return "isosceles"
//     }
//     return "scalene"
// }

// console.log(findTheSidesOfTriangle(3, 3, 3));
// console.log(findTheSidesOfTriangle(3, 3, 4));
// console.log(findTheSidesOfTriangle(3, 4, 5));




// ==== ****** DAY 5 ****** ==== //
// set the given characters or numbers in ascending order

// const randNumsArr = [2, 4, 7, 1];

// function sortAscending(arr) {
//     return arr.sort((a, b) => a - b)
// }

// console.log(randNumsArr)
// console.log(sortAscending(randNumsArr))

// let strArr = ["3", "1", "8", "6", "7", "2"];
// console.log(strArr)

// function sortAscending(str) {
//     const sortedString = str.sort((a, b) => a - b)
//     console.log(sortedString);
// }

// sortAscending(strArr);



// ==== ****** DAY 6 ****** ==== //
// Match that given words are palindrome or not

// const input = prompt("Enter any word to check whether it is palindrome or not");

// function isPalindrome(str) {
//     const strInSmall = str.toLowerCase()
//     const reverseStr = str.split("").reverse().join("");
//     if (strInSmall === reverseStr) {
//         console.log(`${strInSmall} and ${reverseStr} is palindrome`)
//     }
//     else {
//         console.log(`${strInSmall} and ${reverseStr} is not palindrome`)
//     }

// }

// isPalindrome(input)

function checkBiggestNumber(nums) {
    const bigNum = Math.max(...nums);
    console.log(bigNum);
}   

checkBiggestNumber([1, 2, 3, 4, 5, 6])