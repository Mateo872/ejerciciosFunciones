// 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

const number = +prompt("Ingrese un número");

function num(num) {
  for (let i = 1; i < 11; i++) {
    document.write(`${num * i} <br>`);
  }
}

num(number);
