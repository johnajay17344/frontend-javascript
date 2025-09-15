// task_3/js/main.ts

/// <reference path="./crud.d.ts" />
//what is a triple slash directive
// It is a single line comment containing a single XML tag. The contents of the comment are used as compiler directives. The triple-slash directive is only valid at the top of its containing file. The contents of the comment are used as compiler directives.

import { RowID, RowElement } from "../interface";
import * as CRUD from "./crud.js"; // we use import * as to import all exported members from a module as a single object.

// Create row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert row
const newRowID: RowID = CRUD.insertRow(row);

// Update row
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};
CRUD.updateRow(newRowID, updatedRow);

// Delete row
CRUD.deleteRow(newRowID);
