'use strict';

// Function more deep ::

const book = [];

const booking = function (flightName, noOfPassanges = 1, price = 20000) {
  const booked = {
    flightName,
    noOfPassanges,
    price,
  };
  console.log(booked);
  book.push(booked);
};

booking('Air India 123C5', 38, 45000);
booking('Bcdf09');

// How reference vs primitve work in fun :

const flight = 'BC239F';
const ajay = {
  name: 'Ajay Kathrotiya',
  passport: 983428965390,
};

const checkIn = function (flightNo, passanger) {
  flightNo = 'LMDF80';
  passanger.name = 'Mr ' + passanger.name;

  // if (passanger.passport ===983428965390 ){
  //     alert('Checked In');
  // }
  // else{
  //     alert('Wrong Passport');
  // }
};

checkIn(flight, ajay);
console.log(flight);
console.log(ajay);

// Function accespting other function == callback fun :::

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const firstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

const trasformer = function (str, fn) {
  console.log(`Original String is : ${str}`);
  console.log(`Trasnformed String is : ${fn(str)}`);
};

trasformer('JavaScript is the best lang in the world', firstWord);
trasformer('JavaScript is the best lang in the world', oneWord);

// Function returing function ::

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet('Hey ! ');
greeter('Ajay');
greeter('Rakul');

// call and apply method ::

const flightBooking = {
  airlineName: 'airIndia',
  planeCode: 'BD98CH',
  booking: [],
  book(flightNo, name) {
    console.log(
      `${name} booked a flight on ${this.airlineName} and flight is ${this.planeCode}${flightNo}`
    );
    this.booking.push({ flight: `${flightNo}`, planeCode: `${this.planeCode}${flightNo}`, name : `${name}` });
  },
};

flightBooking.book(1818, 'Ajay Kathrotiya');
flightBooking.book(1819, 'Rakul Prit');
console.log(flightBooking.booking);

const adaniAirLine = {
    airlineName : 'Adani',
    planeCode : 'AD',
    booking : []
}

const book1 = flightBooking.book;

// Does not worked 
// book1.(11,'Ajay');

// How the call method work :
book1.call(adaniAirLine,12,'Priti');
book1.call(flightBooking,34,'Ak');

console.log(flightBooking.booking);
console.log(adaniAirLine.booking)

const swissAirLine = {
    airlineName : 'Swiss Air Line',
    planeCode : 'SW',
    booking : []
}

book1.call(swissAirLine,45,'Mayank Marakade');
console.log(swissAirLine.booking);

// APPLY METHOD ::: 

const flightData = [138,'Rohit Sharma'];
book1.apply(adaniAirLine,flightData);
console.log(adaniAirLine);

// or 

book1.call(swissAirLine,...[23,'Virat Kohli']);
console.log(swissAirLine);

// BIND METHOD :: 

// -> First argument of bind method refers refernce for this keyword...

// book1.call(adaniAirLine,12,'Priti'); 

const bookAd = book1.bind(adaniAirLine);
const bookSw = book1.bind(swissAirLine);
const bookAr = book1.bind(flightBooking);

bookAd(568,'Sunny Liony');
console.log(adaniAirLine);

bookSw(345,'Chola singh');
console.log(swissAirLine);

const bookAd18 = book1.bind(adaniAirLine,1234);
bookAd18('Andre Russel');
console.log(adaniAirLine)

// WITH EVENT LISTENER :: 

flightBooking.plane = 200;
flightBooking.buyPlane = function(){
    console.log(this);
    this.plane++;
    console.log(this.plane);
}

flightBooking.buyPlane();
// document.querySelector('.buy').addEventListener('click',flightBooking.buyPlane);
// In evenlistener this keyword referes html tag only not object :) 

document.querySelector('.buy').addEventListener('click',flightBooking.buyPlane.bind(flightBooking));

// Partial Appliction ::

const addTax = (rate,value) => value + value * rate;
console.log(addTax(.23,100));

const vatTax = addTax.bind(null,.38);
console.log(vatTax(100));

const addTaxRate = function(rate){
    return function(value){
        return value + value * rate;
    }
}

const vatTax2 = addTaxRate(.7);
console.log(vatTax2(100))

// Emediatly invoke function expression ::;

// (function(){console.log('Hi ak')})();

// CLOSER : 

const secureBooking = function(){
    let passengerCount = 0; 
    return  function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();
booker();
booker();
booker();

// How the booker function access the passengerCount variable ??? :)

// ==> All the function have access to varibale environment in which function is created :: 
// ==> variable environment of executio contex i which booker is created 

console.dir(booker);









