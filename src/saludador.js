const nombre = document.querySelector("#nombre");
const saludarButton = document.querySelector("#Saludar_button");
const div = document.querySelector("#saludo");
const genero = document.querySelector("#genero");


saludarButton.addEventListener("click", (event) => {
  event.preventDefault();

  const nombreSaludo = nombre.value;
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  let saludoHora = "";
  let saludoGenero = "";
  const generoSeleccionado = genero.value;

  if (horaActual >= 5 && horaActual < 12) {
    saludoHora = "Buenos días";
  } else if (horaActual >= 12 && horaActual < 18) {
    saludoHora = "Buenas tardes";
  } else {
    saludoHora = "Buenas noches";
  }


  if (generoSeleccionado === "Masculino") {
    saludoGenero = "hombre";
  } else if (generoSeleccionado === "Femenino") {
    saludoGenero = "mujer";
  } else {
    saludoGenero = "persona"; 
  }

//   div.innerHTML = "<p>" + "Hola " + nombreSaludo + "</p>";
//   div.innerHTML = "<p>" + saludoHora +", "+ nombreSaludo + "</p>";
  div.innerHTML = "<p>" + saludoHora +", "+ nombreSaludo + ", genero: "+ saludoGenero + "</p>";
});

