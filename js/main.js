const domScreen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".button");
const clear = document.querySelector(".clear");
const letters = document.querySelectorAll(".l,.o,.e,.n");
const img = document.querySelector("img");
let leonSaying = document.querySelector(".cameo p");
document.querySelector("h2").innerText = ":)";

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

function Calculator() {
  let values = "";
  let maxAmountOfValues = 10;
  this.count = 0;

  this.shape = "rectangle";
  this.color = "black";

  this.numberToAdd = function (value) {
    values += value;
    this.count += 1;
  };

  this.reset = function () {
    values = "";
    this.count = 0;
  };

  this.calculate = function () {
    return eval(values);
  };
}

const calculator = new Calculator();
