const posBotaoAdicionar = document.getElementById('criar-tarefa');
let conteudoAdicionar = '';
const posTextoTarefa = document.getElementById('texto-tarefa');
const posListaTarefas = document.getElementById('lista-tarefas');
const posApagaTudo = document.getElementById('apaga-tudo');
const posBotaoFinalizados = document.getElementById('remover-finalizados');
const posBotaoSalvar = document.getElementById('salvar-tarefas');
const posBotaoMoveCima = document.getElementById('mover-cima');
const posBotaoMoveBaixo = document.getElementById('mover-baixo');
const posBotaoRemoveSelecionado = document.getElementById('remover-selecionado');
let quantidade = 0;

function removeSelecionado() {
  const pegaSelecionados = document.querySelector('.coloreCinza');
  pegaSelecionados.remove();
}

posBotaoRemoveSelecionado.addEventListener('click', removeSelecionado);

function exchangeElements(element1, element2) {
  const clonedElement1 = element1.cloneNode(true);
  const clonedElement2 = element2.cloneNode(true);
  element2.parentNode.replaceChild(clonedElement1, element2);
  element1.parentNode.replaceChild(clonedElement2, element1);
}

function moveBaixo() {
  const pegaTodosLi = document.querySelectorAll('li');
  quantidade = pegaTodosLi.length;
  if (quantidade > 1) {
    for (let i = 0; i < pegaTodosLi.length; i += 1) {
      if (pegaTodosLi[i].classList.contains('coloreCinza') && pegaTodosLi[i].nextSibling !== null) {
        exchangeElements(pegaTodosLi[i], pegaTodosLi[i].nextSibling);
      }
    }
  }
}

posBotaoMoveBaixo.addEventListener('click', moveBaixo);

function moveCima() {
  const pegaTodosLi = document.querySelectorAll('li');
  quantidade = pegaTodosLi.length;
  if (quantidade > 1) {
    for (let i=0; i < pegaTodosLi.length; i += 1) {
      if (pegaTodosLi[i].classList.contains('coloreCinza') && pegaTodosLi[i].previousSibling !== null) {
        exchangeElements(pegaTodosLi[i], pegaTodosLi[i].previousSibling);
      }
    }
  }
}

posBotaoMoveCima.addEventListener('click', moveCima);

function carregaStorage() {
  document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('conteudo');
}

window.onload = carregaStorage;

function salvarTarefas() {
  localStorage.clear();
  const pegaTudo = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('conteudo', pegaTudo);
}

posBotaoSalvar.addEventListener('click', salvarTarefas);

function adicionaCompleted(event) {
  event.target.classList.toggle('completed');
}

posListaTarefas.addEventListener('dblclick', adicionaCompleted);

function coloreCinza(event) {
  const pegaTodosLi = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < pegaTodosLi.length; i += 1) {
    if (pegaTodosLi[i].classList.contains('coloreCinza')) {
      pegaTodosLi[i].classList.remove('coloreCinza');
    }
  }
  event.target.classList.add('coloreCinza');
}

posListaTarefas.addEventListener('click', coloreCinza);

function apagaTudo() {
  document.getElementById('lista-tarefas').innerHTML = '';
}

posApagaTudo.addEventListener('click', apagaTudo);

function apagaFinalizados() {
  const pegaCompletos = document.querySelectorAll('.completed');
  for (const elemento of pegaCompletos) {
    elemento.remove();
  }
}

posBotaoFinalizados.addEventListener('click', apagaFinalizados);

function adicionaItem() {
  if (posTextoTarefa.value !== '') {
    const criaLi = document.createElement('li');
    posListaTarefas.appendChild(criaLi);
    conteudoAdicionar = posTextoTarefa.value;
    posListaTarefas.lastElementChild.innerHTML = conteudoAdicionar;
    posTextoTarefa.value = '';
  }
}

posBotaoAdicionar.addEventListener('click', adicionaItem);
