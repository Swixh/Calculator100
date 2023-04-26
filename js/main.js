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
  this.placeholderValue = 0;
  this.color = "black";

  let numbers = "";
  let plain = "";
  let nums = [];
  let ops = "";
  this.result = 0;

  this.clear = function () {
    numbers = "";
    nums = [];
    ops = "";
    domScreen.innerText = "0";
    document.querySelector("h2").innerText = ":)";
  };

  this.resulter = function () {
    this.result = doOperation(ops);
    document.querySelector("h2").innerText = this.result;
    document.querySelector(".screen").innerText = this.result;
    setTimeout(() => {
      document.querySelector("h2").innerText = ":)";
    }, 1500);
    nums = [];
    console.log(this.result);
  };

  this.fixer = function (button) {
    plain += button.innerText;
  };

  this.grabNumber = function (value) {
    if (numbers.length >= 10) {
      return;
    }
    numbers += value;
    domScreen.innerText = numbers;
  };

  this.operatorPressed = function (op) {
    if (numbers.length > 0) {
      pushAndRemove();
    }
    ops = op;
  };

  function pushAndRemove() {
    nums.push(+numbers);
    numbers = "";
    domScreen.innerText = "";
  }

  function doOperation(operation) {
    pushAndRemove();
    return eval(plain);
  }

  Object.defineProperty(this, "nums", {
    get: function () {
      return nums;
    },
  });

  Object.defineProperty(this, "ops", {
    get: function () {
      return ops;
    },
  });

  Object.defineProperty(this, "plain", {
    get: function () {
      return plain;
    },
  });
}

const calculator = new Calculator();
domScreen.innerText = calculator.placeholderValue;

clear.addEventListener("click", calculator.clear);
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // if (
    //   button.innerText === "/" ||
    //   button.innerText === "*" ||
    //   button.innerText === "+" ||
    //   button.innerText === "-"
    // ) {
    //   calculator.operatorPressed(button.innerText);
    //   calculator.fixer(button.innerText);
    // } else if (button.innerText === "=") {
    //   calculator.resulter(button.innerText);
    // } else {
    //   // calculator.grabNumber(button.innerText);
    //   calculator.fixer(button.innerText);
    // }
    calculator.fixer(button.innerText);
  });
});
