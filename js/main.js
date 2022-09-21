//Defino los equipos y pido por prompt los nombres.
let equipoLocal = prompt("Ingrese el nombre del equipo local...");
let equipoVisitante = prompt("Ahora, ingrese el nombre del equipo visitante.");

//defino el contador de los equipos; y los inicializo en 0
let local = 0;
let visitante = 0;

//voy a usar una bandera "ganador". arranca en false.
let ganador = false;

//defino el contador en 0; para que empiece a incrementar en la primera tanda de penales
let ronda = 0;

// inicializo tiro
//defino los posibles valores del penal = 1(GOL) o 2(NO GOL).
// para eso, voy a usar 'tiro = Math.ceil(Math.random() * 2)'
let tiro;

//defino la funcion patear (local y visitante):
function pateaLocal() {
  document.write('<div class="row row-cols-12 row-cols-md-4">');
  tiro = Math.ceil(Math.random() * 2);
  if (tiro === 1) {
    local += 1;
    document.write(
      '<div class="col"> <div class="card"> <img src="img/gol.png"  alt="..."> <div class="card-body"><h5 class="card-title">Patea '
    );
    document.write(
      equipoLocal + '...</h5><p class="card-text">Gol!</p></div></div></div>'
    );
  } else {
    document.write(
      '<div class="col"> <div class="card"> <img src="img/nogol.png"  alt="..."> <div class="card-body"><h5 class="card-title">Patea '
    );
    document.write(
      equipoLocal + '...</h5><p class="card-text">Afuera!</p></div></div></div>'
    );
  }
}

function pateaVisitante() {
  tiro = Math.ceil(Math.random() * 2);
  if (tiro === 1) {
    visitante += 1;
    document.write(
      '<div class="col"> <div class="card"> <img src="img/gol.png"  alt="..."> <div class="card-body"><h5 class="card-title">Patea '
    );
    document.write(
      equipoVisitante +
        '...</h5><p class="card-text">Gol!</p></div></div></div>'
    );
  } else {
    document.write(
      '<div class="col"> <div class="card"> <img src="img/nogol.png"  alt="..."> <div class="card-body"><h5 class="card-title">Patea '
    );
    document.write(
      equipoVisitante +
        '...</h5><p class="card-text">Afuera!</p></div></div></div>'
    );
  }
}

//Cómo compruebo si hay ganador?
// condiciones:
// ronda tiene que ser 3 o más; no se puede ganar en menos de 3 rondas
// si ronda es 3, y diferencia es 3; hay ganador.
// si ronda es 4 y diferencia es 2, hay ganador
// si ronda es 5 y diferencia es 1, hay ganador (OJO! VER CUÁNDO CAMBIA LA RONDA Y CUANDO COMPRUEBO)
// si ronda es >5, y diferencia es 1, hay ganador.
function comprobarGanador() {
  if (ronda >= 3) {
    if (ronda === 3 && (local - visitante >= 3 || visitante - local >= 3)) {
      ganador = true;
    } else if (
      ronda === 4 &&
      (local - visitante >= 2 || visitante - local >= 2)
    ) {
      ganador = true;
    } else if (
      ronda >= 5 &&
      (local - visitante >= 1 || visitante - local >= 1)
    ) {
      ganador = true;
    }
  }
}

function anunciarGanador() {
  if (local > visitante) {
    document.write("<h1> Ganó " + equipoLocal + "!!!</h1>");
  } else {
    document.write("<h1> Ganó " + equipoVisitante + "!!!</h1>");
  }
}

//EMPIEZA LA DEFINICIÓN:
while (ganador == false) {
  //patea local
  pateaLocal();

  //patea visitante:
  pateaVisitante();

  //actualizo el contador de la tanda
  ronda += 1;

  //compruebo si hay ganador.
  //Al menos, se van a jugar 3 tandas, no se puede ganar antes de la 3ra tanda.

  comprobarGanador();

  document.write("</div>");
  document.write(
    "<h5> Restulado Parcial. Tanda nro " +
      ronda +
      ": " +
      equipoLocal +
      " " +
      local +
      "  -  " +
      visitante +
      " " +
      equipoVisitante +
      "</h5>"
  );
  document.write("<br>");
}

anunciarGanador();
