// Mark Klingelhoefer
// Age Calculator 1.0
// Gets the current age of the user or they age they will be
// this year and returns different output depending on if year 
// was before they were born, if year was after they were 
// born but in the past, or if year is in the future

// Allows program to get user input
const prompt = require("prompt-sync")();

// Gets user's current age or what age they will turn this year
let age = prompt('Please enter your current age or what age you will turn this year: ');
// User inputs question
let year = prompt('Please enter the year you want to calculate your age for: ')

// Assigns current year to currentYear variable
let currentYear = new Date().getFullYear()

const howOld = (age, year) => {
    // Determines birth year
    let birthYear = currentYear - age;
    // Determines future age
    if (year > currentYear) {
        let futureAge = year - birthYear;
        return `You will be ${futureAge} in the year ${year}`
    // Determines how many years the year entered was before
    // you were born
    } else if (year < birthYear) {
        let pastYears = birthYear - year;
        return `The year ${year} was ${pastYears} years before you were born`;
    // Determines how old you were in a year in the past that
    // was after your birth date
    } else if (year > birthYear && year < currentYear) {
        let pastAge = year - birthYear;
        return `You were ${pastAge} in the year ${year}`
    // Returns message if year entered is the current year
    } else {
        return 'You entered the current year. Please enter a year in the past or in the future for the program to work.'
    }
}

console.log(howOld(age, year));