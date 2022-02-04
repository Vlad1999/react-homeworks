const _ = require('lodash');

//---------------------------------------------------//

function isOdd(num) {
  if (num === ""){
    return true
  }
  if (num.toString()[0] % 2 === 0) {
    return false
  } 
  return isOdd(num.toString().slice(1))
}

console.log(isOdd(4211133)); //false
console.log(isOdd(7791)); //true
console.log(isOdd(1567113)); //false
console.log(isOdd(5)); //true

//---------------------------------------------------//

function minPositive(arr, i=0, result=arr[i]) {
    if(i === arr.length) {
        if(result < 0) {
            return -1
        }
        return result
    }
    
    if(arr[i+1] >= 0 && arr[i+1] < result){
        result = arr[i+1];
    }

    i += 1;
    return minPositive(arr, i, result)
}

console.log(minPositive([56, -9, 87, -23, 0, -105, 55, 1])); // 0
console.log(minPositive([45, -9, 15, 5, -78])); // 5
console.log(minPositive([-5, -9, -111, -1000, -7])); // -1

//---------------------------------------------------//

function isOrderingViolented(arr, i=0) {
    if (i === arr.length) {
        return -1
    }
    
    if(arr[i] > arr[i+1]) {
        return i+1
    } 
    
    i += 1;
    
    return isOrderingViolented(arr, i)
}

console.log(isOrderingViolented([2,12,15,48,64])); // -1
console.log(isOrderingViolented([-9,-4,-4,3,12,4,5])); // 5

//---------------------------------------------------//

function myShift(arr, i=0, result=[]){
    if(i === arr.length-1 || arr.length === 0) {
        return result
    }
    
    result[i] = arr[i+1];
    i += 1;
    return myShift(arr, i, result)
}

console.log(myShift([6,78,'n',0,1])); // [78,'n',0,1]
console.log(myShift([5])); // []
console.log(myShift([])); // []

//---------------------------------------------------//

function deepConcat(arr, result=[], i=0) {
    if(i === arr.length){
        return result
    }
    if(!Array.isArray(arr[i])){
        result.push(arr[i]);
    }
    if (Array.isArray(arr[i])){
        deepConcat(arr[i], result);
    }   
    
    i += 1;
    return deepConcat(arr, result, i)
}

console.log(deepConcat([1, [3, 4, [1, 2]], 10])); //[1, 3, 4, 1, 2, 10]
console.log(deepConcat([14, [1, [[[3,[]]]], 1], 0])); //[14, 1, 3, 1, 0]

//---------------------------------------------------//

function roate(arr, n){
    if(n === arr.length){
        return 
    }

    arr.unshift(arr[arr.length-1])
    arr.pop()
    n++;

    roate(arr, n)
} 
let arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

roate(arr1, 3);
console.log(arr1);

roate(arr2, -2);
console.log(arr2);

//---------------------------------------------------//

function sumOfDigits(num) {
    if(num.toString().length === 1){
        return num
    }

    num = num.toString().split('').reduce((acc, val) => acc + +val, 0);

    return sumOfDigits(num)
}
console.log(sumOfDigits(14)); //5
console.log(sumOfDigits(29)); //2
console.log(sumOfDigits(999999999999)); //9

//---------------------------------------------------//

function deepClone(obj){
    let clone, key, val;

    if(typeof obj !== "object"){
        return obj
    }  

    if(Array.isArray(obj)){
        clone = [];
    } else {
        clone = {};
    }

    for(key in obj){
        val = obj[key];

        clone[key] = deepClone(val);
    }

    return clone
}

let obj = {
    firstName: "John",
    lastName: "Sargsyan",
    dateOfBirth: {
        day: 01,
        month: 01,
        dateOfBirth: {
            day: 01,
            month: 01,
            dateOfBirth: {
                day: 01,
                month: 01,
                year: 1900
            },
        },
    },
    array: [
        {
            day: 01,
            month: 01,
            dateOfBirth: {
                day: [1, 2, 3, true, 'hey', [1, 2, 3, {
                    day: 01,
                    month: 01,
                    year: {
                        day: 01,
                        month: [1, 2, 3, true, 'hey'],
                        year: 1900
                    }
                }, 'hey']],
                month: 01,
                year: 1900
        },  
    }, undefined, 'Mick', 'Anna']
}

let newObj = deepClone(obj);

console.log(_.isEqual(obj, newObj)); //true
console.log(JSON.stringify(obj) === JSON.stringify(newObj)); //true

//---------------------------------------------------//

function myDebounce(func, t) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, t)
    }
}

function myThrottle(func, t){
    let callFunc = true;
    return function(...args) {
      if (callFunc) {
        func.apply(this, args);
        callFunc = false;
        setTimeout(() => {
            callFunc = true;
        }, t)
      } 
    }
}