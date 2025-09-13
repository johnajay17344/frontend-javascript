//Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)

interface Student{
  firstName:string;
  lastName:string;
  age:number;
  location:string;
}
//Create two students, and create an array named studentsList containing the two variables
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};
const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};
const studentsList1:Student[]=[student1,student2];

//Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table


//let create a table

const table = document.createElement("table");
//now that you have created the table you can now edit it

//create the header row
const headerRow = document.createElement("tr");
[firstName, lastName].forEach((headerRowText) => {
  const headerCell = document.createElement("th");
  headerRow.appendChild(headerCell);
});
table.appendChild(headerRow);
/// now imputing the td values
const row = document.createElement("tr");
//create the cell for firstname
const firstNamecell = document.createElement("td");
firstNamecell.textContent = Student.firstName;
//create the cell for LOCATION
const locationcell = document.createElement("td");
locationcell.textContent = Student.location;
//APPEND IT TO THE ROW
row.appendChild(firstNamecell);
row.appendChild(locationcell);
// append it to the table
table.appendChild(row);
//Append it to the  document
document.body.appendChild(table);
