
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];


// pairs of students

  function makePairs(arrOfPeople) {
    const sortedList = []
    const girls = []
    const boys = []
    const pairs = []
  
    for (let i = 0; i < arrOfPeople.length; i++) {

      if (arrOfPeople[i].endsWith("а")) {
      girls.push(arrOfPeople[i]) 
       } else {
      boys.push(arrOfPeople[i])
      }
    }
    
    for (let i = 0; i < girls.length; i++) {
      sortedList.push(girls[i], boys[i]);
    }
    
    for (let i = 0; i < sortedList.length; i += 2) {
      const sorted = sortedList.slice(i, i + 2);
      pairs.push(sorted);
    }
      return pairs;
   }
  
 console.log(makePairs(students))


// array - girl, boy and their theme

  function makePairAndTheme(theme, pair) {
    const namesAndTheme = [];

    for (let i = 0; i < theme.length; i ++) {
      namesAndTheme.push([pair[i].join(" і "), theme[i]])
    }
  return namesAndTheme;
  }

  console.log(makePairAndTheme(themes, makePairs(students)))


// students and their marks

  function rateStudents(student, mark) {
    const marked = [];

    for (let i = 0; i < student.length; i ++) {
      marked.push([student[i], mark[i]])
    }
  return marked
  }

console.log(rateStudents(students, marks))

 
// pair of students, their theme and random mark

  function addFullInfo(pairAndTheme) {
    const fullInfo = [];
    const minMark = 1;
    const maxMark = 5;

    for (let i = 0; i < pairAndTheme.length; i ++) {
      let randomMark = Math.floor(Math.random() * maxMark + minMark); 
      fullInfo.push([String(pairAndTheme[i]), String(randomMark)])
    }
    return fullInfo
  }

console.log(addFullInfo(makePairAndTheme(themes, makePairs(students))))