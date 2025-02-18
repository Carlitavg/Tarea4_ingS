const nombre = document.querySelector("#nombre");
const saludarButton = document.querySelector("#Saludar_button");
const div = document.querySelector("#saludo");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");

saludarButton.addEventListener("click", (event) => {
  event.preventDefault();

  const nombreSaludo = nombre.value;
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  let saludoHora = "";
  let saludoGenero = "";
  let saludoxEdad = "";
  const generoSeleccionado = genero.value;
  const edadSaludo = Number.parseInt(edad.value);

  if (horaActual >= 5 && horaActual < 12) {
    saludoHora = "Buenos días";
  } else if (horaActual >= 12 && horaActual < 18) {
    saludoHora = "Buenas tardes";
  } else {
    saludoHora = "Buenas noches";
  }


  if (generoSeleccionado === "Masculino") {
    if(edadSaludo<=30)
    {
        saludoxEdad = "joven "
    }
    else
    {
        saludoxEdad = "Sr. "
    }

  } else if (generoSeleccionado === "Femenino") {
    if(edadSaludo<=30)
        {
            saludoxEdad = "señorita; "
        }
        else
        {
            saludoxEdad = "Sra. "
        }
  } else {
    saludoGenero = " "; 
  }

//   div.innerHTML = "<p>" + "Hola " + nombreSaludo + "</p>";
//   div.innerHTML = "<p>" + saludoHora +", "+ nombreSaludo + "</p>";
//   div.innerHTML = "<p>" + saludoHora +", "+ nombreSaludo + ", genero: "+ saludoGenero + "</p>";
  div.innerHTML = "<p>" + saludoHora +", "+ saludoxEdad + nombreSaludo  + "</p>";
});

