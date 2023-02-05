const formElement = document.querySelector("form");
const resultElement = document.querySelector(".result");

formElement.addEventListener("submit", calculateIMC);

function calculateIMC(event) {
  event.preventDefault();

  const weight = parseFloat(formElement.weight.value);
  const height = parseFloat(formElement.height.value);

  const imc = weight / (height * height);

  let classification = "";
  if (imc < 18.5) {
    classification = "abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    classification = "no peso ideal";
  } else if (imc >= 25 && imc < 30) {
    classification = "acima do peso";
  } else if (imc >= 30) {
    classification = "obeso";
  }

  resultElement.innerHTML = `Seu IMC é de ${imc.toFixed(2)} e você está ${classification}.`;
}