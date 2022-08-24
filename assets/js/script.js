//Hora
function getHours() {
   const data = new Date();
   const hora = data.getHours();
   const minutos = data.getMinutes();
   const msg = hora > 18 ? ' pm' : ' am';
   return hora + ':' + minutos + msg;
}

const relogio = document.querySelector('.relogio');
const hora = getHours();
relogio.innerHTML = hora;

/********************************** */

// Lista de taref
const inputTexto = document.querySelector('.input-texto');
const btnAdicionar = document.querySelector('.btn-adicionar');
const tarefas = document.querySelector('.tarefas');
const container = document.querySelector('.container');
limpaImput();

function criaLi() {
   const li = document.createElement('li');
   return li;
}

function criaTarefa(inputValor) {
   if (!inputValor) return;

   const li = criaLi();
   li.innerText = inputValor;
   tarefas.appendChild(li);
   btnApagar(li);
}

function limpaImput() {
   inputTexto.value = '';
}

function btnApagar(li) {
   li.innerText += ' ';
   const botaoApagar = document.createElement('button');
   botaoApagar.innerHTML = '❌';
   botaoApagar.setAttribute('class', 'apagar');
   li.appendChild(botaoApagar);
}

document.addEventListener('click', function (e) {
   const el = e.target;
   if (el.classList.contains('btn-adicionar')) {
      criaTarefa(inputTexto.value);
      limpaImput();
   }
});

//pegar o Enter

document.addEventListener('keypress', function (e) {
   if (e.keyCode === 13) {
      criaTarefa(inputTexto.value);
      limpaImput();
   }
});

//apagar tarefa
document.addEventListener('click', function (e) {
   const el = e.target;

   if (el.classList.contains('apagar')) {
      el.parentElement.remove();
   }
});
