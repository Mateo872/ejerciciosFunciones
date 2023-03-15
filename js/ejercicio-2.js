// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let cityArray = [];

do {
  const city = prompt("Ingrese el nombre de una ciudad");
  cityArray.push(city);
} while (confirm("Querés seguir?"));

document.write(cityArray.length);
document.write("<br>");
document.write(
  `${cityArray[0]}, ${cityArray[2]}, ${cityArray[cityArray.length - 1]}`
);
document.write("<br>");
document.write(cityArray.push("París"));
document.write("<br>");
document.write(cityArray[1]);
document.write(cityArray.splice(1, 0, "Barcelona"));
document.write("<br>");

document.write(cityArray);
