const domScreen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".button");
const clear = document.querySelector(".clear");
const letters = document.querySelectorAll(".l,.o,.e,.n");
const img = document.querySelector("img");
let leonSaying = document.querySelector(".cameo p");

// LEON SECRET //
letters.forEach((letter) => {
  letter.addEventListener("click", () => {
    if (
      !img.classList.contains("moveup") &&
      leonSaying.classList.contains("hide")
    ) {
      img.classList.add("moveup");
      setTimeout(() => {
        leonSaying.classList.toggle("hide");
      }, 1000);
    } else {
      img.classList.toggle("moveup");
      leonSaying.classList.toggle("hide");
    }
  });
});
/////////////////////////////////////////////

document.querySelector("h2").innerText = ":)";

// //////////////////////////////////////////////////////////////////

function Calculator() {
  this.start = function () {
    let nums = [];
    domScreen.innerText = 0;
    let buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => addListener(button));
  };

  function solveAdd() {}

  function solveMultiply() {}

  function solveDivision() {}

  function solveSubtract() {}

  function addListener(button) {
    button.addEventListener("click", () => {});
  }
}

const calc = new Calculator();
calc.start();
