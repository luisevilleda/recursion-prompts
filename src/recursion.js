/* jshint esversion: 6 */

// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n, total) {
  total = total || 1;
  if (n === 0) {
    return total;
  } else if (n < 0) {
    return null;
  }
  total *= n;
  return factorial(--n, total);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, total) {
  total = total || 0;
  total += array[0] || 0;
  var newArray = array.slice(1);
  return newArray.length ? sum(newArray, total) : total;
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array, sum) {
  sum = sum || 0;
  var subArrays = [];
  array.forEach(function(val) {
    if (typeof val === 'number') {
      sum += val;
    } else if (Array.isArray(val)) {
      val.forEach(function(innerArrVal) {
        subArrays.push(innerArrVal);
      });
    }
  });
  if (subArrays.length) {
    return arraySum(subArrays, sum);
  } else {
    return sum;
  }
};

// 4. Check if a number is even.
var isEven = function(n) {
  // if (n === 0) {
  //   return true;
  // } else if (n < 0 && n + 2 <= 0) {
  //   return isEven(n + 2);
  // } else if (n > 0 && n - 2 >= 0){
  //   return isEven(n - 2);
  // } else {
  //   return false;
  // }

  return n === 0 ? true : (n < 0 && n + 2 <= 0) ? isEven(n + 2) : (n > 0 && n - 2 >= 0) ? isEven(n - 2) : false;

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n, sum) {
  sum = sum || 0;
  n = n ? Math.floor(n) : Math.ceil(n);
  if (n === 0) {
    return sum;
  } else if ( n < 0 ) {
    return sumBelow(n + 1, sum += n + 1);
  } else if ( n > 0 ){
    return sumBelow(n - 1, sum += n - 1);
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, arr, reverse) {
  arr = arr || [];
  if (x > y) {
    var tempY = y;
    y = x;
    x = tempY;
    reverse = true;
  }
  if (x + 1 < y) {
    arr.push(Math.floor(x + 1));
    return range(x + 1, y, arr, reverse);
  } else {
    if (reverse) {
      return arr.reverse();
    } else {
      return arr;
    }
  }

};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp, total, neg) {
  if (exp === 0) {
    return 1;
  } else if (Math.abs(exp) !== exp) {
    neg = true;
    exp = Math.abs(exp);
  }
  total = total || base;
  if (exp <= 1) {
    if (neg) {
      return 1 / total;
    } else {
      return total;
    }
  } else {
    return exponent(base, exp - 1, total *= base, neg);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n, power) {
  power = power || 0;
  var comparison = Math.pow(2, power);
  if (n === comparison) {
  return true;
  } else if (n < comparison) {
  return false;
  } else {
  return powerOfTwo(n, ++power);
  }
};

// 9. Write a function that accepts a string and reverses it.
var reverse = function(string, index, arr) {
  index = index || 0;
  arr = arr || [];
  if (string.length === index) {
    return arr.join('');
  } else {
    arr.unshift(string.charAt(index));
    return reverse(string, ++index, arr);
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string, index, arr) {
  string = string.toLowerCase();
  string = string.replace(/\s/g, '');
  index = index || 0;
  arr = arr || [];
  if (string.length < index) {
    return arr.join('') === string;
  } else {
    arr.unshift(string.charAt(index));
    return palindrome(string, ++index, arr);
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,3) // 2
// modulo(17,5) // 2
// modulo(22,6) // 4
// modulo(78, 458) // 78
// modulo(-10, -1) //
var modulo = function(x, y) {
  if (x >= y && x - y < x) {
    return modulo(x - y, y);
  } else if (x < 0 && y > 0 && -x < y) {
    return x;
  } else if (x < 0 && y < 0 && x - y < 0) {
    return modulo(x - y, y);
  } else if (x < 0 && y > 0) {
    return modulo(x + y, y);
  } else if (y === 0){
    return NaN;
  } else {
    return x;
  }
};

//one-liner for above
//  return (x >= y && x - y < x) ? modulo(x - y, y) : (x < 0 && y > 0 && -x < y) ? x : (x < 0 && y < 0 && x - y < 0) ? modulo(x - y, y) : (x < 0 && y > 0) ? modulo(x + y, y) : (y === 0) ? NaN : x;


// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y, sum, neg) {
  if (y === 0) {
    return 0;
  }
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    neg = true;
  }
  if (x < 0) {
    x = -x;
  }
  if (y < 0) {
    y = -y;
  }
  sum = sum || x;
  if (y === 1) {
    if (neg) {
      return -sum;
    }
    return sum;
  }
  return multiply(x, y - 1, sum + x, neg);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y, sum, count, neg) {
  if (y === 0 ) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    neg = true;
  }
  if (x < 0) {
    x = -x;
  }
  if (y < 0) {
    y = -y;
  }
  sum = sum || y;
  count = count || 0;
  if (sum > x) {
    if (neg) {
      return -count;
    }
    return count;
  }
  return divide(x, y, sum + y, ++count, neg);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y, greatest, divisor) {
  if (x < 0 || y < 0) {
    return null;
  }
  greatest = greatest || 1;
  divisor = divisor || 1;
  if (divisor > x || divisor > y) {
    return greatest;
  }
  if (x % divisor === 0 && y % divisor === 0) {
    greatest = divisor;
  }
  return gcd(x, y, greatest, ++divisor);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2, index, boolString) {
  index = index || 0;
  boolString = boolString || 'true';
  if (index > str1.length && index > str2.length) {
    return JSON.parse(boolString);
  }
  if (boolString === 'false') {
    return JSON.parse(boolString);
  }
  boolString = str1.charAt(index) === str2.charAt(index) ? 'true' : 'false';
  return compareStr(str1, str2, ++index, boolString);
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, index, arr) {
  index = index || 0;
  arr = arr || [];
  arr.push(str.charAt(index));
  if (str.length - 1=== index) {
    return arr;
  }
  return createArray(str, ++index, arr);
};

// 17. Reverse the order of an array
var reverseArr = function (array, arr, index) {
  index = index || 0;
  arr = arr || [];
  arr.unshift(array[index]);
  if (index === array.length - 1) {
    return arr;
  }
  return reverseArr(array, arr, ++index);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, arr) {
  arr = arr || [];
  if (length === 0) {
    return arr;
  }
  arr.push(value);
  return buildList(value, --length, arr);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count, index) {
  count = count || 0;
  if (!array.length) {
    return count;
  }
  if (array[0] === value) {
    count ++;
  }
  return countOccurrence(array.slice(1), value, count, index);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, arr) {
  arr = arr || [];
  if (!array.length) {
    return arr;
  }
  arr.push(callback(array[0]));
  return rMap(array.slice(1), callback, arr);

};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};
