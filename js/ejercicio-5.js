// 2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

const string = prompt("Ingrese una cadena de texto");

function info(string) {
  if (string === string.toUpperCase()) {
    console.log("Mayúsculas");
  } else if (string === string.toLowerCase()) {
    console.log("Minúsculas");
  } else {
    console.log("Ambas");
  }
}

info(string);
