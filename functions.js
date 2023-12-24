// Print odd numbers in an array
// Anonymous
let printOdd = function(arr) {
    for(let i=0; i < arr.length; i++) {
        if(arr[i] % 2 === 1){
            console.log(arr[i]);
        }
    }
   }
   printOdd([1,2,3,4,5,6,7,8]);

//IIFE   
   (function(arr) {
       for(let i in arr){
          if(arr[i] % 2 === 1){
             console.log(arr[i]); 
          } 
       }
   })([1,2,3,4,5,6,7,8]);

// Arrow function
let printOddNum = (arr) => {
    for(let i=0; i < arr.length; i++) {
        if(arr[i] % 2 === 1){
            console.log(arr[i]);
        }
    }
   }
   printOddNum([1,2,3,4,5,6,7,8]);

// Sum of all numbers in an array
// Anonymous    
   var sum = 0; 
   let printSum = function(arr){
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
   }
   printSum([2,4,6,8,10]);
   console.log(sum);

//IIFE
var sum = 0;
(function(arr) {
    for(let i in arr){
    sum += arr[i];
    }
})([1,2,3,4,5,6,7,8]);
console.log(sum);

// Arrow function
var sum = 0; 
let printSum = (arr) => {
 for(let i = 0; i < arr.length; i++) {
     sum += arr[i];
 }
}
printSum([2,4,6,8,10]);
console.log(sum);

// Return all the prime numbers in an array
// Anonymous
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10,11,22,43,55,59]
var primeNum = numArray.filter( function (number) {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(primeNum);

// Arrow function
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10,11,22,43,55,59];
var primeNum = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(primeNum);

// IIFE
(function() {
  var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 43, 55, 59];
  var primeNum = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(primeNum);
})();

// Remove duplicates from an array
// Anonymous function
var removeDuplicates = (function(arr) {
  let unique = [];
  arr.forEach(element => {
      if (!unique.includes(element)) {
          unique.push(element);
      }
  });
  return unique;
});
console.log(removeDuplicates([55,78,19,55,17,78,19,25,20,16]));

// Arrow function
var removeDuplicates = ((arr) => {
  let unique = [];
  arr.forEach(element => {
      if (!unique.includes(element)) {
          unique.push(element);
      }
  });
  return unique;
});
console.log(removeDuplicates([55,78,19,55,17,78,19,25,20,16]));

//IIFE
(function() {
  var removeDuplicates = [55,78,19,55,17,78,19,25,20,16];
  let unique = [];
  removeDuplicates.forEach(element => {
      if (!unique.includes(element)) {
          unique.push(element);
      }
  });
  return unique;
  console.log(removeDuplicates);
})();


//Return all the palindromes in an array
//Anonymous 
var isPalindrome = function (n) {
  const str = String(n);
  return str === [...str].reverse().join('');
}
var sumArray = function (arr) {
  var sum = 0;
  var arrPalindrome = [];
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] > 10 && isPalindrome(arr[i])) {
//            sum += arr[i]
       arrPalindrome.push(arr[i]);
      }
  }
  console.log(arrPalindrome);    
}
sumArray([12, 313, 11, 44, 9, 1])

//Arrow
var isPalindrome = (n) => {
  const str = String(n);
  return str === [...str].reverse().join('');
}
var sumArray = (arr) => {
  var sum = 0;
  var arrPalindrome = [];
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] > 10 && isPalindrome(arr[i])) {
//            sum += arr[i]
       arrPalindrome.push(arr[i]);
      }
  }
  console.log(arrPalindrome);    
}
sumArray([12, 313, 11, 44, 9, 1]);

//IIFE
var isPalindrome = (n) => {
  const str = String(n);
  return str === [...str].reverse().join('');
}
(function (arr) {
  var sum = 0;
  var arrPalindrome = [];
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] > 10 && isPalindrome(arr[i])) {
//            sum += arr[i]
       arrPalindrome.push(arr[i]);
      }
  }
  console.log(arrPalindrome);    
})([12, 313, 11, 44, 9, 1]);

//Convert all the strings to title caps in a string array
//Anonymous 
var titleCase = function (str) {
  str = str.toLowerCase().split(" ");
  for(let i=0; i < str.length; i++) {
  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
} 
console.log(titleCase("I LOVE WEB DEVELOPEMENT").split(" "));

//Arrow
var titleCase = (str) => {
  str = str.toLowerCase().split(" ");
  for(let i=0; i < str.length; i++) {
  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
} 
console.log(titleCase("I LOVE WEB DEVELOPEMENT").split(" "));

//IIFE
(function (str) {
  str = str.toLowerCase().split(" ");
  for(let i=0; i < str.length; i++) {
  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(str.join(" ").split(" "));
})("I LOVE WEB DEVELOPEMENT"); 

//Return median of two sorted arrays of the same size
//Anonymous
const medianSortedArrays = function (arr1,arr2) {
  let arr = [...arr1,...arr2].sort((a,b)=> a-b)
  if(arr.length % 2 > 0 ? false : true) {
      let r = (arr.length) / 2;
      let l = r -1;
      return (arr[l] + arr[r]) / 2;
  }else {
      return arr[((arr.length +1) / 2) - 1];
  }
}
const arr1 = [1,2];
const arr2 = [3,4];
console.log(medianSortedArrays(arr1,arr2));

//Arrow
const medianSortedArrays = (arr1,arr2) => {
  let arr = [...arr1,...arr2].sort((a,b)=> a-b)
  if(arr.length % 2 > 0 ? false : true) {
      let r = (arr.length) / 2;
      let l = r -1;
      return (arr[l] + arr[r]) / 2;
  }else {
      return arr[((arr.length +1) / 2) - 1];
  }
}
const arr1 = [1,2];
const arr2 = [3,4];
console.log(medianSortedArrays(arr1,arr2));

//Rotate an array by k times
//Anonymous
const rotateArray = function(nums, k) {
  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }
  return nums;
}
let nums = [1,2,3,4,5,6,7];
let k = 3;
console.log(rotateArray(nums,k));

//Arrow
const rotateArray = (nums, k) => {
  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }
  return nums;
}
let nums = [1,2,3,4,5,6,7];
let k = 3;
console.log(rotateArray(nums,k));