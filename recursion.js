/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  console.log(words);
  if (words.length === 0) return 0;

  // if (words[0]?.length > words[1]?.length){
  //   return words[0]?.length;
  // } else if (words[1]?.length > words[0]?.length) {
  //   return words[1]?.length;
  // }

  return Math.max(words[0].length, longest(words.slice(1)))

  // let longest = 0;

  // function length(word){
  //   if (longest < word.length){
  //     longest = word.length;
  //   }
  // }

  // for(let word of words){
  //   length(word);
  // }

  // return longest;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }

module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
