// This is my age, it will not change during the course of this assignment;

const myAge = 18;

// This represents the fastest years of growth, this will be reassigned;

var earlyYears = 2;

earlyYears *= 10.5;

// This represents the next years of aging in dog years up to my own age, this will be reassigned;

var laterYears = (myAge - 2);

laterYears *= 4;

// To total my age in dog years, I will add the early and later years together, this will not be reassigned;

const myAgeInDogYears = (earlyYears + laterYears);

// This is my name, but I want in in all lowercase letters;

var myName = 'CHRISTOPHER'.toLowerCase();

// This will show my name, age, and age in dog years, all in the console;

console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years!`);
