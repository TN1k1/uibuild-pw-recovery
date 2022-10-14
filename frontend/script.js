const inputName = document.querySelector("#input-name");

inputName.addEventListener("input", function(event) {

const nameDiv = document.querySelector(".profile > .name > .data");
nameDiv.textContent = event.target.value;

});