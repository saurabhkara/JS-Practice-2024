//Q1. What are the possible ways to create objects in JavaScript ?

// const obj1 = {};
// const obj2 = (() => {
//   return {};
// })();
// function Obj() {}
// const obj3 = new Obj();
// const obj4 = Object.create({});
// class Obj4 {}
// const obj5 = new Obj4();
// console.log(obj1, obj2, obj3, obj4, obj5);

//Q2. What is a prototype chain ?

function Person(name) {
  this.name = name;
  this.salary = "8lpa";
}
// const p1 = new Person("Saurabh");
// console.log(p1);

// Person.prototype.city = "Arrah";
// const p2 = new Person("Saurabh Kumar");
// console.log(p2.__proto__.__proto__.__proto__);

//Q.3 Call, apply and bind

// const obj6 = {
//   name: "Saurabh",
//   getName: function (name, age) {
//     this.name = name;
//     console.log("name==>", this.name, age);
//   },
// };
// const obj7 = {
//   name: "Saurabh",
// };
// obj6.getName.call(obj7, "Saurabh Kumar G", 26);
// obj6.getName.apply(obj6, ["Saurabh Kumar", 26]);
// const obj6Bind = obj6.getName.bind(obj6);
// obj6Bind("Ashu", 30);

//Q.4 JSON
// const obj8 = {
//   name: "Saurabh",
// };

// console.log(structuredClone(obj8));
// const objStr = JSON.stringify(obj8);
// console.log(JSON.parse(objStr));

//Q.5 Slice and Splice method

// const arr = [1, 2, 5, 4, 6, 8, 7];
// console.log(arr.splice(2, 1, 34, 65));
// console.log(arr);

//Q.6  Object and Map

// const obj9 = {
//   name: "Saurabh",
// };

// const map1 = new Map([["name", "Saurabh"]]);
// console.log(map1);

//Q.7 Arrow function

// const arrow = () => {
//   console.log("Arrow function", this, arguments);
// };
// arrow();

//Q.8 let, const and var

// let a;
// const b = 41;
// var c = 12;
// console.log(a, b, c);

//Q.9 Redeclare same variable in switch block

// let flag = 2;
// switch (flag) {
//   case 0: {
//     let name = "Saurabh";
//     console.log("Printing name", name);
//     break;
//   }
//   case 1: {
//     let name = "Ashu";
//     console.log("Printing name", name);
//     break;
//   }
//   default: {
//     console.log("dafault case");
//   }
// }

//Q.10 Temporal Deadzone

// let temp = 10;
// console.log(temp);

//Q.11 Memoization

function Memoization() {
  let cache = {};

  return function (eId, basePay, variable, hra) {
    if (cache[eId]) {
      return cache[eId];
    } else {
      let salary = basePay + variable + hra * basePay;
      cache[eId] = salary;
      return salary;
    }
  };
}

// const memo = Memoization();
// console.log(memo(1, 150000, 50000, 0.2));
// console.log(memo(2, 450000, 50000, 0.2));
// console.log(memo(1, 250000, 50000, 0.2));

//Q.12 Hoisting

// console.log(hoist1);
// var hoist1 = "practice";

//Q.13

// function Existing(name, salary) {
//   this.name = name;
//   this.salary = salary;
// }

// Existing.prototype.salary = 0;
// const e1 = new Existing("Saurabh", 10000000000);
// const e2 = new Existing("Ashu", 500000000);
// console.log(e1.salary, e2.salary);

