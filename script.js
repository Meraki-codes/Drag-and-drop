const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".list");

/* cards.forEach((card) => {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
});

lists.forEach((list) => {
  list.addEventListener("dragover", dragOver);
  list.addEventListener("dragleave", dragLeave);
  list.addEventListener("drop", drop);
});

function dragStart(e) {
  e.dataTransfer.setData("text", e.target.id);
  setTimeout(() => e.target.classList.add("dragging"), 0);
}

function dragEnd(e) {
  e.target.classList.remove("dragging");
}

function dragOver(e) {
  e.preventDefault();
  e.target.classList.add("over");
}

function dragLeave(e) {
  e.target.classList.remove("over");
}

function drop(e) {
  e.target.classList.remove("over");
  const id = e.dataTransfer.getData("text");
  const draggingElement = document.getElementById(id);
  e.target.appendChild(draggingElement);
} */

for (const card of cards) {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
}

for (const list of lists) {
  list.addEventListener("dragover", dragOver);
  list.addEventListener("dragenter", dragEnter);
  list.addEventListener("dragleave", dragLeave);
  list.addEventListener("drop", dragDrop);
}

function dragStart(e) {
  e.dataTransfer.setData("text/plain", this.id);
}

function dragEnd() {
  console.log("Drag ended");
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();

  this.classList.add("over");
}

function dragLeave(e) {
  this.classList.remove("over");
}

function dragDrop(e) {
  const id = e.dataTransfer.getData("text/plain");

  const card = document.getElementById(id);

  this.appendChild(card);

  this.classList.remove("over");
}
