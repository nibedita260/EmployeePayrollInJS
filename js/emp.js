let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("name"),
  gender=id("gender"),
  salary = id("salary"),
  startdate = id("startdate"),
  notes=id("notes"),
  form = id("employeeForm"),
  errorMsg = classes("error");

// Adding the submit event Listener

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(gender, 1, "Gender cannot be blank");
  engine(department,2,"Department cannot be blank");
  engine(salary, 3, "Salary cannot be blank");
  engine(startdate, 4, "Startdate cannot be blank");
  engine(notes, 5, "Notes cannot be blank");
});

// engine function which will do all the works

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    console.log(errorMsg[serial].innerHTML)
    id.style.border = "2px solid red";
    console.log(message)
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";
console.log(message)
    
  }
};