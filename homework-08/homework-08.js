
  // const student1 = {
  //   university = 'Вища Школа Психотерапії м.Одеса',
  //   course = '1',
  //   fullName = 'Остап Бендер'
  // }

  // class User {

  //   constructor(name) {
  //     this.name = name;
  //   }
  
  //   sayHi() {
  //     alert(this.name);
  //   }
  // }
  // // Использование:
  // let user = new User("Иван");
  // console.log(user);
  // user.sayHi();



  class Student {

    constructor(university, course, fullName) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.marks
    }
    getInfo() {
      return `Студент ${this.course}го курсу, ${this.university}, ${this.fullName}, ${this.marks}`
    }
    
    get newMark() {
      return this.marks;
    }
  
    set newMark(value) {
      this.marks += [value]
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



  student1.newMark = "3";
  student1.newMark = "5";
 

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