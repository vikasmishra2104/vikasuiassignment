/// table node
let tableBody = document.getElementById("tableBody");
/// edit button
let editButton = document.getElementsByClassName("editBtn");
/// delete button
let deleteButton = document.getElementsByClassName("deleteBtn");
/// load button
let loadButton = document.getElementById("loadBtn");
/// user data
const users = [
  {
    firstname: "Sagar",
    middlename: "Kumar",
    lastname: "Suri",
    email: "s009@gmail.com",
    phoneNumber: "9625564220",
    role: "Trainee-Developer",
    address: "BH4, PU, Chd"
  },
  {
    firstname: "Vikas",
    middlename: "Kumar",
    lastname: "Mishra",
    email: "vikku@gmail.com",
    phoneNumber: "9876543210",
    role: "Trainee-Tester",
    address: "BH3, PU, Chd"
  },
  {
    firstname: "akash",
    middlename: "Kumar",
    lastname: "mishra",
    email: "ak09@gmail.com",
    phoneNumber: "96364220",
    role: "Developer",
    address: "BH3, PU, Chd"
  },
  {
    firstname: "Vikas",
    middlename: "Kumar",
    lastname: "Mishra",
    email: "vikku@gmail.com",
    phoneNumber: "9876543210",
    role: "Trainee-Tester",
    address: "BH3, PU, Chd"
  },
  {
    firstname: "Sagar",
    middlename: "Kumar",
    lastname: "Suri",
    email: "s009@gmail.com",
    phoneNumber: "9625564220",
    role: "Trainee-Developer",
    address: "BH4, PU, Chd"
  },
  {
    firstname: "Vikas",
    middlename: "Kumar",
    lastname: "Mishra",
    email: "vikku@gmail.com",
    phoneNumber: "9876543210",
    role: "Trainee-Tester",
    address: "BH3, PU, Chd"
  }
];

/// load button text functioning
function LOAD() {
  let loadBtnText = loadButton.innerText;
  if (loadBtnText === "LOAD DATA") {
    loadButton.innerHTML = "REFRESH";
    fetchFunc();
  } else {
    loadButton.innerHTML = "LOAD DATA";
    tableBody.innerHTML = "";
  }
}

/// for fetching user data
function fetchFunc() {
  users.forEach((i, j) => {
    tableBody.innerHTML +=
      "<tr id='row" +
      (j + 1) +
      "' " +
      "><th scope='row'>" +
      (j + 1) +
      "</th><td>" +
      i.firstname +
      "</td><td>" +
      i.middlename +
      "</td><td>" +
      i.lastname +
      "</td><td>" +
      i.email +
      "</td><td>" +
      i.phoneNumber +
      "</td><td>" +
      i.role +
      "</td><td>" +
      i.address +
      "</td><td><button onclick='editFunc(" +
      j +
      ");' class='btn btn-primary editBtn'>Edit</button></td><td><button onclick='deleteFunc(" +
      j +
      ");' class='btn btn-danger deleteBtn'>Delete</button></td></tr>";
  });
}

/// for deleting row
function deleteFunc(i) {
  let rowNum = "row" + (i + 1);
  document.getElementById(rowNum).style.display = "none";
}
