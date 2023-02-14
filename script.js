var temperatura = document.getElementById('temperatura');

function convertToF(temperatura) {
  //let temperatura = document.getElementById("temperatura").value;
  let farenheit = 1.8 * temperatura.value + 32;

  let textoResult =
    "A temperatura " +
    temperatura +
    "°C é " +
    farenheit.toFixed(2).replace(".", ",") +
    "F";
  console.log(textoResult);

  document.getElementsByTagName("p")[0].innerHTML = textoResult;
}

function convertToC() {
  // Pegando o valor do input
  let temperatura = document.getElementById("temperatura").value;

  // Fórmula que calcula a temperatura para Celsius
  let celsius = (temperatura - 32) * (5 / 9);

  // O texto do resultado da conversão para Celsius
  let textoResult =
    "A temperatura Farenheit " +
    temperatura +
    "°F é " +
    celsius.toFixed(2).replace(".", ",") +
    "°C";
  document.getElementsByTagName("p")[0].innerHTML = textoResult;
}

function limpar() {
  document.getElementsByTagName("p")[0].innerHTML = "";
}
