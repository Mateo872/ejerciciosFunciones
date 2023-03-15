// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

function dado() {
  let array = [];

  for (let i = 0; i < 50; i++) {
    let num1 = Math.floor(Math.random() * (5 + 1) + 1);
    let num2 = Math.floor(Math.random() * (5 + 1) + 1);
    let sum = num1 + num2;
    array.push(sum);
    document.write(`${array} <br>`);
  }
}

dado();
