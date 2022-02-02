const _ = require('lodash');

/*--------Implementation of Concat--------*/ 
function myConcat(...arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length) {
        newArr.push(...arr[i]);
        } else {
        newArr.push(arr[i]);
        }
    }
    return newArr;
}

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = ['a','b','c'];

let concatedArray = arr1.concat(arr2,arr3);
let myConcatedArray = myConcat(arr1,arr2,arr3);

console.log("my concat check: ", _.isEqual(concatedArray, myConcatedArray));


/*---------Implementation of Fill---------*/ 
function myFill(arr, value, start = 0, end = arr.length) {
    if (end > arr.length) {
        end = arr.length
    }
    if (start < 0) {
      start = arr.length + start;
      if (start < 0) {
          start = 0;
      }
    }
    if (end < 0) {
      end = arr.length + end;
    }
    for (let i = start; i < end; i++) {
      arr[i] = value;
    }
    return arr
}

console.log(myFill([1, 2, 3], 4));  // [4, 4, 4]
console.log(myFill([1, 2, 3], 4, 1)); // [1, 4, 4]
console.log(myFill([1, 2, 3], 4, 1, 2)); // [1, 4, 3]
console.log(myFill([1, 2, 3], 4, 1, 1)); // [1, 2, 3]
console.log(myFill([1, 2, 3], 4, 3, 3)); // [1, 2, 3]         
console.log(myFill([1, 2, 3], 4, -3, -2)); // [4, 2, 3]
console.log(myFill([1, 2, 3], 4,  NaN, NaN)); // [1, 2, 3]
console.log(myFill([1, 2, 3], 4, 3, 5)); // [1, 2, 3]
console.log(myFill(Array(3), 4)); // [4, 4, 4]
console.log(myFill.call([], {length: 3}, 4)); // {0: 4, 1: 4, 2: 4, length: 3}


/*---------Implementation of Find---------*/ 
function myFind(obj, func) {
    for(let i = 0; i < obj.length; i+=1){
        if(func(obj[i], i, obj) === true){
            return obj[i];
        }
    }
}

const fruits = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

console.log(myFind(fruits, fruit => {
  return fruit.name === 'cherries';
}));

/*----------Implementation of FindIndex----------*/ 
function myFindIndex(obj, func) {
  for(let i = 0; i < obj.length; i+=1){
      if(func(obj[i], i, obj) === true){
          return i;
      }
  }
  return -1;
}

const fruitsList = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = myFindIndex(fruitsList, (fruit => fruit === "blueberries"));

console.log('fruit index: ', index); // 3
console.log('fruit: ', fruitsList[index]); // blueberries


/*---------Implementation of Flat---------*/ 
function myFlat(arr, depth=1){
    if(depth > 0) {
        return arr.reduce((acc, val) => {
            if(Array.isArray(val)){
            return acc.concat(myFlat(val, depth - 1))
        } else {
            return acc.concat(val)
        }
        },[])
    } else {
        return arr.slice();
    }
}

const flatCheck1 = [1, 2, [3, 4]];
console.log('Flat Check: ', myFlat(flatCheck1));

const flatCheck2 = [1, 2, [3, 4, [5, 6]]];
console.log('Flat Check: ', myFlat(flatCheck2));

const flatCheck3 = [1, 2, [3, 4, [5, 6]]];
console.log('Flat Check: ', myFlat(flatCheck3, 2));

const flatCheck4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log('Flat Check: ', myFlat(flatCheck4, Infinity));

const flatCheck5 = [1, 2, , 4, 5];
console.log('Flat Check: ', myFlat(flatCheck5));


/*---------Implementation of Map---------*/ 
function myMap(arr, func){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      newArr.push((func(arr[i], i, arr)));
    }
    return newArr;
}

let mapCheck1 = myMap([1, 4, 9, 16], (x) => x * 2);
console.log('Map Check', mapCheck1);

let mapCheck2 = [{key: 1, value: 10},
                 {key: 2, value: 20},
                 {key: 3, value: 30}];

let mapCheck2Update = myMap(mapCheck2, (obj => {
  let rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
}));

