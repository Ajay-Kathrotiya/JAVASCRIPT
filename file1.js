

// to print the messages on console ::console.log("Hello i am ajay kathrotiya , here for you !! 

//  VARIABLES IN JS :: 

var var_name = 'AJAY KATHROTIYA';
console.log(var_name);
var_name = "ayushi";
console.log(var_name);


// let KEYWORD FOR VARIABLE DECLARATION ::

let firstName = 'AK patel';
console.log(firstName);

// DIFFERENCE BETWEEN let , const and var :::::


/* 1) let = when we want to change or edit the variable value at any other part of code                   then we use let keyword for variable devlaration also for undifined           variable          declaratio.  --> let is block scope
      
   2) const = we use const keyword for variabl declaration when value of the varibale               does not suppose to change at any future code, and we can not change that                later.

   3) var = same way like let, we can use var for variable declar, and change the value later.            --> var is function scope.    
*/

// TAKE INPUT FROM USERS ::

// let userInput = prompt("ENTER YOUR FAVOURITE NUMBER DUDE ");
// console.log(userInput);


// DECALRE CONSTANTS ::

const pi = 3.14; console.log(pi);

// STRING INDEXING ::: 

let var_name2 = "AJAY KATHROTIYA      ";
console.log(var_name2[8]);
console.log(var_name2.length);

// STRINGS METHODS ::

let str = '    AK PATEL IS HERE FOR YOU !!   ';
console.log(str.length);
console.log(str.trim());
let str2 = str.trim();
console.log(str2.length);
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());
console.log(str2.slice(0, 9));

// typeof OPERATOR :: 

let age = 22; let name = "AJAY"; console.log(typeof age); console.log(typeof name);

// convert number to string ::

age = age + ""; console.log(typeof (age));

// convert string to number ::

let my_str = "181818";
console.log(typeof my_str);
my_str = +"181818";
console.log(typeof my_str);
let age1 = 18;
age1 = String(age1);
console.log(typeof age1);
age1 = Number(age1);
console.log(typeof age1);

// STRING CONCATENATION :::

let str3 = 'ajay';
let str4 = ' kathrotiya';
let fullName = str3 + "   " + "]hi" + str4;
console.log(fullName);
str3 = "18";
str4 = '18';
console.log(+str3 + +str4);

// TEMPLETE STRING :: 

let name1 = 'ajay';
let aboutMe = `My name is ${name1} and my age is ${age}`;
console.log(aboutMe);

// UNDEFINED :::

let myName;
console.log(typeof myName);

// NULL ::

let null1 = null;
console.log(typeof null1, null1);

// BigInt ::

console.log(Number.MAX_SAFE_INTEGER);
let BigInt1 = BigInt(123456789098765433234);
let BigInt2 = 128n;
console.log(typeof BigInt1);
console.log(typeof BigInt2);


/* DIFFERENCE BETWEEN == AND === :::

   --> === and == both are comparision operaton.    
   --> === is strictly copmare, without typr coercion . means both data type should same.   
   --> == dose type coercion.

*> type coercion means automatcly change the data type :::
*/
// IF ELSE CONDITION ::

let num1 = 23;
if (num1 > 18) { console.log("YOU ARE WIN :: "); }
else { console.log("YOU ARE LOSS :: "); }

// TERNARY OPEARATOR / CONDITIONAL OPERATOR ::

let var5 = 3;
let drink = var5 > 18 ? "MILK_SHAKE" : "CHAI";
console.log(drink);

// AND OR OPERATORS ::// AND = &&// OR = ||
// IF IFELSE, NESTED IF ELSE, SWITCH STATEMENTS, WHILE LOOP, FOR LOOP ALL ARE SAME AS JAVA  ::// Break and Continue KEYWORD is same as JAVA  ::

// Arrays :::

let fruits = ["mango", 'apples', 'graps', 1, 2, 3, "ak_patel", null, undefined];
console.log(fruits);
console.log(typeof fruits);
console.log(Array.isArray(fruits));

// ARRAY PUSH POP AND ARRAY SHIFT UNSHIFT ::

fruits.push("banana");
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);