class Person2 {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

// const p1 = new Person2("Saurabh", 1200000);
// const p2 = new Person2("Ankita", 500000);
// console.log(p1, p2);

class Employee extends Person2 {
  constructor(name, salary, company) {
    super();
    this.name = name;
    this.salary = salary;
    this.company = company;
  }
}

// const e1 = new Employee("Saurabh", 5000000, "Microsoft");
// console.log(e1);

//Q.14 Closure

function closure() {
  let a = 10;
  function inner() {
    let b = 20;
    console.log("a,b", a, b);
  }
  inner();
}
// closure();

// Q.15 What are promises ?

function PromiseObj() {
  return new Promise((resolve, reject) => {
    let flag = false;
    if (flag) {
      resolve(54);
    } else {
      reject(404);
    }
  });
}

// const pro1 = PromiseObj();
// pro1
//   .then((data) => {
//     console.log("Resolved", data);
//   })
//   .catch((error) => {
//     console.log("Rejected", error);
//   });

//Q.16 What is callbacks ??

function callback(name) {
  console.log("Hello ", name);
}

function outerFunction(cb) {
  let name = prompt("Please enter your name.");
  cb(name);
}
// outerFunction(callback);

//Q.17 Why needed callbacks ??
//Callbacks are needed because js is event driven language. JS keep executing other events while listing to other events.

function firstFunction() {
  setTimeout(() => {
    console.log("First Function");
  }, 1000);
}
function secondFunction() {
  console.log("Second function");
}
// firstFunction();
// secondFunction();

//Q.18 Promise chaining

function promiseObject2() {
  return new Promise((resolve, reject) => {
    resolve("Success");
  });
}

// promiseObject2()
//   .then((data) => {
//     console.log(data);
//   })
//   .then(() => {
//     console.log("Loginned successfully");
//   })
//   .then(() => {
//     console.log("Naviagted Home Screen");
//   })
//   .catch(() => {
//     console.log("Credentials failed");
//   });

function Promise2() {
  return new Promise((resolve, reject) => {
    resolve(1);
  });
}

function Promise3() {
  return new Promise((resolve, reject) => {
    resolve(2);
  });
}
function Promise4() {
  return new Promise((resolve, reject) => {
    resolve(3);
  });
}

function Promise5() {
  return new Promise((resolve, reject) => {
    reject(4);
    // resolve(4);
  });
}
//Q.19 Promise.all()

// Promise.all([Promise2(), Promise3(), Promise4(), Promise5()])
//   .then((promiseRes) => {
//     console.log(promiseRes);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

//Q.19 Promise.allSettled()
// Promise.allSettled([Promise2(), Promise3(), Promise4(), Promise5()])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Q.Promise.race()

function Promise6() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2 second later");
    }, 2000);
  });
}

function Promise7() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3 second later");
    }, 3000);
  });
}

function Promise8() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("5 second later");
    }, 5000);
  });
}

// Promise.race([Promise6(), Promise7(), Promise8()]).then((data) => {
//   console.log(data);
// });

// Q. delete operator

// const obj10 = {
//   name: "Saurabh",
//   salary: "8lpa",
// };

// delete obj10.salary;
// console.log(obj10);

//Q. typeOf operator

// console.log(typeof []);
// console.log(typeof function () {});

//Q. How do you check if a key exists in an object

const obj11 = {
  name: "Saurabh",
  salary: "8lpa",
};

function checkKey(key, obj) {
  if (obj[key]) {
    console.log("Key and value are ", key, obj[key]);
  } else {
    console.log("Key doesn't exist");
  }
}
// checkKey("name2", obj11);

// console.log("name" in obj11);

//Q.20 How do you loop through or enumerate javascript object

// for (let key in obj11) {
//   console.log(key);
//   console.log(obj11.hasOwnProperty(key));
// }

//Q.21 arguments object

function Arguments() {
  console.log(arguments); //arguments
}
// Arguments(1, 2, 3, 4, 5);
// console.log(Arguments.length); //Parameter length

//Q.22 How do you make first letter of the string in an uppercase

function FirstletterCap(str) {
  console.log();
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}
// console.log(FirstletterCap("saurabh"));

//Q.23  Current date in Javascript

// const d1 = new Date();
// const date = String(d1.getDate()).padStart(2, "0");
// const month = String(d1.getMonth() + 1).padStart(2, "0");
// const year = d1.getFullYear();