console.log('Map check array before update: ', mapCheck2);
console.log('Map check array after update: ', mapCheck2Update);

/*--------Implementation of Reduce-------*/ 
function myReduce(array, reducer, initialValue) {
    if(!array.length && !initialValue){
        return new TypeError('reduce of empty array with no initial value')
    }
    if(!initialValue && initialValue != 0){
        initialValue = array[0];
        for (let i = 1; i < array.length; i += 1) {
            initialValue = reducer(initialValue, array[i], i, array);
        }
    } else {
        for (let i = 0; i < array.length; i += 1) {
            initialValue = reducer(initialValue, array[i], i, array);
        }
    }
    return initialValue
}

console.log('Reduce ckeck: ', myReduce([1, 2, 3, 4], (prev, curr) => prev + curr)); //10
console.log('Reduce ckeck: ', myReduce([1, 2, 3, 4], (prev, curr) => prev + curr, 5)); //15

/*---Given an array. Determine whether it 
consists only of unique items or not ---*/ 
function uniqueItems(arr){
  let filteredArr = arr.reduce((prev, curr) => {
    if(prev.indexOf(curr) === -1){
      const item = curr;
      prev.push(item)
    }
    return prev
  }, []);

  if(arr.length === filteredArr.length){
   return "unique items"
  } else {
    return "not unique items"
  }
}

let myArray = ['a','b','c'];
console.log(uniqueItems(myArray)); //unique items

/*Determine if a word or phrase is an isogram. An isogram 
 (also known as a "non pattern word") is a word or phrase
 without a repeating letter.*/
function isIsogram(word){
  let filteredWord = word.split("").reduce((prev, curr) => {
    if(prev.indexOf(curr) === -1){
      const item = curr;
      prev.push(item)
    }
    return prev
  }, []).join("");

  if(word === filteredWord){
   return "isogram"
  } else {
    return "not isogram"
  }
}

let word = "apple";

console.log(isIsogram(word)) //not isogram

/*------------Lodash Functions-------------*/

/*-----Implementation of Intersection-----*/
function myIntersection(...arrays) {
    let result = [];
    let count = 0;
    arrays[0].forEach(val => {
        arrays.forEach(el => {
            if(el.indexOf(val) != -1){
                count++;
            }
            if(count === arrays.length){
                result.push(val);
            }
        });
        count = 0;
    });
    return result
}
console.log("Intersection check: ", _.isEqual(_.intersection([2, 1, 3, 6], [2, 3, [6]]), myIntersection([2, 1, 3, 6], [2, 3, [6]]))); //true

/*-----Implementation of Pull-----*/
function myPull(array, ...values) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < values.length; j++) {
      if (array[i] === values[j]) {
         array.splice(i, 1);
         i--;
      }
    }
  }
}

let arrayOfLetters1 = ['a', 'b', 'c', 'a', 'b', 'c', 'd', 'b', 'e', 'a', 'b', 'f'];
let arrayOfLetters2 = ['a', 'b', 'c', 'a', 'b', 'c', 'd', 'b', 'e', 'a', 'b', 'f'];

_.pull(arrayOfLetters1, 'a')
myPull(arrayOfLetters2, 'a')

console.log("Pull check: ", _.isEqual(arrayOfLetters1, arrayOfLetters2)); //true


/*-----Implementation of Tail-----*/
function myTail(arr) {
    let result = [];
    for (let i = 1; i < arr.length; i++) {
      result.push(arr[i]);
    }
    return result;
}

console.log("Tail check: ", _.isEqual(myTail(['1,2,3', 'a', 15]), _.tail(['1,2,3', 'a', 15]))) //true

/*-----Implementation of Take-----*/
function myTake(arr, n=1) {
    let result = [];
      if(n > arr.length){
        n = arr.length
    }
    for (let i = 0; i < n; i++) {
      result.push(arr[i]);
    }
    return result;
}

console.log(myTake([1,2,3])) // => [1]
console.log(myTake([1,2,3], 2)) // => [1, 2]
console.log(myTake([1,2,3], 5)) // => [1, 2, 3]
console.log(myTake([1,2,3], -2)) // => []