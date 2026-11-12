// =======================================================
// TELA 3: tela3-orcamento.js (Calculadora de Gastos)
// =======================================================

// 1. Variável em memória para o limite máximo de gasto
let limiteOrcamento = 100.0;

// 2. Variável de listagem com Array de objetos
let listaGastos = [
  { Item: "Refrigerante", valor: 18.0 },
  { Item: "Arroz 5kg", valor: 27.5 }
];

// Selecionando elementos do HTML
const inputLimite = document.getElementById("input-limite");
const btnDefinirLimite = document.getElementById("btn-definir-limite");

const painelStatus = document.getElementById("painel-status");
const textoLimite = document.getElementById("texto-limite");
const textoTotal = document.getElementById("texto-total");
const mensagemStatus = document.getElementById("mensagem-status");

const inputPesquisaGasto = document.getElementById("input-pesquisa-gasto");
const inputNomeGasto = document.getElementById("input-nome-gasto");
const inputValorGasto = document.getElementById("input-valor-gasto");
const btnAddGasto = document.getElementById("btn-add-gasto");
const ulGastos = document.getElementById("ul-gastos");

// Função para calcular o total e atualizar a tela + classes de estilo
function atualizarOrcamento(termoBusca = "") {
  ulGastos.innerHTML = "";
  let somaTotal = 0;

  // Percorre o Array listaGastos
  listaGastos.forEach((gasto) => {
    somaTotal += gasto.valor;

    // Filtra a exibição caso tenha algo digitado na barra de pesquisa
    if (!gasto.Item.toLowerCase().includes(termoBusca.toLowerCase())) {
      return;
    }

    const li = document.createElement("li");
    li.classList.add("linha-gasto"); // Classe CSS adicionada via JS
    li.innerHTML = `
      <span>${gasto.Item}</span>
      <span class="badge text-bg-dark border border-secondary">
        R$ ${gasto.valor.toFixed(2).replace(".", ",")}
      </span>
    `;
    ulGastos.appendChild(li);
  });

  // Atualiza os textos do painel
  textoLimite.textContent = `R$ ${limiteOrcamento.toFixed(2).replace(".", ",")}`;
  textoTotal.textContent = `R$ ${somaTotal.toFixed(2).replace(".", ",")}`;

  // Adiciona ou remove classe CSS pelo JS conforme o limite
  if (somaTotal > limiteOrcamento) {
    painelStatus.classList.remove("saldo-ok");
    painelStatus.classList.add("alerta-orcamento");
    mensagemStatus.textContent = "⚠️ Atenção: Você ultrapassou o limite!";
  } else {
    painelStatus.classList.remove("alerta-orcamento");
    painelStatus.classList.add("saldo-ok");
    mensagemStatus.textContent = "✅ Dentro do orçamento!";
  }
}

// Evento da barra de pesquisa em tempo real
inputPesquisaGasto.addEventListener("input", () => {
  atualizarOrcamento(inputPesquisaGasto.value);
});

// Evento para atualizar o limite em memória pelo input
btnDefinirLimite.addEventListener("click", () => {
  const novoLimite = Number(inputLimite.value);

  if (novoLimite > 0) {
    limiteOrcamento = novoLimite;
    atualizarOrcamento(inputPesquisaGasto.value);
  }
});

// Evento para adicionar um novo gasto no Array em memória
btnAddGasto.addEventListener("click", () => {
  const nome = inputNomeGasto.value.trim();
  const valor = Number(inputValorGasto.value);

  if (nome !== "" && valor > 0) {
    listaGastos.push({
      Item: nome,
      valor: valor
    });

    inputNomeGasto.value = "";
    inputValorGasto.value = "";
    inputPesquisaGasto.value = "";
    inputNomeGasto.focus();
    atualizarOrcamento();
  }
});

// Inicializa os dados na tela
atualizarOrcamento();
