const formAdicionar = document.getElementById("form-adicionar");
const inputItem = document.getElementById("input-item");
const listaItens = document.getElementById("container");
const btnComprar = document.getElementById("btn-comprar");
const btnLimpar = document.getElementById("btn-limpar");
const tamanhoLista = document.getElementById("tamanho-lista");
let itens = [];

formAdicionar.addEventListener("submit", (event) => {
  event.preventDefault();

  const novoItem = inputItem.value.trim();
  if (novoItem === '') return;

  itens.push(novoItem);

  salvarDados();
  renderizarLista();

  inputItem.value = '';
});

function renderizarLista() {
  listaItens.innerHTML = '';

  itens.forEach((item, index) => {
    const li = document.createElement('li');
    const spanTexto = document.createElement('span');
    spanTexto.textContent = item;

    const btnRemover = document.createElement('button');
    btnRemover.className = 'botoesVermelhos';
    btnRemover.textContent = 'X';
    btnRemover.addEventListener('click', () => {
      removerItem(index);
    });

    li.appendChild(spanTexto);
    li.appendChild(btnRemover);
    listaItens.appendChild(li);
  });
  tamanhoLista.textContent = itens.length;
}

function removerItem(index) {
  itens.splice(index, 1);
  salvarDados();
  renderizarLista();
}

function salvarDados() {
  localStorage.setItem('listaTarefas', JSON.stringify(itens));
}

btnLimpar.addEventListener('click', () => {
  itens = []
  renderizarLista()
})

btnComprar.addEventListener('click', () => {
  if (itens.length == 0) return;
  if (confirm('Deseja comprar os itens da lista?')) {
    itens = []
    salvarDados()
    renderizarLista()
  }
})

// Funcionalidades:

// Marcar como comprado - Salvar esse Estado no localStorage**
// Contador de Itens - Mostrar quantos itens tem na lista, atualizando em tempo real**
