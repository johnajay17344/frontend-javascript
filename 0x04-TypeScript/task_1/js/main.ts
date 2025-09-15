// task_1/js/main.ts

interface Teacher {
  readonly firstName: string; // readonly → can't change later
  readonly lastName: string; // readonly → can't change later
  fullTimeEmployee: boolean; // always required
  yearsOfExperience?: number; // optional
  location: string; // always required
  [key: string]: any; // allows extra properties like contract
}
