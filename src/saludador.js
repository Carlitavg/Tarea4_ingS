const nombre = document.querySelector("#nombre");
const saludarButton = document.querySelector("#Saludar_button");
const div = document.querySelector("#saludo");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const idioma = document.querySelector("#idioma");

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
  const idiomaSeleccionado = idioma.value;

  if(idiomaSeleccionado == "Español")
    {

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
    }
    else{
        if (horaActual >= 5 && horaActual < 12) {
            saludoHora = "Good morning";
        } else if (horaActual >= 12 && horaActual < 18) {
            saludoHora = "Good afternoon";
        } else {
            saludoHora = "Good evening";
        }
        
        if (generoSeleccionado === "Masculino") {
            if (edadSaludo <= 30) {
                saludoxEdad = "young man ";
            } else {
                saludoxEdad = "Mr. ";
            }
        } else if (generoSeleccionado === "Femenino") {
            if (edadSaludo <= 30) {
                saludoxEdad = "Miss ";
            } else {
                saludoxEdad = "Mrs. ";
            }
        } else {
            saludoGenero = " ";
        }
        
    }

//   div.innerHTML = "<p>" + "Hola " + nombreSaludo + "</p>";
//   div.innerHTML = "<p>" + saludoHora +", "+ nombreSaludo + "</p>";
//   div.innerHTML = "<p>" + saludoHora +", "+ nombreSaludo + ", genero: "+ saludoGenero + "</p>";
  div.innerHTML = "<p>" + saludoHora +", "+ saludoxEdad + nombreSaludo  + "</p>";
});

