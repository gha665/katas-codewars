const list1 = [
	{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
	{ firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
	{ firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
	{ firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

const list2 = [
	{ firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
	{ firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
];

//Solution 1
// function countDevelopers(list) {
// 	return list.filter((isFromEurope) => {
// 		return isFromEurope.continent === 'Europe' && isFromEurope.language === 'JavaScript';
// 	}).length;
// }

//Solution 2
// const countDevelopers = list => {
// 	let counter = 0;
// 	for (let i of list) {
// 	  if(i.continent === "Europe" && i.language === "JavaScript") {
// 		counter++
// 	  }
// 	}
// 	return counter
//   }

// Better Solution
const countDevelopers = (list) => list.filter((x) => x.continent == 'Europe' && x.language == 'JavaScript').length;
countDevelopers(list1);

console.log(countDevelopers(list1, list2));
