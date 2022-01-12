/*let js = 'amazing';
if (js === 'amazing') {alert('JavaScript is Fun!');}

let country = 'hungary';
let continent = 'europe';
let population = 10000000;

console.log(country, continent, population);

const isIsland = false;
let language;

console.log(typeof isIsland, typeof population, typeof country, typeof language);

language = 'hungarian';

let populationFinland = 6000000;
const averagePopulation = 33000000;
let populationHalf = population / 2;
population = population + 1;
let checkPopulation = population > populationFinland;
let checkAveragePopulation = population < averagePopulation;

let description = 'Portugal is in Europe, and its 11 million people speak portuguese';

console.log(populationHalf, population, checkPopulation, checkAveragePopulation)
*/
/*
//Variable declaration
let markMass;
let markHeight;

let johnMass;
let johnHeight;

//Variable Assignment Test data 1
markMass = 78;
markHeight = 1.69;

johnMass = 92;
johnHeight = 1.95;

let bmiMark = markMass / markHeight ** 2;
let bmiJohn = johnMass / johnHeight ** 2;

let markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark);
console.log(bmiJohn);
console.log(markHigherBMI);
*/
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const currentYear = 2022;

const jonas = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' +
job + '.';

const jonasNew = `I'm ${firstName}, a ${currentYear - birthYear} years old 
${job}.`;

console.log(jonas);
console.log(jonasNew);*/

/*
let firstName = 'Sarah';
let lastName = 'Miller';
let ageSarah = 18;

const LEGALAGEFORDRIVING = 18;

if (ageSarah >= LEGALAGEFORDRIVING){
    console.log(`${firstName, lastName} is allowed to drive.`);
}
else {
    console.log(`${firstName, lastName} is not allowed to drive.`);
}
*/
/*
const BIRTH_YEAR = 1991;

if (BIRTH_YEAR >= 1800 && BIRTH_YEAR <= 1899){
    console.log("The person was born in the 19th century.");
}
else if (BIRTH_YEAR >= 1900 && BIRTH_YEAR <= 1999){
    console.log("The person was born in the 20th century.");
}
else {

}
*/

/*
//Variable declaration
let markMass;
let markHeight;

let johnMass;
let johnHeight;

//Variable Assignment Test data 1
markMass = 78;
markHeight = 1.69;

johnMass = 92;
johnHeight = 1.95;

let bmiMark = markMass / markHeight ** 2;
let bmiJohn = johnMass / johnHeight ** 2;


if (bmiMark > bmiJohn){
    console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}!`);
}
else{
    console.log(`John's BMI ${bmiJohn} is higher than Mark's ${bmiMark}!`);
}
*/
/*
const money = 0;
if (money == 0){
    console.log("True");
}
else{
    console.log("False");
}*/

/*
const age = "18";

if (age === 18){
    console.log("The person just became an adult.");
}
else {

}

const favourite = promt("Whats your favourite number?: ");*/
/*
let populationOfHungary = Number(prompt("How big is the population in hungary?"));
const AVERAGE_POPULATION = 33000000;

if (populationOfHungary > 33000000){
    console.log(`Hungary´s population is above average`);
}
else {
    console.log(`Hungary´s population is ${AVERAGE_POPULATION-populationOfHungary} 
    below average.`);
}*/
/*
let numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
if (numNeighbours === 1){
    console.log("Only 1 border!");
}
else if (numNeighbours > 1){
    console.log("More than 1 border");
}
else {
    console.log("No borders");
}*/
/*
const HAS_DRIVERS_LICENSE = true;
const HAS_GOOD_VISION = true;

console.log(HAS_DRIVERS_LICENSE && HAS_GOOD_VISION);
console.log(HAS_DRIVERS_LICENSE || HAS_GOOD_VISION);
console.log(!HAS_DRIVERS_LICENSE && HAS_GOOD_VISION);
*/
/*
const AVERAGE_SCORE_DOLPHINS = (100 + 100 + 100) / 3; 
const AVERAGE_SCORE_KOALAS = (100 + 100 + 100) / 3;

if((AVERAGE_SCORE_DOLPHINS > AVERAGE_SCORE_KOALAS) && AVERAGE_SCORE_DOLPHINS >= 100){
    console.log(`The winners are the Dolphins, scored ${AVERAGE_SCORE_DOLPHINS}`);
}
else if ((AVERAGE_SCORE_DOLPHINS < AVERAGE_SCORE_KOALAS) && AVERAGE_SCORE_KOALAS >= 100){
    console.log(`The winners are the Koalas, scored ${AVERAGE_SCORE_KOALAS}`);
}
else if ((AVERAGE_SCORE_DOLPHINS === AVERAGE_SCORE_KOALAS) && (AVERAGE_SCORE_DOLPHINS >= 100 && AVERAGE_SCORE_KOALAS >= 100)){
    console.log(`The result is a draw!`);
}
*/
/*
const DAY = 'wednesday';

switch(DAY) { //day === 'monday'
    case 'monday': 
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case 'tuesday':
        console.log(`Prepare theory videos`);
        break;
    case 'wednesday':
        console.log(`Do some Wednesday stuff`);
        break;
    case 'thursday':
        console.log(`Do some Thursday stuff`);
        break;
    case 'friday':
        console.log(`Do some Friday stuff`);
        break;
    default:
        console.log(`Not a valid day!`);
}
*//*
const age = 23;
age >= 18 ? console.log('I like to drink wine.') : 
console.log ('I like to drink water.');
*/

/*
const BILL_VALUE = 40;

let tip;
BILL_VALUE >= 50 && BILL_VALUE <= 300 ? tip=BILL_VALUE*0.15 : tip= BILL_VALUE*0.2;

console.log(`The bill was ${BILL_VALUE}, the tip was ${tip}, and the total value ${BILL_VALUE+tip}.`)
*/


const POPULATION_HUNGARY = 130000000;

POPULATION_HUNGARY > 33000000 ? console.log("Hungary's population is above average") : console.log("Hungary's population is below average.");