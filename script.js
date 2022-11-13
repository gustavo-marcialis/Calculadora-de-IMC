function imc() {
var peso = document.getElementById("peso").value;
var altura = document.getElementById("altura").value;

var total = peso/(altura*altura);

var resultado = document.getElementById("resultado").innerHTML= "IMC: "+total.toFixed(2);
}