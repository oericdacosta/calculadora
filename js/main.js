let outPut = document.querySelector("#numero-digitado");
let result = document.querySelector("#numero-resultado");
let reset = 0;
let reg = new RegExp("^\\d+$");

function main() {
  let buttons = document.querySelectorAll(".btn");

  for (let btn of buttons) {
    btn.addEventListener("click", btnPress);
  }
}
main();

function btnPress() {
  reset = 0;
  let input = this.textContent;

  if (reset && reg.test(input)) outPut.textContent = "0";

  if (input === "AC") clearValues();

  if(!reg.test(input) && outPut.textContent === "" && input !== "="){
    outPut.textContent = result.textContent + ` ${input} `;
  }

  if (input === "=") resolution();

  if (checkLastDigit(input)) return false;

  if (!reg.test(input)) input = ` ${input} `;

  if (outPut.textContent === "0") {
    if (reg.test(input)) {
      outPut.textContent = input;
    }
  } else {
    outPut.textContent += input;
  }
}

function clearValues() {
  outPut.textContent = "0";
  result.textContent = "0";
}

function checkLastDigit(input) {
  return (
    !reg.test(input) &&
    !reg.test(outPut.textContent.substring(outPut.textContent.length - 1))
  );
}

function resolution() {

    if(!outPut.textContent.includes("x") && !outPut.textContent.includes("/") 
    && !outPut.textContent.includes("-") && !outPut.textContent.includes("+")){
        outPut.textContent = input;
    }

  if (outPut.textContent.includes("x")) {
    outPut.textContent = outPut.textContent.replace("x", "*");
  }

  if (reset) outPut.textContent = "0";
  
  let conta = eval(outPut.textContent);
  if (conta) reset = 1;

  refreshValues(conta);
}

function refreshValues(conta) {
  if (conta) {
    outPut.textContent = outPut.textContent.slice(
      outPut.textContent.indexOf(`${conta}`),2);
    result.textContent = conta;
  }
}
