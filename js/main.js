//defino los dos equipo; y los inicializo en 0
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

//Cómo compruebo si hay ganador?
// condiciones:
// ronda tiene que ser 3 o más; no se puede ganar en menos de 3 rondas
// si ronda es 3, y diferencia es 3; hay ganador.
// si ronda es 4 y diferencia es 2, hay ganador
//si ronda es 5 y diferencia es 1, hay ganador (OJO! VER CUÁNDO CAMBIA LA RONDA Y CUANDO COMPRUEBO)
// si ronda es >5, y diferencia es 1, hay ganador.

//EMPIEZA LA DEFINICIÓN:
while (ganador == false) {
    document.write('<div class="row row-cols-4">')
  //tira local:
  tiro = Math.ceil(Math.random() * 2);
  console.log("Patea el equipo local...");
  if (tiro === 1) {
    local += 1;
    console.log("Gol!!!")
    document.write('<div class="col"> <div class="card"> <img src="img/gol.png"  alt="..."> <div class="card-body"><h5 class="card-title">Patea el equipo Local...</h5><p class="card-text">Gol!</p></div></div></div>')
  } else {
    console.log("Afuera!")
    document.write('<div class="col"> <div class="card"> <img src="img/nogol.png"  alt="..."> <div class="card-body"><h5 class="card-title">Patea el equipo Local...</h5><p class="card-text">Afuera!</p></div></div></div>')
  }

  //tira visitante:
  tiro = Math.ceil(Math.random() * 2);
  console.log("Patea el equipo visitante...");
  if (tiro === 1) {
    visitante += 1;
    console.log("Gol!!!");
    document.write('<div class="col"> <div class="card"> <img src="img/gol.png"  alt="..."> <div class="card-body"><h5 class="card-title">Patea el equipo Visitante...</h5><p class="card-text">Gol!</p></div></div></div>');
  } else {
    console.log("Afuera!");
    document.write('<div class="col"> <div class="card"> <img src="img/nogol.png"  alt="..."> <div class="card-body"><h5 class="card-title">Patea el equipo Visitante...</h5><p class="card-text">Afuera!</p></div></div></div>');
  }

  //actualizo el contador de la tanda
  ronda += 1;

  //muestro el resultado parcial
  console.log("Tanda número " + ronda);
  console.log(
    "Resultado Parcial: Local  " + local + "-" + visitante + " Visitante"
  );


  console.log("----------------------------------------------")

  //compruebo si hay ganador.
  //Al menos, se van a jugar 3 tandas, no se puede ganar antes de la 3ra tanda.

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
 document.write('</div>')
 document.write('<h5> Restulado Parcial. Tanda nro ' + ronda + ': Local:  ' + local + '  -  ' + visitante + ' Visitante</h5>');
 document.write('<br>');
}

if(local > visitante ){
    console.log("Ganó el equipo local.")
    document.write('<h1> Ganó el equipo local </h1>');
} else {
    console.log("Ganó el equipo visitante.");
    document.write('<h1> Ganó el equipo visitante </h1>');
}