// console.log(date, month, year);

//Q.24 Compare date object
// const d2 = new Date();
// const d3 = new Date();
// console.log(d2.getTime() === d3.getTime());

//Q.25 Can you write a random integers function to print integers with in a range
function randomNumber(max, min) {
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}
// randomNumber(9, 2);

//Q.24 chaining on Conditional operator

// let e1 = true ? (true ? 3 : 2) : 1;
// console.log(e1);

//Q.25 Iterator

let iterable = [4, 5, 9, 87, 5];
const iterator = iterable[Symbol.iterator]();
// console.log(iterator.next());

//Q.26 Sort method
// var months = ["Aug", "Sep", "Jan", "June"];
// months.sort((a, b) => (a > b ? -1 : 0));
// console.log(months);

// let numbers = [1, 2, 5, 3, 4];
// numbers.sort((a, b) => b - a);
// console.log(numbers); // [5, 4, 3, 2, 1]
//----------------------------------------
// let numbers = [1, 2, 5, 3, 4];
// numbers.sort((a, b) => b - a);
// numbers.reverse();
// console.log(numbers); // [1, 2, 3, 4 ,5]

//Q.How do you find min and max value in an array

let arr = [5, 85, 74, 65, 2, 1, 0];

// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

function max(arr) {
  let max = -Infinity;
  for (let num of arr) {
    if (max < num) {
      max = num;
    }
  }
  return max;
}

// console.log(max(arr));

//Q. Second largest element

function secondLargest() {
  let max = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (max < num) {
      second = max;
      max = num;
    } else if (second < num) {
      second = num;
    }
  }
  return second;
}
// console.log(secondLargest());

//Q.  Define Peoperties in object

// const newObject = {};

// Object.defineProperties(newObject, {
//   newProperty1: {
//     value: "John",
//     writable: true,
//   },
//   newProperty2: {
//     nickName: "Saurabh",
//     writable: true,
//   },
// });

// console.log(newObject);

//Q. Shallow Copy and Deep Copy

const obj12 = {
  name: "Saurabh",
  address: {
    street: "Kusum Street",
    city: "Arrah",
  },
  details() {
    console.log(this.name, this.address);
  },
};

const obj13 = { ...obj12 }; //nested object cannot make deep cloned
// const obj13 = JSON.parse(JSON.stringify(obj12)); //methods can't be cloned
// const obj13 = structuredClone(obj12); // methods cann't be clonned

obj13.name = "Drashti";
obj13.address.city = "Vadodara";
// console.log(obj12);
// console.log(obj13);

//Q.  Thunk function

const add = (a, b) => a + b;

const thunk = () => add(4, 3);
// console.log(thunk());

//Q. Async thunk

const add2 = (fn) => fn();

const asynThunk = () => {
  return add2(function print() {
    console.log("Thunk function");
  });
};

// asynThunk();
//-----------------
function fetchData(fn) {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => fn(json));
}

const asyncThunk = function () {
  return fetchData(function getData(data) {
    console.log(data);
  });
};

// asyncThunk();

//Q. How do you flattening multi dimensional arrays

const biDimensionalArr = [11, [22, 33], [44, 55], [66, 77], 88, 99];
// console.log(biDimensionalArr.flat(1));
function flatten(sourceArr, finalArr = []) {
  for (let elem of sourceArr) {
    if (Array.isArray(elem)) {
      flatten(elem, finalArr);
    } else {
      finalArr.push(elem);
    }
  }
  return finalArr;
}

// console.log(flatten(biDimensionalArr));

//Q.Checking object is Promise or not ??

function isPromise(object) {
  if (Promise && Promise.resolve) {
    console.log(Promise.resolve(object) == object);
  } else {
    console.log("Passed object is not promise");
  }
}

