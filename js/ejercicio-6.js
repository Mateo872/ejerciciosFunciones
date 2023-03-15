// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

const num1 = +prompt("Ingrese el valor de un lado del rectángulo");
const num2 = +prompt("Ingrese el valor del otro lado del rectángulo");

function rectanglePer(num1, num2) {
  document.write((per = 2 * (num1 + num2)));
}

rectanglePer(num1, num2);
