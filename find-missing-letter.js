function findMissingLetter(array)
{
  for (let i = 0; i < array.length; i++) {
    let currentCharCode = array[i].charCodeAt(0);
    
    if(currentCharCode +1 != array[i+1].charCodeAt(0)) {
      return String.fromCharCode(currentCharCode + 1);
    }
  }
}



// 2.
// function findMissingLetter(array) {
//   for (let i = 0; i < array.length; i++) {
//     let letter = array[i].charCodeAt(0);
//     if (letter + 1 !== array[i + 1].charCodeAt(0)) {
//       return String.fromCharCode(letter + 1);
//     }
//   }
// }


//3
const findMissingLetter = array => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
    ''
  );
  const start = alphabet.indexOf(array[0]);
  return alphabet
    .slice(start, start + array.length)
    .find(el => !array.includes(el));
};
// findMissingLetter(); //"e"
// findMissingLetter(['a', 'b', 'c', 'd', 'f']); //"e"
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
// findMissingLetter(['O', 'Q', 'R', 'S']); //"P"
console.log(findMissingLetter(['O', 'Q', 'R', 'S']));