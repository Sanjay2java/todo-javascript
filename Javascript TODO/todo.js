let userInput = document.getElementById("input");
let clickButton = document.getElementById("button");
let display = document.getElementById("show");

let obj = [];

clickButton.addEventListener("click", () => {
  obj.push(userInput.value);
  show(userInput.value);
  userInput.value = "";
});
function show(e) {
  let create = document.createElement("p");
  create.innerHTML = e;
  localStorage.setItem("obj", JSON.stringify(obj));
  display.appendChild(create);
  create.addEventListener("click", () => {
    create.style.textDecoration = "line-through";
    remove(e);
  });

  create.addEventListener("dblclick", () => {
    display.removeChild(create);
    remove(e);
  });
}

function remove(e) {
  let index = obj.indexOf(e);
  if (index > -1) obj.splice(index, 1);
}
