const selecionaPreto = document.getElementById('preto');
let pegaCorSelecionada = getComputedStyle(selecionaPreto, null).getPropertyValue('background-color');
const monitoraColorPalette = document.getElementById('color-palette');
const monitoraLimpar = document.getElementById('clear-board');
const monitoraVQV = document.getElementById('generate-board');

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = pegaCorSelecionada;
  }
}, false);


function deletaTudo() {
  const pegaTudo = document.getElementById('pixel-board');
  pegaTudo.innerHTML = '';
}

function criaBoard(n) {
  for (let i = 1; i <= n; i += 1) {
    const ultimaPosDentroBoard = document.getElementById('pixel-board');
    const criaDivLinha = document.createElement('div');
    //  criaDivLinha.className = 'Linha' + i;
    ultimaPosDentroBoard.appendChild(criaDivLinha);

    for (let j = 1; j <= n; j += 1) {
      const criaColuna = document.createElement('div');
      criaColuna.className = 'pixel';
      //  criaColuna.className = 'pixel ' + 'Coluna' + j;
      const ultimaPosDentroLinha = ultimaPosDentroBoard.lastElementChild;
      ultimaPosDentroLinha.appendChild(criaColuna);
    }
  }
}

criaBoard(5);

function usuarioCria() {
  let conteudoInputSize = document.getElementById('board-size').value;
  if (conteudoInputSize === '') {
    alert('Board inválido!');
  } else {
    deletaTudo();
    if (conteudoInputSize < 5) {
      conteudoInputSize = 5;
    } else if (conteudoInputSize > 50) {
      conteudoInputSize = 50;
    }
    criaBoard(conteudoInputSize);
  }
}

monitoraVQV.addEventListener('click', usuarioCria);

function selecionaCorPaleta(event) {
  pegaCorSelecionada = getComputedStyle(event.target, null).getPropertyValue('background-color');
  if (event.target.className !== 'color selected') {
    const elementosPaleta = document.getElementById('color-palette').children;
    for (let i = 0; i < elementosPaleta.length; i += 1) {
      if (elementosPaleta[i].className === 'color selected') {
        elementosPaleta[i].className = 'color';
      }
    }
    event.target.className = 'color selected';
  }
}

monitoraColorPalette.addEventListener('click', selecionaCorPaleta);

function limpaTudo() {
  const pegaPosicaoPixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pegaPosicaoPixels.length; i += 1) {
    pegaPosicaoPixels[i].style.backgroundColor = 'white';
  }
}

monitoraLimpar.addEventListener('click', limpaTudo);

function criaQuadradoCor() {
  const selecionaPaleta = document.getElementById('color-palette');
  let corRandomica = '';
  for (let i = 1; i <= 3; i += 1) {
    const criaDiv = document.createElement('div');
    criaDiv.className = 'color ' + 'randomica' + i;
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    corRandomica = 'rgb(' + r + "," + g + "," + b + ')';
    criaDiv.style.backgroundColor = corRandomica;
    selecionaPaleta.append(criaDiv);
  }
}
criaQuadradoCor();
