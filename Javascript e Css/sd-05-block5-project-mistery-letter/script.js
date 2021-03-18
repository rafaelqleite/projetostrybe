const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
const grupoTamanho = ['medium', 'big', 'reallybig'];
const grupoRotacao = ['rotateleft', 'rotateright'];
const grupoInclinacao = ['skewleft', 'skewright'];

const posBotaoCriarCarta = document.getElementById('criar-carta');

function monitoraCarta(event) {
  const randomEstilo = Math.floor(Math.random() * 3);
  const randomTamanho = Math.floor(Math.random() * 3);
  const randomRotacao = Math.floor(Math.random() * 2);
  const randomInclinacao = Math.floor(Math.random() * 2);
  event.target.className = '';
  event.target.className += grupoEstilo[randomEstilo];
  event.target.className += ' ';
  event.target.className += grupoTamanho[randomTamanho];
  event.target.className += ' ';
  event.target.className += grupoRotacao[randomRotacao];
  event.target.className += ' ';
  event.target.className += grupoInclinacao[randomInclinacao];
}

function imprimeCarta() {
  const conteudoTexto = document.getElementById('carta-texto').value;
  const vetorAuxiliar = conteudoTexto.split(' ');
  const ultimoParagrafo = document.getElementById('carta-gerada');
  ultimoParagrafo.innerHTML = '';

  for (let i = 0; i < vetorAuxiliar.length; i += 1) {
    const criaTagSpan = document.createElement('span');
    const randomEstilo = Math.floor(Math.random() * 3);
    const randomTamanho = Math.floor(Math.random() * 3);
    const randomRotacao = Math.floor(Math.random() * 2);
    const randomInclinacao = Math.floor(Math.random() * 2);
    criaTagSpan.className += grupoEstilo[randomEstilo] + ' ' + grupoTamanho[randomTamanho] + ' ' + grupoRotacao[randomRotacao] + ' ' + grupoInclinacao[randomInclinacao];
    criaTagSpan.innerText = vetorAuxiliar[i];
    ultimoParagrafo.appendChild(criaTagSpan);
  }
  const escreveContador = document.getElementById('carta-contador');
  escreveContador.innerText = vetorAuxiliar.length;
  const pegaTodasPalavras = document.getElementById('carta-gerada').childNodes;

  if (pegaTodasPalavras.length !== 0) {
    pegaTodasPalavras.forEach((item) => {
      item.addEventListener('click', monitoraCarta);
    });
  }
}

posBotaoCriarCarta.addEventListener('click', imprimeCarta);
