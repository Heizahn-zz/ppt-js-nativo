const Piedra = 1;
const Papel = 2;
const Tijera = 3;

const Empate = 1;
const Ganador = 2;
const Perdedor = 3;

let estasJugando = false;
let Score = 0

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const resultadoPantalla = document.getElementById("puntosGanados")
const main = document.getElementById("main");
const seleccion = document.getElementById("seleccion")
const resultadoVs = document.getElementById("resultadoVs");

piedraBtn.addEventListener("click", function(){
  eleccion(Piedra);
  console.log(Piedra)
  main.style.display = 'none';
  seleccion.style.display = 'flex';
});
papelBtn.addEventListener("click", function(){
  eleccion(Papel);
  console.log(Papel)
  main.style.display = 'none';
  seleccion.style.display = 'flex';
});
tijeraBtn.addEventListener("click", function(){
  eleccion(Tijera);
  console.log(Papel)
  main.style.display = 'none';
  seleccion.style.display = 'flex';
})

function eleccion(userOption){
  const machineOption = Math.floor(Math.random() * 3) + 1;
  const result = calcularResultado(userOption, machineOption);

  switch (result) {
    case Empate:
      (resultadoPantalla.innerHTML = Score) || (resultadoVs.innerHTML = "Fue un Empate");
    break;
    case Ganador:
      (resultadoPantalla.innerHTML = Score += 1) && (resultadoVs.innerHTML = "Tu Ganastes");
    break;
    case Perdedor:
      (resultadoPantalla.innerHTML = Score -= 1) && (resultadoVs.innerHTML = "Tu Perdistes");
    break;
  }
}

function calcularResultado(userOption, machineOption) {
  if (userOption === machineOption){
    return Empate;
  } else if (userOption === Piedra) {
    if (machineOption === Papel) return Perdedor;
    if (machineOption === Tijera) return Ganador;
  }
  else if (userOption === Papel) {
    if (machineOption === Tijera) return Perdedor;
    if (machineOption === Piedra) return Ganador;
  }
  else if (userOption === Tijera) {
    if (machineOption === Piedra) return Perdedor;
    if (machineOption === Papel) return Ganador;
  }
}
