// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

let phrase = "This website is for losers LOL!";

// function disemvowel(str) {
//   const vowels = ["a", "e", "i", "o", "u"];

//   return str
//     .split("")
//     .filter(function (el) {
//       return vowels.indexOf(el.toLowerCase()) == -1;
//     })
//     .join("");
// }
// disemvowel(phrase);



//better solution
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}
disemvowel(phrase);
