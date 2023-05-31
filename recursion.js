/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;

  return Math.max(words[0].length, longest(words.slice(1)));
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
  return revString(str.slice(1)) + str[0];
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (arr.length === idx) return -1;

  if (arr[idx] === val) return idx;

  return findIndex(arr, val, ++idx);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = []) {
  if (obj.length === 0) return [];

  for (let key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      gatherStrings(obj[key], arr);
    } else {
      if (typeof obj[key] === "string") {
        arr.push(obj[key]);
      }
    }
  }

  return arr;
}

/**
 *
 * Ari's beautiful solution
 *
 */
// function gatherStrings(obj){
//   // base case:
//   if (obj.length === 0) return [];

//   const strings = [];

//   for (let key in obj) {
//     if (typeof obj[key] === 'string'){
//       strings.push(obj[key]);
//     }
//     if (typeof obj[key] === 'object' && !Array.isArray(obj[key])){
//       strings.push(...gatherStrings(obj[key]));
//     }
//   }

//   return strings;
// }

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {
  if (arr.length === 0) return false;

  if (arr.length === 1) {
    return arr[0] === val;
  }

  const middle = Math.floor(arr.length / 2);

  if (arr[middle] === val) {
    return true;
  } else if (arr[middle] < val) {
    return binarySearch(arr.slice(middle), val);
  } else {
    return binarySearch(arr.slice(0, middle), val);
  }
}

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
