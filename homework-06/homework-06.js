const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];


// 1 список предметів для конкретного студента

  function getSubjects(obj) {
    const replacedUnderscore = [];
    const subjArr = Object.keys(obj.subjects);

      for(let i = 0 ; i < subjArr.length ; i++){
        replacedUnderscore[i] = (subjArr[i].charAt(0).toUpperCase() + subjArr[i].slice(1)).replace(/_/g, " ");
      }  
  return replacedUnderscore
  }

  console.log(getSubjects(students[0]))


// 2 середню оцінку по усім предметам для переданого студента


  function getAverageMark(obj) {
    let marks = [];
  
    marks = Object.values(obj.subjects)

    const mergedMarks = marks.reduce((total, amount) => {
    return total.concat(amount);
    }, []);
  
    let sumOfMarks = mergedMarks.reduce((a, b) => a + b, 0); 
    let averageMark = sumOfMarks / mergedMarks.length;
  
  return averageMark.toFixed(2)
  }

console.log(getAverageMark(students[0]))


// 3 інформація загального виду по переданому студенту

  function getStudentInfo(obj) {

    let studentsInfo = {
      name: obj.name,
      course: obj.course,
      averageMark: getAverageMark(obj)
    }
  return studentsInfo
  }

console.log(getStudentInfo(students[0]))


// 4 імена студентів у алфавітному порядку

  function getStudentsNames(arr) {
    const arrOfNames = [];

    for(let student of arr) {
    arrOfNames.push(student.name)
  
    }
  return arrOfNames.sort()
  }

console.log(getStudentsNames(students))


// 5 кращий студент зі списку по показнику середньої оцінки

  function getBestStudent(arr) {
    const allAverageMarks = [];

    for(let i = 0; i < arr.length; i++) {
    allAverageMarks.push(Number(getAverageMark(arr[i])))
    }
    indexOfMaxMark = allAverageMarks.indexOf(Math.max(...allAverageMarks))
    return arr[indexOfMaxMark].name
  }

console.log(getBestStudent(students))


// 6 обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень

  function calculateWordLetters(str) {
    const arrOfLetters = str.split('')
    const count = {};

    arrOfLetters.forEach(function (i) { 
    count[i] = (count[i] || 0) + 1; 
    });
  return count
  
  }

 console.log(calculateWordLetters('test'))