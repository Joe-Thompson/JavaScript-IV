// CODE here for your Lambda Classes

//Classes

//Person class
class Person {
  constructor(personAttributes) {
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
  };
  //Person methods
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  };
};

//Instructor class
class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  };
  //Instructor methods
  demo(subject) {
    return `Today we are learning about ` + subject;
  };

  grade(obj, subject) {
    return obj.name + ' receives a perfect score on ' + subject;
  };

  graded(obj) {
   return obj.grade = Math.floor(Math.random() * 50) + obj.grade
  };
};

//Student class
class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
    this.grade = studentAttributes.grade;
  };
  //Student methods
  listsSubjects(obj) {
      obj.forEach(item => {
      console.log(item);
    });
  };

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ` + subject;
  };

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ` + subject;
  };

  graduate () {
    if (this.grade >= 70) {
      return `Congradulations ${this.name}, you have passed with a ${this.grade} and graduated from Lambda School!!!`
    } else {
      return `I'm sorry ${this.name}, your overall grade of ${this.grade} is below our mark for graduation.  You will need to retake ${this.className}.`
    }
  }
};

//Team Lead class
class TeamLead extends Instructor {
  constructor(teamLeadAttributes) {
    super(teamLeadAttributes);
    this.gradClassName = teamLeadAttributes.gradClassName;
    this.favInstructor = teamLeadAttributes.favInstructor;
  };
  //Team Lead methods
  standUP(channel) {
    return `${this.name} announces to ` + channel + `, @channel standy times!`;
  };
  debugsCode(obj, subject) {
    return `${this.name} debugs ` + obj.name + `'s code on ` + subject; 
  };
};

//Instructor objects
const mary = new Instructor({
  name: "Mary",
  age: 37,
  location: "Boston",
  specialty: "Debugging",
  favLanguage: "C++",
  catchPhrase: "Watch your semi colons!",
});

const howard = new Instructor({
  name: "Howard",
  age: 63,
  location: "Canada",
  specialty: "Array methods",
  favLanguage: "Javascript",
  catchPhrase: "Always keep your stick on the ice, ay",
});

const bill = new Instructor({
  name: "Bill",
  age: 22,
  location: "Arizona",
  specialty: "HTML",
  favLanguage: "PHP",
  catchPhrase: "NO, NO, NO...HTML is in fact a programming languge",
});

//Student objects
const jenny = new Student({
  name: "Jenny",
  age: 28,
  location: "Texas",
  previousBackground: "Rodeo",
  className: "WEB24",
  favSubjects: ["CSS", "LESS", "SASS", "Bootstrap"],
  grade: 30,
});

const joe = new Student({
  name: "Joe",
  age: 34,
  location: "Michigan",
  previousBackground: "Welder",
  className: "WEBpt8",
  favSubjects: ["LESS", "Javascript", "C++", "Bootstrap"],
  grade: 81,
});

const katie = new Student({
  name: "Katie",
  age: 26,
  location: "Michigan",
  previousBackground: "Medical",
  className: "WEB41",
  favSubjects: ["Javascript", "Python", "Ruby", "C#"],
  grade: 95,
});

//Team Lead objects

const bob = new TeamLead({
  name: "Bob",
  age: 21,
  location: "Ohio",
  specialty: "Slack",
  favLanguage: "Java",
  catchPhrase: "@me bro",
  gradClassName: "DS12",
  favInstructor: "Bill",
});

const john = new TeamLead({
  name: "John",
  age: 28,
  location: "New York",
  specialty: "Responsive design",
  favLanguage: "Cobal",
  catchPhrase: "Always think, 'Mobil First!'",
  gradClassName: "WEB2",
  favInstructor: "Bill",
});

const zach = new TeamLead({
  name: "Zach",
  age: 74,
  location: "Florida",
  specialty: "Math operators",
  favLanguage: "Matlab",
  catchPhrase: "Numbers don't reflect reality, numbers create reality...",
  gradClassName: "DS1",
  favInstructor: "Mary",
});

// Console.log's to check code 
console.log(zach.location);
console.log(bill.catchPhrase);
console.log(joe.favSubjects);
console.log(howard.demo('LESS'));
console.log(mary.grade(katie, 'Ruby'));
joe.listsSubjects(joe.favSubjects);
console.log(joe.PRAssignment('javascript'));
console.log(joe.sprintChallenge('html'));
console.log(bob.standUP('WEBpt8'));
console.log(john.debugsCode(katie, 'Ruby'));
console.log(mary.graded(joe));
console.log(joe.grade);
console.log(mary.graded(katie));
console.log(katie.grade);
console.log(bob.graded(jenny));
console.log(jenny.grade);
console.log(jenny.graduate());