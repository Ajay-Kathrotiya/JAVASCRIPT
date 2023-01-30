// FUNCTIONS :: 

// 1) Function declaration ::

function myfun() {
    console.log('Hellow World');
}

myfun();

function fruit(apples, oranges) {
    console.log(apples);
    console.log(oranges);
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