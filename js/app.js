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
  // get data from  localStorage on loaded
  document.addEventListener("DOMContentLoaded", localStorageOnLoad());
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

  // adding remove btn to li
  li.appendChild(removeBtn);

  // adding note text to li
  li.appendChild(document.createTextNode(note));
  noteItems.appendChild(li);
  // validating textnote length
  // note empty string validation
  if (li.textContent.length === 1) {
    li.remove();
    // text area
    const note = document.querySelector("#note");
    note.classList.add("note-validation");
    const noteForm = document.querySelector("#form");
    // warning Message when validation is falid
    const warningMessage = document.createElement("p");
    warningMessage.textContent = "لطفا مقدار خالی نفرستید...";
    warningMessage.style.color = "#f44336";
    warningMessage.style.textShadow = "none";

    noteForm.appendChild(warningMessage);
    return
  }
  addToLocalStorage(note);
  // new note alert
  alert("یادداشت با موفقیت اضافه شد")
  // reseting text area after submit
  this.reset()
}
// remove note
function removeNote(event) {
  if (event.target.classList.contains("remove-btn")) {
    event.target.parentElement.remove();
  }
  // also remove from localstorage
  removeFromLocalStorage(event.target.parentElement.textContent);
}
// add notes to local storage
function addToLocalStorage(note) {
  // get to local Storage and read notes
  const notes = getNotesFromLocalStorage();
  // pushing new note to the notes array
  notes.push(note);
  // adding new notes array to localStorage
  localStorage.setItem("notes", JSON.stringify(notes));
}
// get noes from localStorage
function getNotesFromLocalStorage() {
  let notes;
  // get previous notes on local storage
  let getFromLS = localStorage.getItem("notes");
  if (getFromLS === null) {
    // if note exist create empty array
    notes = [];
  }
  // other wise convert value to array
  else {
    notes = JSON.parse(getFromLS);
  }
  return notes;
}
// get localStorage data on load
function localStorageOnLoad() {
  const notes = getNotesFromLocalStorage();

  // print each items of array
  notes.forEach(note => {
    // create remove button
    const removeBtn = document.createElement("a");
    removeBtn.textContent = "X";
    removeBtn.classList = "remove-btn";
    

    // li variable (<li> Tag)
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(note));

    // adding remove btn to li
    li.appendChild(removeBtn);

    // adding note text to li
    noteItems.appendChild(li);
  });
}
// remove note from local storage
function removeFromLocalStorage(noteContent) {
  // delete remove button from content
  const noteDelete = noteContent.substring(0, noteContent.length -1)

  // get notes from LocalStorage
  const notesFromLS = getNotesFromLocalStorage();

  // iterating the array with for each
  notesFromLS.forEach((note, index) => {
    if (note === noteDelete) {
      notesFromLS.splice(index, 1);
    }
  });
  // set new array of notes after remove to localStorage
  localStorage.setItem("notes", JSON.stringify(notesFromLS));
}
