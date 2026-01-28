// traemos las ids del html

const btnInicio = document.getElementById("btn-inicio");
const consola = document.getElementById("consola");
const spinner = document.getElementById("spinner");

// funcion para escribir en la "consola" de nuestro html

function escribirConsola(mensaje, esError = false) {
  const p = document.createElement("p");
  p.classList.add(esError ? "error-log" : "success-log");
  p.textContent = `> ${mensaje}`;
  consola.appendChild(p);
  consola.scrollTop = consola.scrollHeight; 
}

// inicializamos pasos para desactivar la bomba

function paso1(callback) {
  escribirConsola("Cortando cable rojo...");
  setTimeout(() => {
    if (Math.random() > 0.5) {
      // 50% de exito
      callback(null, "Cable rojo cortado con éxito ✂️");
    } else {
      callback("BOOM! Cortaste el cable equivocado 💥", null);
    }
  }, 3000);
}

function paso2(callback) {
  escribirConsola("Desactivando sensor de movimiento...");
  setTimeout(() => {
    callback(null, "Sensor Desactivado 🛡️");
  }, 2000);
}

function paso3(callback) {
  escribirConsola("Introduciendo código de anulación...");
  setTimeout(() => {
    callback(null, "Código aceptado ✅");
  }, 4000);
}

function paso4(callback) {
  escribirConsola("Retirando batería principal...");
  setTimeout(() => {
    callback(null, "Bomba totalmente desactivada. ¡Eres un héroe! 🏆");
  }, 2500);
}

// Agregamos evento al hacer click "iniciar desactivacion"

btnInicio.addEventListener("click", () => {
  // limpiamos consola y mostrar spinner
  consola.innerHTML = "<p>> Iniciando secuencia...</p>";
  spinner.classList.remove("d-none");
  btnInicio.disabled = true;

  paso1((error, mensaje) => {
    if (error) {
      escribirConsola(error, true);
      spinner.classList.add("d-none");
      btnInicio.disabled = false;
      return;
    }

    escribirConsola(mensaje);

    paso2((error, mensaje) => {
      escribirConsola(mensaje);

      paso3((error, mensaje) => {
        escribirConsola(mensaje);

        paso4((error, mensaje) => {
          escribirConsola(mensaje);

          spinner.classList.add("d-none");
          btnInicio.disabled = false;
          alert("¡MISIÓN CUMPLIDA! La ciudad está a salvo.");
        });
      });
    });
  });
});