// unshift 

fruits.unshift("banana");
console.log(fruits);

// shift

fruits.shift();
console.log(fruits);

// USE CONST FOR CREATING ARRAY ::

const fruits1 = ['apple', 'banana'];
fruits1.push('mango');
console.log(fruits1);


// for of loop ::

const arry1 = [1, 2, 3, 4, 5, 6];
for (let x of arry1) { console.log(x); }

// for in loop :

for (let index in arry1) { console.log(arry1[index]); }

// Array destructuring ::

const myArry = [1, 2, 3, 4, 5, 6, 7, 8];
let [var1, var2, var3, ...myNewArray] = myArry; console.log(var1, var2, var3);
console.log(myNewArray);

// OBJECTS ::

const obj1 = { name: "ajay", age: 22, hobbies: ['cricket', 'listening music', 'coding'] }; console.log(obj1);
console.log(obj1.name);
console.log(obj1.age);
console.log(obj1.hobbies);
obj1.gender = 'male';
console.log(obj1);
console.log(obj1['name']);
console.log(obj1['age']);

// Difference between dot and bracket notation ::

const obj2 = { name12: 'ak_patel', "person age": 22, gender: 'MALE' };
console.log(obj2.gender);
console.log(obj2["person age"]);
const key = 'email';
obj2[key] = 'ajaykathrotiya18@gmail.com';
console.log(obj2);

// How to iterate objects ::
// for in loop ::

for (let key in obj2) {
    console.log(obj2[key]);
    console.log(`${key}:${obj2[key]}`);
    console.log(key, " : ", obj2[key]);
}

// Objects.keys Method ::

console.log(Object.keys(obj2));
let a1 = Object.keys(obj2);
for (let key of a1) { console.log(obj2[key]); }

// COMPUTED PROPORITES ::

const key1 = 1;
const key2 = 2;
const my1 = 'ajay';
const my2 = 'rash';
obj31 = { [key1]: my1, [key2]: my2 };
console.log(obj31);

// SPREAD operator in objects ::

obj31 = { key1: "1", key2: '2' };
obj4 = { key1: "AJAY", key3: '3', key4: '4' };
console.log(obj_spreded = { ...obj31, ...obj4 });

// Objects destructuring ::

const obj5 = { fruitName: 'mango', gfName: 'rash' };
const { fruitName, gfName } = obj5; console.log(fruitName);

// Objects inside Array ::

const userArray = [{ userId: 1, userName: 'ajay kathrotiya', gender: 'male' }, { userId: 2, userName: 'Rohit sharma', gender: 'male' }, { userId: 3, userName: 'Rashmika Mandhana ', gender: 'female' },]
for (let x of userArray) { console.log(x); }

// nested destructuring ::

const [user1, user2, user3] = userArray;
console.log(user1);
console.log(user2);
console.log(user3);
const [{ userName }, , { userId: userIdChnagedName }] = userArray;
console.log(userName);
console.log(userIdChnagedName);

// FUNCTIONS ::

