/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
//push key species value dog to object
animal.species = 'Dog';
//push key name with value 'Cookie'
animal['name'] = 'Cookie';
//creates noises key inside animal object and assigns empty array
animal.noises = [];
//logs animal object to console
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create empty var array named noises
var noises = [];
//give noises first element using bracket notation
noises[0] = 'Woof!';
//add another element to end of array
noises.push('Meow!');
//add element to front of array using array method
noises.unshift('Grr!');
//add another element to end
noises.push('Wooo!');

//log length of the array noises
console.log(noises.length);
//log last element of array noises
console.log(noises[noises.length - 1]);
//log whole array
console.log(noises);








//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//assigning noises arr to prop of animal obj
animal.noises = noises; 
//add another element to noises arr inn animal obj key noises
animal['noises'][animal['noises'].length] = 'Yeet!';
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 */
console.log(animal['name']);
console.log(animal['species']);

/** 
 * 2. What are the different ways of accessing elements on arrays?
 */
console.log(animal['noises'][2]);
/** 
 * 
 * *******************************************************************
 **/

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare var animals and assign empty array
var animals = [];
//push animal obj to animal array
animals.push(animal);
//logs animals array 
console.log(animals);
//create duck obj with values
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
//push duck obj to animals array
animals.push(duck);
console.log(animals);

//create two more animal obj and push to animals array
var cat = {
  species: 'cat',
  name: 'Kimbap',
  noises: ['Meow!', 'Hiss']
}
animals.push(cat);

var pig = {
  species: 'pig',
  name: 'Wilbert',
  noises: ['Oink!', 'Grunt', 'Skree!']
};
animals.push(pig);

//log animals array length
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1) I would choose an Array structure to hold friends
//create array friends
var friends = [];
//function getRandom to pull random friend from animal array
function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
console.log(getRandom(animals));
//adds animal name to friends array from animals[at random index]
friends.push(getRandom(animals)['name']);
console.log(friends);
//adds friends property to animals array using bracket notation
animals[0].friends = friends;
console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}