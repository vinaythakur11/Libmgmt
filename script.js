function addBook() {
  const bookName = document.getElementById("bookName").value.trim();
  const bookID = document.getElementById("bookID").value.trim();
  const authorName = document.getElementById("authorName").value.trim();
  const status = document.getElementById("status").value;
  const cardID = document.getElementById("cardID").value.trim();

  if (!bookName || !bookID || !authorName || !cardID) {
    alert("Please fill all fields!");
    return;
  }

  const tableBody = document.querySelector("#inventoryTable tbody");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${bookName}</td>
    <td>${bookID}</td>
    <td>${authorName}</td>
    <td>${status}</td>
    <td>${cardID}</td>
  `;

  tableBody.appendChild(newRow);
  clearForm();
}

function clearForm() {
  document.getElementById("bookName").value = '';
  document.getElementById("bookID").value = '';
  document.getElementById("authorName").value = '';
  document.getElementById("status").value = 'Available';
  document.getElementById("cardID").value = '';
}

function deleteBook() {
  const tableBody = document.querySelector("#inventoryTable tbody");
  if (tableBody.rows.length > 0) {
    tableBody.deleteRow(tableBody.rows.length - 1);
  } else {
    alert("No records to delete.");
  }
}

function clearInventory() {
  const tableBody = document.querySelector("#inventoryTable tbody");
  tableBody.innerHTML = '';
}