//create a variable to monitor the input checkbox
const colorSwitch = document.getElementById("input-color-switch");

//when the input is clicked verify the state of the checkbox
colorSwitch.addEventListener("click", checkMode);

//1. see which state the checkbox is in
//2. if it is checked enable the dark mode by adding the class
//3. if it is not checked remove dark mode by removing the class
function checkMode() {
  console.log("checking...");
  if (colorSwitch.checked) {
    console.log("dark on");
    darkModeOn();
  } else {
    console.log("dark off");
    darkModeOff();
  }
}

function darkModeOn() {
  document.body.classList.add("dark-mode");
}

function darkModeOff() {
  document.body.classList.remove("dark-mode");
}

// function update() {
//   const elem = document.getElementsByClassName("bottomSection_card");
//   for (let i = 0; i < elem.length; i++) {
//     elem[i].classList.add("animate__animated", "animate__flipInX");
//   }
//   setTimeout(function () {
//     deselect();
//   }, 1000);
// }

// function deselect() {
//   const elem = document.getElementsByClassName("bottomSection_card");
//   for (let i = 0; i < elem.length; i++) {
//     elem[i].classList.remove("animate__animated", "animate__flipInX");
//   }
// }

// elem.classList.add("animate__animated", "animate__flipInX");