function ak_fun() { console.log("hi ! all there "); }
ak_fun();
ak_fun();
function Addition(num1, num2) { return num1 + num2; }
console.log(Addition(18, 18));
function fun1(array, target) { for (let x in array) { if (array[x] === target) { return x; } } return -1; }
console.log(fun1([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));

// Function expression ::

const fun2 = function () { console.log("Hello ! frds ") };
fun2();

// Arrow function ::

const arrowFun = (num1, num2) => { console.log(num1 + num2) };
arrowFun(2, 3);
const isEven = (number) => { return number % 2 === 0 };
console.log(isEven(6));

// Hoisting ::

hello();
function hello() { console.log("Hello world ! "); }
hello();

// function inside function ::

const app = () => {
    console.log("inside App ! ");
    const myfun = () => { console.log("hello from myfun ! "); }
    myfun();
    const addtwo = (num1, num2) => { return num1 + num2; }
    const mul = (num1, num2) => { return num1 * num2; }
    console.log(addtwo(18, 18)); console.log(mul(2, 3));
}
app();

// Lexical SCOPE ::

const myvar2 = "!@#";
function fun3() { const myVar = "123"; const fun4 = () => { }; const fun5 = function () { const myVar = "456"; console.log(myVar); }; function fun6() { console.log(myVar) } console.log(myVar); console.log(myvar2); fun5(); fun6(); }

fun3();

// Block Scope vs Function Scope 

// let and const are block scope 
// var is function scope {    let firstName2 = 'AJAY';    console.log(firstName2);}// console.log(firstName2);{    const firstName2 = 'ak';    console.log(firstName2);}


{ var firstName2 = 'ak_patel'; }
console.log(firstName2);

// default parameters ::

function add2(num1, num2 = 0) { return num1 + num2; } console.log(add2(18, 18)); console.log(add2(18));

// Rest parameters ::

function myfun1(a, b, ...c) { console.log(`a is ${a}`); console.log(`b is ${b}`); console.log(`c is ${c}`); }
myfun1(2, 3, 5, 6, 7, 8, 9);

// parameter destructuring ::

const obj3 = { name: "ajay", age: 23, gender: 'male' };
function obj({ name, age, gender, cast }) { console.log(name); console.log(age); console.log(gender); console.log(cast); }
obj(obj3);

// call back function ::

function fun18() { console.log("inside my fun 18 !!!"); }
function fun19(callback) { console.log(callback); console.log("hello there ! "); callback(); }
fun19(fun18);

// function returning function ::

function fun90() {
    function hello() { console.log("INSIDE HELLO WORLD :: "); } return hello;
}
const ak = fun90(); console.log(ak); ak();

// important methods ::
// foreach ::

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]; function aryfun(num, index) {
    console.log("index is ", index); console.log(`${num} * 2 = `, num * 2);
}

// for(let index in numbers){// aryfun(numbers[index],index);} 
// numbers.forEach(aryfun);

const ary = [1, 2, 3, 4]; ary.forEach(function (num) { console.log(`${num} * 2 = `, num * 2); })

// map method ::

const numbers1 = [1, 2, 3, 4, 5]; const square = function (num) { return num * num; }
const map1 = numbers1.map(square); console.log(map1);
const map2 = numbers1.map(function (num) { return num + 10; }); console.log(map2);

// filter method ::

const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; const isEven1 = function (num) { }    //  for filter always return boolean     return num % 2 == 0;}

const evenNum = number2.filter(isEven1);
console.log(evenNum);

// reduce method ::

const number3 = [1, 2, 3, 4, 5];
// AIM : sum of all the numbers in array ::const sumAll = number3.reduce((accumulator, currentValue) => {    return accumulator + currentValue;}, 0);  // initial value of accumulator = 0 passed , console.log(sumAll);

const flipCart = [{ productID: 1, productName: 'mobile', price: 49999 }, { productID: 2, productName: 'TV', price: 12999 }, { productID: 3, productName: 'Washing Machine', price: 20000 }];
const priceSum = flipCart.reduce((totalPrice, currentProduct) => { return currentProduct.price + totalPrice; }, 0);
console.log(priceSum);

// sort method ::

const number4 = [12, 345, 6789, 234, 1, 8, 321];
number4.sort();
// this sort as STRING :: console.log(number4);

const userName1 = ['ajay', 'kala', 'makd', 'megha', 'sonali', 'aayushi', 'atik', 'oman', 'gibbern', 'jesling'];
userName1.sort();
console.log(userName1);
const number5 = [1, 34, 56, 8, 342, 76, 200, 1000, 90];
number5.sort((a, b) => a - b);

// for reverse sort return b-a;console.log(number5);
// find method ::

const myStr = ['ajay', 'patel', 'kala', 'dog', 'makodo', 'shatru', 'pushpa'];
const isLength = function (str1) {
    return str1.length === 4;
}
// return only first occurance ::}

const find1 = myStr.find(isLength);
console.log(find1);

// every method :;

const number6 = [2, 4, 6, 8, 10];
console.log(number6.every(num => num % 2 === 0));

// if all condition is true for entire array then true otherwise its return false ::
// some method ::

const number7 = [1, 2, 3, 5, 7, 9];

