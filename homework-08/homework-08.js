

  class Student {

    constructor(university, course, fullName) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      // this.marks
    }
    getInfo() {
      return `Студент ${this.course}го курсу, ${this.university}, ${this.fullName}, ${this.marks}`
    }
    
    get getMarks() {
      return this.setMarks;
   }
  
    set setMarks(value) {
      const marksArr = [];
     this.setMarks = marksArr.push(value)
    }
  //   Object.defineProperty(Student, "addMark", {
  //     get : function () {
  //         return this.mark;
  //     }
  // });
  
  // // setting property
  // Object.defineProperty(Student, "addMark", {
  //     set : function (value) {
  //         this.mark = value;
  //     }
  // });


    // getMarks() {
    //   let marksArr = [];
    //   return marksArr.push(marks);
    // }

    // setMarks(value) {
    //   this.marks = value;
    //   return value;
    // }


  //   get marks() {
      
  //     return this.marks;
  //   };
  
  //   set addMark(newMark) {
  //     this.marks = newMark;
  // }
  }

    
  let student1 = new Student('Вища Школа Психотерапії м.Одеса', '1', 'Остап Бендер');
  console.log(student1)



  // Student.marks = "3";
  student1.setMarks = "5";
 

  console.log(student1.getInfo())

 

   

 
      
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
  

  // const student = new Student ('Вища Школа Психотерапії м.Одеса', '1', 'Остап Бендер')

  // // Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер
  // console.log(student.getInfo())