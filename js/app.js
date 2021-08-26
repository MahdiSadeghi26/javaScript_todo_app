// To do App js file!!

// variabls
// note-items access (saved notes)
const noteItems = document.querySelector("#note-items");

// event listeners

// general event listeners function!
eventListeners();
function eventListeners() {
  // form selection and event listener
  document.querySelector("#form").addEventListener("submit", newNote);
}

// functions

// Adding new note to list  (form function)
function newNote(event) {
  event.preventDefault();
  // textarea value access
  const note = document.querySelector("#note").value;

  // create remove button
  const removeBtn = document.createElement("a");
  removeBtn.textContent = "X";
  removeBtn.classList = "remove-btn";

  // li variable (<li> Tag)
  const li = document.createElement("li");

  // adding remove btn to li
  li.appendChild(removeBtn);

  // adding note text to li
  li.appendChild(document.createTextNode(note));
  noteItems.appendChild(li);
}
