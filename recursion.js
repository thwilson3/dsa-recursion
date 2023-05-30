/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // console.log(words);
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

function everyOther(str) {
  if (str.length === 0) return "";

  return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  // base case arr.length === 0 return false
  if (arr.length === 0) return false;

  if (arr[0] === val) return true;

  return find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // if 1 letter, true, if no letters, true
  if (str.length <= 1) return true;

  // get first and last section and check if they don't match, return false
  if (str[0] !== str[str.length - 1]) return false;

  // recursively past
  return isPalindrome(str.slice(1, -1));
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";
  return revString((str.slice(1))) + str[0];
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if (arr.length === idx) return -1;

  if (arr[idx] === val) return idx;

  return findIndex(arr, val, ++idx);
}

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
