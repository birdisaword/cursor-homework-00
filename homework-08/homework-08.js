
  // const student1 = {
  //   university = 'Вища Школа Психотерапії м.Одеса',
  //   course = '1',
  //   fullName = 'Остап Бендер'
  // }

  class Student {
    constructor(university, course, fullName) {
      university = this.university;
      course = this.course;
      fullName = this.fullName
    }
  }
    
  let student1 = new Student('Вища Школа Психотерапії м.Одеса', '1', 'Остап Бендер');
  console.log(student1)

    // getInfo() {
    //   return (`Студент ${course} курсу ${university}, ${fullName}`)
    // }

    // get marks() {
    //   let marksArr = [];
    //   return marksArr.push(this.marks);
    // }

    // set marks(value) {
    //   this.marks = value;
    //   return value;
    // }
      
    // getAverageMark() {
    //   let sumOfMarks = this.marks.reduce((a, b) => a + b, 0); 
    //   let averageMark = sumOfMarks / this.marks.length;
    //   return averageMark
    // }

    // // dismiss() {
    // //   if (dismiss) {
    // //     this.marks = null;
    // //   }
    // // }

    // // recover() {
    // //   if (recover) {
    // //     !dismiss
    // //   }
    // // }

  // }
  

  const student = new Student ('Вища Школа Психотерапії м.Одеса', '1', 'Остап Бендер')

  // Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер
  console.log(student.getInfo())