// isPromise(
//   new Promise((res, rej) => {
//     res(2);
//   })
// );
// isPromise(5);

// Q. Debouncing

function test(a, b) {
  console.log("This is test function", a, b);
}

function debounce(fn, delay = 500) {
  let timer;

  return function (...args) {
    console.log("Ram Ram");
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// const deb = debounce(test);
// deb(5, 4);

// Q. Throttling

function throttling(fn, delay = 500) {
  let timer;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    }
  };
}
// const thrott = throttling(test);
// thrott(5, 9);
// thrott();

//=========================
//----- Revision from notebook---
// Second largest number from array.

function secondLargestNumber(arr) {
  let max1 = -Infinity;
  let max2 = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] < max1 && arr[i] > max2) {
      max2 = arr[i];
    }
  }
  return max2;
}

// console.log(secondLargestNumber([5, 4, 6, 7, 3, 9]));

//=====================================================
//Check String is Palindrome
// string reads from same end

function isPalindrome(str) {
  let length = str.length;
  let flag = true;
  for (let i = 0; i < parseInt(length / 2); i++) {
    if (str[i] !== str[length - 1 - i]) {
      flag = false;
      break;
    }
  }

  return flag;
}

// console.log(isPalindrome("SarasS"));

function isPalindromeMetho(str) {
  return str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
}

// console.log(isPalindromeMetho("asauu"));

//=========================================================
//Write a js function that takes array of numbers and returns a array that has only even number

function filterEven(arr) {
  return arr.filter((elem) => elem % 2 === 0);
}
// console.log(filterEven([5, 4, 0, 3, 1, 7, 9, 6]));

//=============================================================
//Factorial of given number
function factorial(num) {
  let fact = 1;

  if (num < 2) {
    return fact;
  }
  for (let k = 2; k <= num; k++) {
    fact = fact * k;
  }
  return fact;
}

// console.log(factorial(5));
// console.log(factorial(0));
// console.log(factorial(1));

//===============================================================
//Prime number of not

function isPrime(num) {
  let flag = true;
  let i = 2;
  let thresold = parseInt(Math.sqrt(num));
  while (i <= thresold) {
    if (num % i === 0) {
      flag = false;
      break;
    }
    i++;
  }
  return flag;
}
// console.log(isPrime(40));
// console.log(isPrime(13));

//==================================================================
//Largest element in nested array

function largestInNestedArray(arr, largest = -Infinity) {
  if (!Array.isArray(arr)) {
    return;
  }
  let max;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      max = largestInNestedArray(arr[i], largest);
    }
    if (arr[i] > largest) {
      largest = arr[i];
    }
    if (max > largest) {
      largest = max;
    }
  }
  return largest;
}

// console.log(largestInNestedArray([1, [5, 8, 7], [8, 2], [65, 85], 75]));

//============================================================================
//fibonacci

function fibonacci(num) {
  let first = 0;
  let second = 1;
  let third;
  console.log(first);
  console.log(second);
  for (let i = 0; i < num; i++) {
    third = first + second;
    first = second;
    second = third;
    console.log(third);
  }
}
// fibonacci(5);

//=============================================================================
function search() {
  console.log("Working");
}

function debounceFunction(cb, delay = 300) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
const betterFunc = debounceFunction(search);
// betterFunc();

//=============================================================================
//sort the array of object based on key value
let keyArr = [{ key: 5 }, { key: 75 }, { key: 64 }, { key: 2 }];

function sortArrayOfKeys(arr) {
  let result = arr.sort((a, b) => a.key - b.key);
  return result;
}

// console.log(sortArrayOfKeys(keyArr));

//============================================================================
// implement a function that takes two sorted arrays amd merges them into single sorted array without using any inbuilt methods

let sortedArr1 = [2, 4, 6, 7];
let sortedArr2 = [1, 3, 5, 9];

