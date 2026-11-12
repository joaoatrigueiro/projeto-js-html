// =======================================================
// TELA 2: tela2-compras.js (Lista de Compras Interativa)
// =======================================================

// 1. Variável de listagem com Array (exatamente como solicitado no exemplo)
let listaCompras = [
  { Item: "Refrigerante", quantidade: 2, comprado: false },
  { Item: "Arroz 5kg", quantidade: 1, comprado: true },
  { Item: "Pão de Forma", quantidade: 1, comprado: false }
];

// Selecionando elementos do HTML
const inputPesquisaProduto = document.getElementById("input-pesquisa-produto");
const inputProduto = document.getElementById("input-produto");
const inputQtd = document.getElementById("input-qtd");
const btnAdicionar = document.getElementById("btn-adicionar");
const btnLimparComprados = document.getElementById("btn-limpar-comprados");
const ulCompras = document.getElementById("ul-compras");
const contadorItens = document.getElementById("contador-itens");

// Função que desenha a lista na tela com base no Array em memória e filtro de busca
function atualizarListaNaTela(termoBusca = "") {
  ulCompras.innerHTML = "";

  listaCompras.forEach((produto, index) => {
    // Se houver texto na barra de pesquisa, filtra os itens
    if (!produto.Item.toLowerCase().includes(termoBusca.toLowerCase())) {
      return;
    }

    const li = document.createElement("li");

    // Adiciona a classe base pelo JS
    li.classList.add("item-compra");

    // Se o item estiver marcado como comprado, adiciona a classe de estilo '.item-comprado'
    if (produto.comprado) {
      li.classList.add("item-comprado");
    }

    li.innerHTML = `
      <span>${produto.comprado ? "✅" : "⬜"} ${produto.Item}</span>
      <span class="badge rounded-pill text-bg-primary">${produto.quantidade} un.</span>
    `;

    // Ao clicar no item, alterna o estado em memória e a classe CSS
    li.addEventListener("click", () => {
      listaCompras[index].comprado = !listaCompras[index].comprado;
      atualizarListaNaTela(inputPesquisaProduto.value);
    });

    ulCompras.appendChild(li);
  });

  contadorItens.textContent = `Total de itens: ${listaCompras.length}`;
}

// Evento da barra de pesquisa em tempo real
inputPesquisaProduto.addEventListener("input", () => {
  atualizarListaNaTela(inputPesquisaProduto.value);
});

// Evento para adicionar um novo item dinamicamente em memória a partir do input
btnAdicionar.addEventListener("click", () => {
  const nomeItem = inputProduto.value.trim();
  const qtdItem = Number(inputQtd.value) || 1;

  if (nomeItem !== "") {
    // Salva no array em memória
    listaCompras.push({
      Item: nomeItem,
      quantidade: qtdItem,
      comprado: false
    });

    // Limpa os campos e atualiza a tela
    inputProduto.value = "";
    inputQtd.value = "1";
    inputPesquisaProduto.value = "";
    inputProduto.focus();
    atualizarListaNaTela();
  }
});

// Permite apertar "Enter" no campo de texto para adicionar rapidamente
inputProduto.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    btnAdicionar.click();
  }
});

// Remove da memória apenas os itens que já foram marcados como comprados
btnLimparComprados.addEventListener("click", () => {
  listaCompras = listaCompras.filter((produto) => !produto.comprado);
  atualizarListaNaTela(inputPesquisaProduto.value);
});

// Inicializa a lista ao carregar a página
atualizarListaNaTela();
