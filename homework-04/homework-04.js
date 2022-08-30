const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];



function someFunc (arr) {
    const girls = [];
    const boys = [];
    
    for (i = 0; i <= arr.length; i++) {

       if (arr[i].endsWith("а") || arr[i].endsWith("я")) {
           girls.push(arr[i]);
       } else {
           boys.push(arr[i]);
       };

};
}
console.log(someFunc(students))
// function getPairs(students) {
//     for (i = 0; i < students.length; i++) {
//         const girls = i.endsWith('a');
//     };
//     console.log(girls)
// }



// let txt = "";
// students.forEach(myFunction);

// function myFunction(value, index, array) {
//     if (value.endsWith('а') {

//     };
  
//   }


// const mapper = new Map([['1', 'a'], ['2', 'b']]);
// Array.from(mapper.values());
// // ['a', 'b'];
