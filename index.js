/* let x = "John";
let y = "Doe";
console.log(x + " <> " + y);
*/

/* let ganesh = {
  name: "Sai",
  surname: "Devarakonda",
  Email: "ganeshsai1346@gmail.com",
}; */

/* delete ganesh.Email;
console.log(ganesh);
 */

/* let people = [
  "Ganesh",
  "Naveen",
  "Pavan",
  "Shubham",
  "Tiwari",
  "Shabnam",
  "Rohan",
  "Prajakta",
  "Chaitanya",
  "Nikhil",
];

console.log(people); */
let array = [];
while (array.length < 100) {
  const numbers = Math.floor(Math.random() * 100) + 1;
  if (array.indexOf(numbers) === -1) array.push(numbers);
}
console.log(array);

array;
var max = array.reduce(function (x, y) {
  return x > y ? x : y;
});
var min = array.reduce(function (x, y) {
  return x < y ? x : y;
});
console.log("Max: " + max);
console.log("Min: " + min);

/* let arr = [];
for (let i = 0; i < 10; i++) {
  const numbers = Math.floor(Math.random() * 100) + 1;
  arr.push(numbers);
} */

let x = Array(10)
  .fill()
  .map(() =>
    Array(10)
      .fill()
      .map(() => Math.floor(Math.random() * 100))
  );

console.log(x);

//// DOM

//31
/* let getElement = document.getElementById("container"); */

//32
/* let getEverytd = document.querySelectorAll("td");
 */
//33
/* function getData() {
  let getTdData = document.querySelectorAll("td");
  for (let i = 0; i < getTdData.length; i++) {
    console.log(getTdData[i].innerText);
  }
} */
//34
/* function changeHeading() {
  let changeHead = document.querySelector("h1");
  changeHead.innerText = "All exercices";
}
 */

//35
function rowExtra() {
  let addNewRow = document.querySelector("table");
  let addRow = addNewRow.insertRow(4);
  let cellone = addRow.insertCell(0);
  let celltwo = addRow.insertCell(1);
  let cellthree = addRow.insertCell(2);
  let cellfour = addRow.insertCell(3);
}
rowExtra();
//36

function addClass() {
  let addNewClass = document.querySelectorAll("tr");
  for (let i = 0; i < addNewClass.length; i++) {
    let additionClass = document.createElement("tr");
    additionClass.classList.add("test");
  }
}

//37

function changeColor() {
  let changeColorOfLink = document.querySelectorAll("a");
  for (let i = 0; i < changeColorOfLink.length; i++) {
    changeColorOfLink[i].style.backgroundColor = "Red";
  }
}

//38

//39
function addNewItems() {
  let addItems = document.querySelector("ul");
  let items = document.createElement("li");
  items.innerText = "ganesh";
  addItems.appendChild(items);
}

//40
function emptyList() {
  let removeList = document.querySelector("ul");
  removeList[0].remove();
}

function hideImages() {
  let imagesHidden = document.querySelectorAll("img");
  for (let i = 0; i < imagesHidden.length; i++) {
    imagesHidden[i].style.visibility = "hidden";
  }
}

function hideTable() {
  let tableHide = document.querySelector("table");
  tableHide.classList.toggle("hiden");
}
