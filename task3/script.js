let selectedRow = null;

function main() {
  if (validateData()) {
    const getData = getProfile();
    if (selectedRow == null) 
      createProfile(getData);
    else 
      updateProfile(getData);
    clearForm();
  }
}

function getProfile() {
  let getData = {};
  getData["name"] = document.getElementById("name").value;
  getData["surname"] = document.getElementById("surname").value;
  getData["email"] = document.getElementById("email").value;
  return getData;
}

function createProfile(data) {
  let table = document.getElementById("table").getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3),
    cell5 = newRow.insertCell(4),
    cell6 = newRow.insertCell(5);

  cell1.innerHTML = `<input type='checkbox' margin-left='40'/>`;
  cell2.innerHTML = data.name;
  cell3.innerHTML = data.surname;
  cell4.innerHTML = data.email;
  cell5.innerHTML = new Date().toLocaleString();
  cell6.innerHTML = `<a onclick="editProfile(this)">Edit</a> | 
                     <a onclick="deleteProfile(this)">Delete</a>`;
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("email").value = "";
  selectedRow = null;
}

function editProfile(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectedRow.cells[1].innerHTML;
  document.getElementById("surname").value = selectedRow.cells[2].innerHTML;
  document.getElementById("email").value = selectedRow.cells[3].innerHTML;
}

function updateProfile(data) {
  selectedRow.cells[1].innerHTML = data.name;
  selectedRow.cells[2].innerHTML = data.surname;
  selectedRow.cells[3].innerHTML = data.email;
}

function deleteProfile(td) {
  row = td.parentElement.parentElement;
  document.getElementById("table").deleteRow(row.rowIndex);
}

function deleteRows() {
  let rowCount = table.rows.length;
  console.log(rowCount);
  for (let i = 1; i < rowCount; i++) {
    let row = table.rows[i];
    let checkbox = row.cells[0].getElementsByTagName("input")[0];
    if ("checkbox" == checkbox.type && true == checkbox.checked) {
      table.deleteRow(i);
      rowCount--;
      i--;
    }
  }
}

function validateData() {
  if (form.name.value == "") {
    alert("Введіть, будь ласка, Ваше ім'я!");
    return false;
  }

  if (form.surname.value == "") {
    alert("Введіть, будь ласка, Ваше прізвище!");
    form.email.focus();
    return false;
  }

  if (form.email.value == "") {
    alert("Введіть, будь ласка, Ваш емейл!");
    form.email.focus();
    return false;
  }

  const emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (emailFormat.test(form.email.value) == false) {
    alert("Неправильний формат емейлу!");
    form.email.focus();
    return false;
  }

  return true;
}
