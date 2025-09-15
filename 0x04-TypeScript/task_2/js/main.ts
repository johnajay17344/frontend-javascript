// 5. Advanced types Part 1
// Create the DirectorInterface interface with the 3 expected methods
interface DirectorInterface {
  workFromHome():string;
  getCoffeeBreak():string;
  workDirectorTasks():string;
}
interface TeacherInterface {
  workFromHome():string;
  getCoffeeBreak():string;
  workTeacherTasks():string;
}

class Director implements DirectorInterface{ 

workFromHome():string{
  return `Working from home`
}
getCoffeeBreak():string {
  return `Getting a coffee break`
}
workDirectorTasks():string {
  return `Getting to director tasks`
}
}


class Teacher implements TeacherInterface{

workFromHome():string{
  return ` cannot WorK from home`
}
getCoffeeBreak():string {
  return `cannot have a break`
}
workTeacherTasks():string {
  return `Getting to work`
}
}


const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}
//Creating functions specific to employees
function isDirector(employee:Director | Teacher):employee is Director{
  return employee instanceof Director
}

function executeWork(employee:Director | Teacher):string {
  if (isDirector(employee)){
    return employee.workDirectorTasks()
  }
  else {
    employee.workTeacherTasks()
  }
}

//String Literal Type
types Subject = "math" | "History"

function teachClass(todayClass:Subject) : string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

