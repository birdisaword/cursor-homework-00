
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];


// function someFunc(arr) {

//     let girls = []
//     let boys = []

//     for (let i = 0; i < arr.length; i++) {

//         (arr[i].endsWith("а")) ? girls.push(arr[i]) : boys.push(arr[i])  
//     }; 
//   return [boys, girls]
// };

// console.log(someFunc(students))


let girls = []
let boys = []
let pairs = []

function someFunc(arr) {

    for (let i = 0; i < arr.length; i++) {

      (arr[i].endsWith("а")) ? girls.push(arr[i]) : boys.push(arr[i]);
    }; 
  return [boys, girls]
};

console.log(someFunc(students))


function makePairs(arr1, arr2) {

   for (let i = 0; i < arr1.length; i++) {
    
pairs.push(arr1[i]);
pairs.push(arr2[i]);
pairs.slice(i, i += 2);
   }
   return pairs
   
}
console.log(makePairs(girls, boys))




// function makePairs(arr1, arr2) {
// const pairs = [];

// pairs.push()
// }

// const initialArray = [1, 2, 3, 4, 5, 6]
// const newArr = boys.reduce((result, value, index, array) => {
//   if (index = 0 ) {
//     return [...result, array.slice(index, index +1)];
//   }
//   return result
// }, []);
// console.log(newArr)

// function getPairs(arr) {

//     const girls = [];
//     const boys = [];

//     for (i = 0; i < arr.length; i++) {
//       girls.push(arr[i].endsWith('a') && arr[i].endsWith('я'));
//       boys.push(...arr);
//     };

// }
// console.log(getPairs(students))


// let txt = "";
// students.forEach(myFunction);

// function myFunction(value, index, array) {
//     if (value.endsWith('а') {

//     };
  
//   }


// const mapper = new Map([['1', 'a'], ['2', 'b']]);
// Array.from(mapper.values());
// // ['a', 'b'];
