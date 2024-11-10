/* Task 1 */
const fullNameRegex = /^[А-Яа-яЇїІіЄєҐґ]+ [А-ЯЇІЄҐ]\.[А-ЯЇІЄҐ]\.$/;
const idCardRegex = /^[А-ЯЇІЄҐ]{2} №\d{6}$/;
const dobRegex = /^\d{2}\.\d{2}\.\d{4}$/;
const addressRegex = /^м\.\s?[А-Яа-яЇїІіЄєҐґ]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateField(field, regex) {
  if (regex.test(field.value.trim())) {
    field.classList.remove("error");
    return true;
  } else {
    field.classList.add("error");
    return false;
  }
}

function validateForm() {
  const fullName = document.getElementById("fullName");
  const idCard = document.getElementById("idCard");
  const dob = document.getElementById("dob");
  const address = document.getElementById("address");
  const email = document.getElementById("email");

  const isFullNameValid = validateField(fullName, fullNameRegex);
  const isIdCardValid = validateField(idCard, idCardRegex);
  const isDobValid = validateField(dob, dobRegex);
  const isAddressValid = validateField(address, addressRegex);
  const isEmailValid = validateField(email, emailRegex);

  if (isFullNameValid && isIdCardValid && isDobValid && isAddressValid && isEmailValid) {
    alert(`Інформація введена коректно:\n\nПІБ: ${fullName.value}\nID-карта: ${idCard.value}\nДата народження: ${dob.value}\nАдреса: ${address.value}\nE-mail: ${email.value}`);
  } else {
    alert("Будь ласка, перевірте правильність заповнення полів.");
  }
}

/* Task 2 */
const table = document.getElementById("table");
const colorPicker = document.getElementById("colorPicker");

const cellWithNumber2 = [...table.getElementsByTagName("td")].find(cell => cell.textContent === "2");

cellWithNumber2.addEventListener("mouseover", () => {
  cellWithNumber2.style.backgroundColor = getRandomColor();
});

cellWithNumber2.addEventListener("click", () => {
  cellWithNumber2.style.backgroundColor = colorPicker.value;
});

cellWithNumber2.addEventListener("dblclick", () => {
  const colIndex = cellWithNumber2.cellIndex;
  changeColumnColor(colIndex, colorPicker.value);
});


function changeColumnColor(colIndex, color) {
  for (let row of table.rows) {
    row.cells[colIndex].style.backgroundColor = color;
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
