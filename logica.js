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

piedraBtn.addEventListener("click", function(){
  eleccion(Piedra);
  console.log(Piedra)
});
papelBtn.addEventListener("click", function(){
  eleccion(Papel);
  console.log(Papel)
});
tijeraBtn.addEventListener("click", function(){
  eleccion(Tijera);
  console.log(Papel)
})

function eleccion(userOption){
  const machineOption = Math.floor(Math.random() * 3) + 1;
  const result = calcularResultado(userOption, machineOption);

  switch (result) {
    case Empate:
      resultadoPantalla.innerHTML = Score
    break;
    case Ganador:
      resultadoPantalla.innerHTML = Score += 1
    break;
    case Perdedor:
      resultadoPantalla.innerHTML = Score -= 1
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
