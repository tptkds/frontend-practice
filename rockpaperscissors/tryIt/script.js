const computerChoice = document.querySelector(".computer-choice");
const youChoice = document.querySelector(".you-choice");
const btns = document.querySelectorAll("button");
const result = document.querySelector(".result");
const comResults = ["가위", "바위", "보"];

function show(myChoice, comChoice, result1) {
  computerChoice.innerText = comChoice;
  youChoice.innerText = myChoice;
  result.innerText = result1;
}

function game(myChoice, comChoice) {
  if (myChoice === comChoice) {
    show(myChoice, comChoice, "무승부");
  } else {
    switch (myChoice + comChoice) {
      case "가위보":
      case "바위가위":
      case "보바위":
        show(myChoice, comChoice, "이겼다");
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        show(myChoice, comChoice, "졌다");
        break;
    }
  }
}

function play(event) {
  const myChoice = event.target.innerText;
  const comChoice = comResults[Math.floor(Math.random() * 3)];

  game(myChoice, comChoice);
}

btns.forEach((btn) => {
  btn.addEventListener("click", play);
});