// kya ak bhi num aisa hai jo even hai , to true return karegaconsole.log(number7.some(num => num % 2 === 0));
// fill method ::// value, start , end 

const newArray = new Array(10).fill(18);
console.log(newArray);
const number8 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(number8.fill(18, 2, 5));

// splice method :;// start, delete, insert 

const myArray0 = ['ak', 'patel', 'nago', 'kalo'];
// delete = nagomyArray0.splice(2, 1);console.log(myArray0);
// insert = makodomyArray0.splice(myArray0.length, 0, 'MAKODO');console.log(myArray0);
// iterables : // jispe hum for of loop laga ske vo like array and strings ::// object is not iterable ::const str41 = 'ak_patel';for (let char of str41) {    console.log(char);}
// array like object // jiske pass length proporty hoti hai vo array like object hai ,    index hoti hai vo// ex : STRING 
// Sets => it is also iterable ;; but dont have index-based access , no duplicate allowed- ::const number9 = new Set([1, 2, 3, 3]);number9.add(10);console.log(number9);console.log(number9[2]);if (number9.has(10)) {    console.log('10 is there  ! ');}
// Maps :: map is am iterable , stored data in ordered fashion , store key value pair like object ::// duplicate keys are not allowed like objects :// object can only have string or symbol as key ::// but in  maps can use anything as key like array,number,string ::


const person1 = new Map();
person1.set('firstName', 'ak_patel');
person1.set('age', 22);
person1.set('gender', 'male');
console.log(person1);
console.log(person1.get('firstName'));
console.log(person1.get('age'));
console.log(person1.keys());

// clone using Object.assign ::

const obj18 = { age: 22, my: 'kalo' };

// const obj19=obj18;
const obj19 = Object.assign({}, obj18);
obj18.dago = 'makodo';
console.log(obj18);
console.log(obj19);

// Optional chaining ::

const userADD = {
    firstName: 'ak_patel', address: { houseNo: 401 }
}
console.log(userADD?.firstName); console.log(userADD?.address?.houseNo);
// methods ::// function inside object ::
const obj20 = { fisrtName: 'AJAY_KATHROTIYA', age: 22, about: function () { console.log(`Person name is ${this.fisrtName} and age is ${this.age}`); } }
obj20.about();
// call , in call give object as parameter 
const user4 = { fisrtName: 'ak_patel', age: 22, about13: function (hobby, singer) { console.log(this.fisrtName, this.age, hobby, singer); } }
const user5 = { fisrtName: 'AJAY', age: 18 }
user4.about13(); user4.about13.call(user5, 'cricket', 'rahat');
// apply ::
user4.about13.apply(user4, ['cricket', 'ajay']);
// bind :: return a function ::
const bind1 = user4.about13.bind(user4, 'cricket', 'ak_patel18'); bind1();

// prototype ::

function myUserd(firstName, age) {
    const user47 = Object.create(myUserd.prototype); user47.firstName = this.firstName; user47.age = this.age; return user47;
}

myUserd.prototype.about333 = function () { return `the first name is ${this.firstName} and age is ${this.age}`; }; myUserd.prototype.is18 = function () { return this.age >= 18; }
const user12 = myUserd('ajay', 100); const user13 = myUserd('rash', 101); console.log(user12); console.log(user12.about333()); console.log(user13.is18());

// new keyword ::

function CreateUser(name23, age1) { this.firstName = name23; this.age = age1; }
CreateUser.prototype.about = function () { console.log(this.firstName, this.age); }
const new_user2 = new CreateUser('AJAY', 22); const new_user = new CreateUser('ak_patel', 22); new_user.about(); new_user2.about();

// class keyword ::  class are fake ::

class Create_user {
    constructor(firstName, age, email, address) { this.firstName111 = firstName; this.age111 = age; this.email11 = email; this.address111 = address; console.log("constructor is called "); }
    about18() { console.log(this.firstName111, this.age111, this.email11); }
}
const new_user3 = new Create_user("ak_patel1818", 22, 'ajaykathrotiya18@gmail.com', 401); new_user3.about18();

