/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//function search that takes in array and string
function search(array, string) {
    //for loop to over array
    for (let i = 0; i < array.length; i++) {
        //if string is equal to indexes name
        if (string === array[i]['name']){
            //returns animal obj at that array index
                return array[i];
        }
    }
    //returns null if loop passes 
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(array, string, replacement) {
    //for loop to over array
    for (let i = 0; i < array.length; i++) {
        //if string is equal to indexes name
        if (string === array[i]['name']){
            //modifies obj at array index and replacing with replacement argument
                array[i] = replacement;
        }
    }
    //returns null if loop passes 
    return null;
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(array, string) {
    //for loop to over array
    for (let i = 0; i < array.length; i++) {
        //if string is equal to indexes name
        if (string === array[i]['name']){
            //removes index in array
                array.splice(i, 1);
        }
    }
    //returns null if loop passes 
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(array, object) {
    // if obj has name + length > 0, obj has species + length > 0, name search in array = null
    if (object.name.length > 0 && object.species.length > 0 && search(array, object['name']) === null) {
        //if all conditions pass, push new animal obj to array
        array.push(object);
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}