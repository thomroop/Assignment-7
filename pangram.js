function isPangram(str) {                            //define a function isPangram(str), which takes a string as input.//
    str = str.toLowerCase();                         //input string is converted to lowercase using .toLowerCase()//
    let alphabet = "abcdefghijklmnopqrstuvwxyz";     //store the English alphabet in a string variable alphabet.//
    
    for (let letter of alphabet) {                    //use a for...of loop to iterate over each letter in the alphabet string.//
        if (!str.includes(letter)) {             //if (!str.includes(letter)) condition checks whether the current letter is missing from the input string.//
            return "It is not a pangram";        //If any letter is missing, the function immediately returns "It is not a pangram"//
        }
    }                    
    return "It is a pangram";                    //If the loop completes without returning "It is not a pangram"//
}                                               //function then returns It is a pangram//


let str1 = "The quick brown fox jumps over the lazy dog";
console.log(`Is string- '${str1}' is a pangram? ` + isPangram(str1));

