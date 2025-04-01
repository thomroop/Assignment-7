function WordCount(str) {               //define a function named WordCount, takes one parameter str//
  return str.split(" ").length;         //.split(" ") splits the string eveytime  a space is found (" ").
}

console.log(WordCount("Hello world, how are you?")); //call the function WordCount,"hello world,how are you?"" is passed as an argument into str//



