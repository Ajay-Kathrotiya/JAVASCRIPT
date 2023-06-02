'use strict';

// ARRAY METHODS :::

const a = [1, 2, 3, 4, 5];
console.log(a.slice(1, 4));

// for of  loop :

const ar = [1, 2, 3, 4, 5, 6];
for (const [index,value] of ar.entries()) {
  console.log(`the element at ${index} position is ${value}`);
}

// for each method of arry ::

// In callback fun first arg is value, second arg is index and third is arr obj.
// we can not use break and continue in for each loop : 
ar.forEach(function (value, index, array) {
  console.log(`The element is ${value} at index ${index} `);
});

// FOR EACH IN MAPS ::

const map1 = new Map([['name','ajay'],['gender','male'],['hobby','music']]);

map1.forEach(function(value,key,map){console.log(`${key} : ${value}`)});

// FOR EACH IN SET ::

const set1 = new Set(['ajay','rakul','mariadb','mongodb','ajay','rakul']);

// in set for each also three arg value , indexx , set but here value and index is same :)(: 

set1.forEach(function(value,index,set){
    console.log(`${value} : ${index}`);
});





