const Piedra = 'rock';
const Papel = 'paper';
const Tijera = 'scissors';

const Empate = 0;
const Ganador = 1;
const Perdedor = 2;

let estasJugando = false;
let Score = 0

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const resultadoPantalla = document.getElementById("puntosGanados")
const main = document.getElementById("main");
const seleccion = document.getElementById("seleccion")
const resultadoVs = document.getElementById("resultadoVs");
const reset = document.getElementById("reset");
const leerReglas = document.getElementById("leerReglas");
const reglas = document.getElementById("reglas");
const cerrarReglas = document.getElementById("cerrarReglas");
const userSeleccion = document.getElementById("userSeleccion");
const machineSeleccion = document.getElementById("machineSeleccion")

piedraBtn.addEventListener("click", function () {
  eleccion(Piedra);
  main.style.display = 'none';
  seleccion.style.display = 'flex';
});
papelBtn.addEventListener("click", function () {
  eleccion(Papel);
  main.style.display = 'none';
  seleccion.style.display = 'flex';
});
tijeraBtn.addEventListener("click", function () {
  eleccion(Tijera);
  main.style.display = 'none';
  seleccion.style.display = 'flex';
})
reset.addEventListener("click", () => {
  seleccion.style.display = 'none';
  main.style.display = 'flex';
})
leerReglas.addEventListener('click', function () {
  main.style.display = 'none';
  reglas.style.display = 'flex';
})
cerrarReglas.addEventListener('click', () => {
  reglas.style.display = 'none';
  seleccion.style.display = 'none';
  main.style.display = 'flex';

})

function eleccion(userOption) {
  userSeleccion.src = './img/' + userOption + '.svg';

  resultadoVs.innerHTML = 'Maquina escogiendo';
    const suspenso = setInterval(() => {
    const machineOption = calcMachineOption();
    machineSeleccion.src = './img/' + machineOption + '.svg';

  }, 100);
  setTimeout(function () {
    clearInterval(suspenso);
    const machineOption = calcMachineOption();
    const result = calcularResultado(userOption, machineOption);

    machineSeleccion.src = './img/' + machineOption + '.svg';

    switch (result) {
      case Empate:
        ((resultadoPantalla.innerHTML = Score = Score) && (resultadoVs.innerHTML = 'Esto fue un Empate'));
        break;
      case Ganador:
        ((resultadoPantalla.innerHTML = Score += 1) && (resultadoVs.innerHTML = 'Tu Ganastes'));
        break;
      case Perdedor:
        ((resultadoPantalla.innerHTML = Score -= 1) && (resultadoVs.innerHTML = 'Tu Perdistes'));
        break;
    };
  }, 500)
}

function calcMachineOption() {
  const num = Math.floor(Math.random() * 3);

  switch (num) {
    case 0:
      return Piedra;
    case 1:
      return Papel;
    case 2:
      return Tijera;
  }
}

function calcularResultado(userOption, machineOption) {
  if (userOption === machineOption) {
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