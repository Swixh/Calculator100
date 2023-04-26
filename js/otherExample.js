let exp = "";

let butt2 = document.querySelectorAll(".button");
const equalSign = document.querySelector(".equals");

butt2.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerText === "=") return;
    exp += button.textContent;
    // console.log(exp);
  });
});

equalSign.addEventListener("click", () => console.log(eval(exp)));
