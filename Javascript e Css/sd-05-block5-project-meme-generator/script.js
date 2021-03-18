function carregaArquivo(event) {
  const saida = document.getElementById('meme-image');
  saida.src = URL.createObjectURL(event.target.files[0]);
  saida.onload = function () {
    URL.revokeObjectURL(saida.src);
  };
}

function imprimeTexto() {
  let texto = document.getElementById('text-input');
  texto = texto.value;
  const posTexto = document.getElementById('meme-text');
  posTexto.innerHTML = texto;
}

const memeInsert = document.getElementById('meme-insert');
memeInsert.addEventListener('change', carregaArquivo);

const textInput = document.getElementById('text-input');
textInput.addEventListener('keyup', imprimeTexto);

function trocaMolduraFire() {
  const pegaMoldura = document.getElementById('meme-image-container');
  pegaMoldura.style.border = '3px dashed red';
}

function trocaMolduraWater() {
  const pegaMoldura = document.getElementById('meme-image-container');
  pegaMoldura.style.border = '5px double blue';
}

function trocaMolduraEarth() {
  const pegaMoldura = document.getElementById('meme-image-container');
  pegaMoldura.style.border = '6px groove green';
}

const fireButton = document.getElementById('fire');
fireButton.addEventListener('click', trocaMolduraFire);

const waterButton = document.getElementById('water');
waterButton.addEventListener('click', trocaMolduraWater);

const earthButton = document.getElementById('earth');
earthButton.addEventListener('click', trocaMolduraEarth);

const galeria = [
  document.querySelector('#meme-1'),
  document.querySelector('#meme-2'),
  document.querySelector('#meme-3'),
  document.querySelector('#meme-4'),
];

function setaImgGaleria(element) {
  const saida = document.getElementById('meme-image');
  saida.src = element.target.src;
}

galeria.forEach((item) => {
  item.addEventListener('click', setaImgGaleria);
});
