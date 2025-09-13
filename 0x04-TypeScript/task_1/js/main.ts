//create teacher interface
interface Teacher{
  readonly firstName=string;//the name can only be read but cant be  changed 
  readonly lastName=string;
  fullTimeEmployee=boolean;
  yearsOfExperience=number;
  location=string;
  [key:string]=string|number|boolean;// this allow user to add addtional features that wasnt mentioned
}
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

//Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)
interface Directors extends Teacher{
  numberOfReports:number;
}
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

//3. Printing teachers
//Write an interface for the function named printTeacherFunction.
interface printTeacherFunction{(firstName:string,lastName:string):string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};
//example
printTeacher("John", "Doe")


//Write a Class named StudentClass:

// class StudentClass {
//   firstName:string;
//   lastName:string
// }
//   constructor({firstName:string;lastName:string}) {
//     this.firstName=firstName;
//     this.lastName=lastName
//   }
//   workOnHomework(): string{
//     return "currently working";
//   }
//   displayName():string{
//     return this.firstName
//   }

interface StudentConstuctor {
  firstName:string;
  lastName:string
}

interface StudentClassinterface extends StudentConstuctor {
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements StudentClassinterface {
  firstName: string;
  lastName: string;
}
constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }

  //or u  can use 
// // 1️⃣ Constructor interface
// interface StudentConstructor {
//   firstName: string;
//   lastName: string;
// }

// // 2️⃣ Class interface
// interface StudentClassInterface {
//   firstName: string;
//   lastName: string;
//   workOnHomework(): string;
//   displayName(): string;
// }

// // 3️⃣ Class implementation
// class StudentClass implements StudentClassInterface {
//   firstName: string;
//   lastName: string;

//   // Constructor takes two arguments directly
//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   workOnHomework(): string {
//     return "Currently working";
//   }

//   displayName(): string {
//     return this.firstName;
//   }
// }

// // 4️⃣ Example usage
// const student1 = new StudentClass("John", "Doe");
// console.log(student1.displayName()); // Output: John
// console.log(student1.workOnHomework()); // Output: Currently working
