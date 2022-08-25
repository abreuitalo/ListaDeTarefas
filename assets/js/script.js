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
   salvarTarefas();
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
      salvarTarefas();
   }
});

function salvarTarefas() {
   const liTarefas = tarefas.querySelectorAll('li');
   const listaDeTarefas = [];

   for (let tarefa of liTarefas) {
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('❌', '').trim();
      listaDeTarefas.push(tarefaTexto);
   }

   const tarefasJSON = JSON.stringify(listaDeTarefas);
   localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
   const tarefas = localStorage.getItem('tarefas');
   const listaDeTarefas = JSON.parse(tarefas);

   for (let tarefa of listaDeTarefas) {
      criaTarefa(tarefa);
   }
}

adicionaTarefasSalvas();
