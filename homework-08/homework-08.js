

   class Student {
    constructor(university, course, fullName, mark) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.marks = mark;
    }
    
    getInfo() {
      return `Студент ${this.course}го курсу, ${this.university}, ${this.fullName}, ${this.marks}`
    }
    
    get newMarks() {
      if (!this.dismiss) {
        return this.marks
      }
    }

    set newMarks(mark) {
      if (!this.dismiss) {
        return this.marks.push(mark);
      }
    }

    getAverageMark() {
      const sum = this.marks.reduce((a, b) => a + b, 0)
      const average = (sum / this.marks.length).toFixed(1)
      return average
    }

    getDismissed() {
      this.dismiss = true;
    }
  
    getRecovered() {
      this.dismiss = false;
    }
  }
    
   export let student1 = new Student('Вища Школа Психотерапії м.Одеса', '1', 'Остап Бендер', [4, 5, 4]);

  student1.newMarks = 5;
  student1.newMarks = 3;

  student1.getDismissed()
  
  student1.newMarks = 2;
  student1.newMarks = 1;

  student1.getRecovered()

  student1.newMarks = 2;
  student1.newMarks = 3;
  
  // console.log('average mark: ' + student1.getAverageMark())

  // console.log(student1.getInfo())

