let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidades = [2, 2.5, 3.2, 3.6, 3.3, 2.3];

let comprimento = 50;
let altura = 40;

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimento, altura);
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidades[i];
  }
}

function voltaPosicaoInicialCarros() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}
function passouTodaATela(xCarros) {
  return xCarros < -50;
}
