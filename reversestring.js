function reverseWords(sentence) {                    //defines a function reverseWords, takes one parameter sentence//
    return sentence.split(" ").reverse().join(" "); //.split(" ") splits the sentence into an array of words based on spaces " "//
                                                     
}                                                   //.reverse() reverses the order of elements in the array//                                                 //.join(" ") joins the words back into a string, adding a space " " between them.
console.log(reverseWords("JavaScript is fun")); 