function sortedMergeArray(arr1, arr2) {
  let resultArr = [];
  let ind = 0;
  let index1 = 0;
  let index2 = 0;
  while (index1 < arr1.length && index2 < arr.length) {
    if (arr1[index1] <= arr2[index2]) {
      resultArr[ind++] = arr1[index1++];
    } else {
      resultArr[ind++] = arr2[index2++];
    }
  }

  while (index1 < arr1.length) {
    resultArr[ind++] = arr1[index1++];
  }
  while (index2 < arr2.length) {
    resultArr[ind++] = arr2[index2++];
  }

  return resultArr;
}

// console.log(sortedMergeArray(sortedArr1, sortedArr2));

//=================================================================
//Toggle Arguments

function toggle(...args) {
  let index = 0;

  return function () {
    if (args.length) {
      console.log(args[index++]);
    }
    if (index >= args.length) {
      index = 0;
    }
  };
}

// const togleArgs = toggle("a", "b", "c", "d");
// togleArgs();
// togleArgs();
// togleArgs();
// togleArgs();
// togleArgs();
// togleArgs();

//=================================================================
//Sampler function - that will call a cb after certain interval of function call.

function message(num) {
  console.log("Called ", num);
}
function Sampler(cb, count = 2) {
  let countNumber = 1;
  return (...args) => {
    if (countNumber < count) {
      countNumber++;
      return;
    }
    cb(...args);
    countNumber = 1;
  };
}

// const sampler = Sampler(message, 4);
// sampler(45);
// sampler(455);
// sampler(456);
// sampler(458);
// sampler(459);

//====================================================================
//Polyfill for map

Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    let entri = cb(this[i], i, this);
    result.push(entri);
  }
  return result;
};

// console.log(
//   [4, 5].myMap((item, index) => {
//     console.log(item, index);
//     return item + 5;
//   })
// );

//================================================================
//Polyfill for filter

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    let entri = cb(this[i], i, this);
    // console.log(entri);
    if (entri) {
      result.push(this[i]);
    }
  }
  return result;
};

// console.log(
//   [1, 5, 2].myFilter((item, index, arr) => {
//     console.log(item);
//     return item > 3;
//   })
// );

//==================================================
//Polyfill for reduce method

Array.prototype.myReduce = function (cb, acc) {
  let accumulator = acc;
  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      accumulator = cb(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }

  return accumulator;
};

// const res = [4, 5].myReduce((acc, item) => {
//   console.log(acc, item);
//   return acc + item;
// }, 0);
// console.log(res);

//========================================================
//Polyfill for Call method

Function.prototype.myCall = function (cnxt, ...args) {
  if (typeof this !== "function") {
    throw Error("Call method must called over functions");
  }
  let context = cnxt || {};
  context.cb = this;
  context.cb(...args);
};

function callFunction(...a) {
  console.log("called", a);
}

// callFunction.myCall(null, 4, 5);

//============================================================
//Polyfills for bind method

Function.prototype.myBind = function (cnxt, ...args) {
  if (typeof this !== "function") {
    throw Error("Bind method must be called over functions");
  }
  let context = cnxt || {};
  context.cb = this;
  function callback() {
    return context.cb(...args);
  }
  return callback;
};

// const mybb = callFunction.myBind(null, 45);
// mybb();

///==============================================================
//Polyfill for Apply method

Function.prototype.myApply = function (cntx, args) {
  if (typeof this !== "function") {
    throw Error("Apply method must be called over function");
  }
  let context = cntx || {};
  context.cb = this;
  context.cb(...args);
};

// callFunction.myApply(null, [45, 6, 8]);

//======================================================================
//Polyfill for once

function onceCallback() {
  console.log("Once called");
}
function once(cb) {
  let flag = true;
  return function () {
    if (flag) {
      cb();
      flag = false;
    }
    return;
  };
}

// const ocb = once(onceCallback);
// ocb();
// ocb();
// ocb();
// ocb();
// ocb();
// ocb();

//===================================================================
