// To do App js file!!

// variabls
// note-items access (saved notes)
const noteItems = document.querySelector("#note-items");

// event listeners

// general event listeners function!
eventListeners();
function eventListeners() {
  // form submission and adding new note
  document.querySelector("#form").addEventListener("submit", newNote);
  // selecting remove button and adding event listener
  document.querySelector("#note-items").addEventListener("click", removeNote);
}

// functions
// adding note
function newNote(event) {
  event.preventDefault();
  // textarea value access
  const note = document.querySelector("#note").value;

  // li variable (<li> Tag)
  const li = document.createElement("li");

  // create remove button
  const removeBtn = document.createElement("a");
  removeBtn.textContent = "X";
  removeBtn.classList = "remove-btn";
  removeBtn.id = "remove-Button";

  // adding remove btn to li
  li.appendChild(removeBtn);

  // adding note text to li
  li.appendChild(document.createTextNode(note));
  noteItems.appendChild(li);
  // validating textnote length
  if (li.textContent.length === 1) {
    li.remove();
  }
  addToLocalStorage();
}
// remove note
function removeNote(event) {
  if (event.target.classList.contains("remove-btn")) {
    event.target.parentElement.remove();
  }
}
// add notes to local storage
function addToLocalStorage() {
  // get to local Storage and read notes
  const notes = getFromLocalStorage();
}
// get noes from localStorage
function getFromLocalStorage() {
  let notes;
  let getFromLS = localStorage.getItem("notes");
  if (getFromLS === null) {
    note = [];
  } else {
    notes = JSON.parse(getFromLS);
  }
  return notes;
}
