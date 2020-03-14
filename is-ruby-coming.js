//You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:

var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];
// your function should return true.

  const isRubyComing list => {
    return list.some(dev => dev.language === "Ruby")
  }
  isRubyComing(list1); 

// One Liner Solution
// const isRubyComing = list => list.some(dev => dev.language === "Ruby")
// isRubyComing(list1)

// More simplified solution
// const isRubyComing = list => {
//     let result = false;
//     for (let i of list) {
//       if(i.language === 'Ruby') result = true;
//     }
//     return result
//   }
//   isRubyComing(list1); 