
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];


// let girls = []
// let boys = []
let sortedList = []
const pairs = [];
const namesAndTheme = [];
const fullInfo = [];

// two arrays with girls and with boys

function separateIdentities(arr) {
  let girls = []
  let boys = []
    for (let i = 0; i < arr.length; i++) {

      if (arr[i].endsWith("а")) {

         girls.push(arr[i]) 
       } else {
        boys.push(arr[i]);
      }}
  return [boys, girls]
}
console.log(separateIdentities(students))


// combined array - [girl, boy, g, b, etc]

function alternateIdentities(arr1, arr2) {

  
    for (let i = 0; i < arr1.length; i++) {
     
 sortedList.push(arr1[i], arr2[i]);
    }
  return sortedList
}
 console.log(alternateIdentities(girls, boys))

 
// arrays [girl, boy]

 function makePairs(arr) {
     for (let i = 0; i < arr.length; i += 2) {
         const sortedList = arr.slice(i, i + 2);
         pairs.push(sortedList);
     }
   return pairs;
 }
 console.log(makePairs(sortedList))


// array with pair - girl, boy and their theme

 function makePairAndTheme(arr1, arr2) {
    for (let i = 0; i < arr1.length; i ++) {
        namesAndTheme.push([arr2[i].join(" і "), String(arr1.slice(i, i + 1))])
    }
  return namesAndTheme;
 }
console.log(makePairAndTheme(themes, pairs))


// students and their marks

function rateStudents(arr1, arr2) {
    const marked = [];
    for (let i = 0; i < arr1.length; i ++) {
        marked.push([arr1[i], arr2[i]])
    }
  return marked
}
console.log(rateStudents(students, marks))

 
// pair of students, their theme and random mark

function addFullInfo(arr) {
    for (let i = 0; i < arr.length; i ++) {
     let randomMark = Math.floor(Math.random()*5 + 1); 
     fullInfo.push([String(arr[i]), String(randomMark)])
    }
   return fullInfo
}
console.log(addFullInfo(namesAndTheme))