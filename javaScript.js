var currentSelectedRow = 0;
var nameMessage = document.getElementById('nameMessage');
var companyMessage = document.getElementById('companyMessage');
var companyName = document.getElementById('name');
var companyAddress = document.getElementById('company');
var errorMsg1 = document.getElementsByClassName('errorMsg1');
var errorMsg2 = document.getElementsByClassName('errorMsg2');

function userInputData() {
  var id1 = document.getElementById('myTable').children.length;
  var name1 = document.getElementById('name').value;
  var company1 = document.getElementById('company').value;
  var formData = [id1, name1, company1];
  return formData;
}

function validation() {
  debugger
  var text = document.getElementById("add").textContent;
  var userGivenData = userInputData();
  debugger;
  if (companyName.value =="" && companyAddress.value =="") {
    nameMessage.innerHTML ="Please fill out this field.";
    companyMessage.innerHTML ="Please fill out this field.";
  }
  else if (companyName.value === "") {
    nameMessage.innerHTML ="Please fill out this field.";
    companyMessage.innerHTML ="";
  }
  else if (companyAddress.value ==="") {
    companyMessage.innerHTML ="Please fill out this field.";
    nameMessage.innerHTML = "";
  }
  else if ("Add" === text){
    nameMessage.innerHTML = "";
    companyMessage.innerHTML = "";
    addRow(userGivenData);
    jsonPostFunction(this);
  }
  else if ("Update" === text) {
    nameMessage.innerHTML = "";
    companyMessage.innerHTML = "";
    jsonUpdate(this);
  }
  emptyValue();
  reload();
}

function addRow(userGivenData) {
  debugger
  var row = document.createElement('div');
  row.id = row;
  row.className = "row";
  document.getElementById('myTable').appendChild(row);

  var column1 = document.createElement('div');
  column1.id = 'column1';
  column1.innerHTML = userGivenData[0];
  document.getElementById(row).appendChild(column1);

  var column2 = document.createElement('div');
  column2.id = 'column2';
  column2.innerHTML = userGivenData[1];
  document.getElementById(row).appendChild(column2);

  var column3 = document.createElement('div');
  column3.id = 'column3';
  column3.innerHTML = userGivenData[2];
  document.getElementById(row).appendChild(column3);

  var column4 = document.createElement('div');
  column4.id = 'column4';
  column4.innerHTML = `<button class="delete-button" id='deleteButton' onclick='deleteRow(this)'>Delete</button>`;
  document.getElementById(row).appendChild(column4);
  
  // column1.addEventListener('click', editTask);
  // column2.addEventListener('click', editTask);
  // column3.addEventListener('click', editTask);
  // column4.addEventListener('click', deleteRow);
}

// function editTask(event) {
//   debugger;
//   var idInput = document.getElementById('id');
//   idInput.style.display = 'block';
//   var selectedRow = event.target.parentElement;
//   selectedRow.style.fontStyle = "italic";
//   currentSelectedRow = event.target.parentElement.id;
//   document.getElementById("id").value = selectedRow.childNodes[0].innerHTML;
//   document.getElementById("name").value = selectedRow.childNodes[1].innerHTML;
//   document.getElementById("company").value = selectedRow.childNodes[2].innerHTML;

//   var text = document.getElementById('add');
//   text.textContent = 'Update';
// }

// function updateRecord() {
//   debugger;
//   var selectedRow = document.querySelectorAll('.row');
//   var id = document.getElementById("id").value;
//   var name = document.getElementById("name").value;
//   var company = document.getElementById("company").value;

//   selectedRow[currentSelectedRow-1].childNodes[0].innerText = id;
//   selectedRow[currentSelectedRow-1].childNodes[1].innerText = name;
//   selectedRow[currentSelectedRow-1].childNodes[2].innerText = company;
  
//   var text = document.getElementById('add');
//   text.textContent = 'Add';
//   emptyValue();
// }

function emptyValue() {
  document.getElementById('id').value = "";
  document.getElementById('name').value = "";
  document.getElementById('company').value = "";
}

function deleteRow(event) {
  debugger;
  var deleteId = event.id;
  jsonDelete(deleteId);
}

function cancelButton() {
  document.getElementById('id').value = "";
  document.getElementById('name').value = "";
  document.getElementById('company').value = "";
}


document.getElementById("addNew").addEventListener("click", () => {
  window.location.reload();
  // document.getElementById("name").focus();
});
