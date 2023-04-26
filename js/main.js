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

function Calculator() {
  let values = "";
  let holder = "";
  let maxAmountOfValues = 10;
  this.count = 0;

  this.shape = "rectangle";
  this.color = "black";

  this.addADigit = function (value) {
    values += value;
    this.count += 1;
    showOnScreen();
  };

  function showOnScreen() {
    domScreen.innerText = values;
  }

  function showSmiliesResult(result) {
    document.querySelector("h2").innerText = result;
    setTimeout(() => {
      document.querySelector("h2").innerText = ":)";
    }, 2000);
  }

  this.reset = function () {
    values = "";
    this.count = 0;
    domScreen.innerText = "";
  };

  this.calculate = function () {
    let result;
    try {
      result = eval(values);
      domScreen.innerText = result;
      showSmiliesResult(result);
      setTimeout(() => {
        this.reset();
      }, 2000);
    } catch (error) {
      alert("You can't do that: " + error);
      this.reset();
    }
  };
}

const calc = new Calculator();

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.innerText !== "=") {
      calc.addADigit(button.innerText);
    } else {
      calc.calculate();
    }
  });
});

clear.addEventListener("click", () => calc.reset());
