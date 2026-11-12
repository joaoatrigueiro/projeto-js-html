// =======================================================
// TELA 1: tela1-inicio.js (Página Inicial e Categorias)
// =======================================================

// 1. Variável em memória para guardar o nome do usuário
let nomeUsuario = "Visitante";

// 2. Variável de listagem com Array de objetos
let listaCategorias = [
  { Item: "Bebidas" },
  { Item: "Hortifruti" },
  { Item: "Limpeza" },
  { Item: "Padaria" }
];

// Selecionando elementos do HTML
const inputNome = document.getElementById("input-nome");
const btnSalvarNome = document.getElementById("btn-salvar-nome");
const mensagemBoasVindas = document.getElementById("mensagem-boas-vindas");

const inputPesquisaCat = document.getElementById("input-pesquisa-cat");
const inputCategoria = document.getElementById("input-categoria");
const btnAddCategoria = document.getElementById("btn-add-categoria");
const ulCategorias = document.getElementById("lista-categorias");

const btnDestaque = document.getElementById("btn-destaque");
const painelPrincipal = document.getElementById("painel-principal");

// Função para mostrar o array de categorias na tela (com filtro da barra de pesquisa)
function renderizarCategorias(filtro = "") {
  ulCategorias.innerHTML = "";

  listaCategorias
    .filter((cat) => cat.Item.toLowerCase().includes(filtro.toLowerCase()))
    .forEach((categoria) => {
      const li = document.createElement("li");
      li.textContent = categoria.Item;
      li.classList.add("tag-item"); // Adicionando classe CSS pelo JS

      // Ao clicar na categoria, adiciona/remove a classe de seleção
      li.addEventListener("click", () => {
        li.classList.toggle("tag-selecionada");
      });

      ulCategorias.appendChild(li);
    });
}

// Evento da barra de pesquisa em tempo real
inputPesquisaCat.addEventListener("input", () => {
  renderizarCategorias(inputPesquisaCat.value);
});

// Evento para salvar o nome digitado no input em memória
btnSalvarNome.addEventListener("click", () => {
  const valorDigitado = inputNome.value.trim();

  if (valorDigitado !== "") {
    nomeUsuario = valorDigitado; // Atualiza variável em memória
    mensagemBoasVindas.textContent = `Olá, ${nomeUsuario}! Clique nas categorias para destacá-las.`;
    // Adiciona classe de estilo do JS para o HTML
    mensagemBoasVindas.classList.add("texto-confirmado");
    inputNome.value = "";
  }
});

// Evento para adicionar nova categoria no Array em memória
btnAddCategoria.addEventListener("click", () => {
  const novaCategoria = inputCategoria.value.trim();

  if (novaCategoria !== "") {
    listaCategorias.push({ Item: novaCategoria });
    inputCategoria.value = "";
    inputPesquisaCat.value = "";
    renderizarCategorias();
  }
});

// Evento para alternar classe de estilo (.borda-neon) no painel principal
btnDestaque.addEventListener("click", () => {
  painelPrincipal.classList.toggle("borda-neon");
});

// Inicializa a listagem ao abrir a página
renderizarCategorias();
