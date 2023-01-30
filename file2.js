// FUNCTIONS :: 

// 1) Function declaration ::

// --> In function decla.. we can call fun before defining it.

myfun();

function myfun() {
    console.log('Hellow World');
}

myfun();

function fruit(apples, oranges) {
    const juice = `Juice made with apples ${apples} and oranges ${oranges}`;
    return juice;
}

console.log(fruit(5, 3));

const num = Number('1818');

// 2)  Function Expression ::

const age = function (birthYear) {
    return 2023 - birthYear;
};

console.log(age(1999));

// 3) Arrow Function ::

const calAge = birthYear => 2023 - birthYear;

console.log(calAge(2000));

const yearsUntilRetirenment = birthYear => {
    const age = 2023 - birthYear;
    const yearsLeft = 65 - age;
    return yearsLeft;
}

console.log(yearsUntilRetirenment(1980));

const fullName = (firstName, lastName) => {
    return `Your Full Name is ${firstName} ${lastName}.`;
}

console.log(fullName('Ajay', 'Kathrotiya'));

// Functions calling other Functions ::

function fruitCut(apples) {
    return apples * 4;
}

function fruit(apples, oranges) {
    apples = fruitCut(apples);
    oranges = fruitCut(oranges);
    const juice = `Juice made with apples ${apples} and oranges ${oranges}`;
    return juice;
}

console.log(fruit(5, 5));

// OBJECTS ::   some what same like python dictionary :::

const obj = {
    name: 'ajay',
    birthYear : 2000,
    designation: 'Engineer',
    number : 9266166683,
    friends : ['dk','mk','ak','pk'],
    calAge : function(){
        return 2023 - this.birthYear;
    }
}

console.log(obj.calAge());
console.log(obj['calAge']());














