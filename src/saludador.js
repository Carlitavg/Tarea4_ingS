const nombre = document.querySelector("#nombre");
const saludarButton = document.querySelector("#Saludar_button");
const div = document.querySelector("#saludo");

saludarButton.addEventListener("click", (event) => {
  event.preventDefault();

  const nombreSaludo = nombre.value;
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  let saludoHora = "";

  if (horaActual >= 5 && horaActual < 12) {
    saludoHora = "Buenos días";
  } else if (horaActual >= 12 && horaActual < 18) {
    saludoHora = "Buenas tardes";
  } else {
    saludoHora = "Buenas noches";
  }

  div.innerHTML = "<p>" + "Hola " + nombreSaludo + "</p>";
  div.innerHTML = "<p>" + saludoHora +", "+ nombreSaludo + "</p>";
});

