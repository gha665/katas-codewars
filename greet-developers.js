// Coding Meetup #2 - Higher-Order Functions Series - Greet developers
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organizing.
// Your task is to return an array where each object will have a new property 'greeting' with the following string value:
// Hi < firstName here >, what do you like the most about < language here >?
// For example, given the following input array:

var list1 = [
	{ firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
	{ firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
	{ firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

//Solution 1
function greetDevelopers(list) {
	return list.map(dev => {
		dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`;
	});
	return dev;
}
console.log(greetDevelopers(list1));

// Better Solution
const greetDevelopers = list => list.map((theObj) => ({...theObj, greeting: `Hi ${theObj.firstName}, what do you like the most about ${theObj.language}?`}))

// Another solution
// const greetDevelopers = list => {
// 	let returnObjArray = [];
// 	for (let i of list) {
// 	  i.greeting = `Hi ${i.firstName}, what do you like the most about ${i.language}?`;
// 	  returnObjArray.push(i)
// 	}
// 	return returnObjArray;
//   }
  
  
  
  
  // greetDevelopers(list1)