/*Given a word and a list of possible 
anagrams, select the correct sublist*/
let findAnagrams = (str, words) => {
	let anagrams = [];
	words.map(val => {
  	if(str.split("").sort().join("") === val.split("").sort().join("")){
    	anagrams.push(val);
    }
  })
  return anagrams;
}
console.log(findAnagrams("listen", ["enlists", "google", "inlets", "bananan"]));
console.log(findAnagrams("pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"]));

/*Write a function which receives two strings and removes 
appearances of the second string from the first one*/
function remove(str, char){
    let re = new RegExp(char,"g");
    return str.replace(re, '');
}
console.log(remove("This is some text", "is"));
console.log(remove("Yes, London. You know: fish, chips cup 'o tea, bad food, worse weather", "o"));

/*Given a sentence with missing words and an array of words. 
Replace all '_' in a sentence with the words from the array*/
let fillTheSentence = (str, words) => {
	words.forEach(word => {
  	str = str.replace("_", word);
  })
  return str;
}
console.log(fillTheSentence("_, we have a _", ["Huston", "problem"]));
console.log(fillTheSentence("If at _ you don't _, try, try _", ["first", "success", "again"]));
console.log(fillTheSentence("May the _ _ _ _", ["Force", "be", "with", "you"]));

/*Write a function that accepts a string(a sentence) as a parameter and finds the
longest word within the string. If there are several words which are the longest
ones, print the last word(words can be separated by space, comma or hyphen)*/
let longestWord = (str) => {
    str = str.split(/[^A-z']/g);
    let long = str[0].length;
    let word = "";
    str.forEach(val => {
        if(val.length >= long){
          long = val.length;
          word = val;
        }
    })
    return word;
}

console.log(longestWord("A revolution without dancig is a revolution not worth having"));
console.log(longestWord("Which would be worse-to live as a monster, or to die as a good man?"));