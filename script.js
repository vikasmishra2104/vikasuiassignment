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
    email: "vikas@gmail.com",
    phoneNumber: "9876543210",
    role: "Trainee-Tester",
    address: "BH3, PU, Chd"
  },
  {
    firstname: "rakesh",
    middlename: "Kumar",
    lastname: "oberoi",
    email: "rkq@gmail.com",
    phoneNumber: "9323234220",
    role: "Trainee-Developer",
    address: "BH4, PU, Chd"
  },
  {
    firstname: "rajshree",
    middlename: "",
    lastname: "bhardwaj",
    email: "rajshree412@gmail.com",
    phoneNumber: "9312325430",
    role: "Trainee-Tester",
    address: "gh2, PU, Chd"
  },
  {
    firstname: "akash",
    middlename: "Kumar",
    lastname: "mishra",
    email: "akash.9@gmail.com",
    phoneNumber: "9623737270",
    role: "Trainee-Developer",
    address: "Bh5, PU, Chd"
  },
  
];

/// for fetching user data
function fetchFunc() {
  users.forEach((i, j) => {
    tableBody.innerHTML +=
      "<tr id='row" +
      (j + 1) +
      "' " +
      "><th scope='row'>" +
      (j + 1) +
      "</th><td><input value='" +
      i.firstname +
      "' name='fname' disabled /></td><td><input value='" +
      i.middlename +
      "' name='mname' disabled /></td><td><input value='" +
      i.lastname +
      "' name='lname' disabled /></td><td><input value='" +
      i.email +
      "' name='email' disabled /></td><td><input value='" +
      i.phoneNumber +
      "' name='number' disabled /></td><td><input value='" +
      i.role +
      "' name='role' disabled /></td><td><input value='" +
      i.address +
      "' name='address' disabled /></td><td><button onclick='EDIT(" +
      j +
      ");' class='btn btn-primary editBtn'>Edit</button></td><td><button onclick='DELETE(" +
      j +
      ");' class='btn btn-danger deleteBtn'>Delete</button></td></tr>";
  });
}

/// load button text functioning
function LOAD() {
  let loadBtnText = $("#loadBtn").text();
  if (loadBtnText === "LOAD DATA") {
    loadButton.innerHTML = "REFRESH";
    fetchFunc();
  } else {
    loadButton.innerHTML = "LOAD DATA";
    tableBody.innerHTML = "";
  }
}

/// delete button text functioning
function DELETE(index) {
  let rowNum = "row" + (index + 1);
  let deleteBtnText = $("#" + rowNum + " .deleteBtn").text();
  if (deleteBtnText === "Cancel") {
    cancelFunc(index);
  } else {
    deleteFunc(index);
  }
}

/// edit button text functioning
function EDIT(index) {
  let rowNum = "row" + (index + 1);
  let editBtnText = $("#" + rowNum + " .editBtn").text();
  if (editBtnText === "Save") {
    saveFunc(index);
  } else {
    editFunc(index);
  }
}

/// for deleting row
function deleteFunc(index) {
  let rowNum = "row" + (index + 1);
  document.getElementById(rowNum).style.display = "none";
}

/// for canceling the editing
function cancelFunc(index) {
  let rowNum = "row" + (index + 1);
  $("#" + rowNum + " .deleteBtn").text("Delete");
  $("#" + rowNum + " .editBtn").text("Edit");
  $("#" + rowNum + " input[name=fname]").val(users[index].firstname);
  $("#" + rowNum + " input[name=mname]").val(users[index].middlename);
  $("#" + rowNum + " input[name=lname]").val(users[index].lastname);
  $("#" + rowNum + " input[name=email]").val(users[index].email);
  $("#" + rowNum + " input[name=number]").val(users[index].phoneNumber);
  $("#" + rowNum + " input[name=role]").val(users[index].role);
  $("#" + rowNum + " input[name=address]").val(users[index].address);
  $("#" + rowNum + " input").attr("disabled", "true");
}

/// for editing the text boxes
function editFunc(index) {
  let rowNum = "row" + (index + 1);
  $("#" + rowNum + " .editBtn").text("Save");
  $("#" + rowNum + " .deleteBtn").text("Cancel");
  $("#" + rowNum + " input").removeAttr("disabled");
}

/// for saving the text
function saveFunc(index) {
  let rowNum = "row" + (index + 1);
  $("#" + rowNum + " .deleteBtn").text("Delete");
  $("#" + rowNum + " .editBtn").text("Edit");
  $("#" + rowNum + " input").attr("disabled", "true");
}
