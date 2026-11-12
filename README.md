# 🛒 SuperLista — Organizador de Compras e Orçamento

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

Aplicação web interativa desenvolvida com **HTML5, CSS3, JavaScript puro (Vanilla JS) e Bootstrap 5.3**, dividida em **3 telas independentes** para organização de compras, categorias de mercado e controle de gastos em tempo real.

---

## 📋 Requisitos Atendidos no Projeto

- ✅ **3 Telas Completas (9 arquivos):** 3 arquivos `.html`, 3 arquivos `.css` e 3 arquivos `.js` organizados em sequência lógica.
- ✅ **Conexão Direta de Scripts:** Todos os arquivos JavaScript são conectados diretamente ao HTML via `<script src="...">`.
- ✅ **Listagem Dinâmica com Array de Objetos:** Uso de variáveis em memória com arrays (ex: `listaCompras = [{ Item: "Refrigerante", quantidade: 2, comprado: false }]`).
- ✅ **Manipulação de Classes CSS via JavaScript:** Adição e alternância de classes de estilo diretamente do JS para o HTML usando `classList.add()`, `classList.remove()` e `classList.toggle()`.
- ✅ **Campos de Input Dinâmicos em Memória:** Adição de itens, atualização de perfil/orçamento e barras de pesquisa com filtro em tempo real.

---

## 📂 Estrutura dos Arquivos por Tela

| Tela | Arquivo HTML | Arquivo CSS | Arquivo JS | Funcionalidades Principais |
| :--- | :--- | :--- | :--- | :--- |
| **1. Início** | `tela1-inicio.html` | `tela1-inicio.css` | `tela1-inicio.js` | Boas-vindas com nome em memória, cadastro/busca de categorias (`listaCategorias`) e botão de destaque Neon via JS (`.borda-neon`). |
| **2. Lista de Compras** | `tela2-compras.html` | `tela2-compras.css` | `tela2-compras.js` | Adição e busca de produtos no array `listaCompras`, marcação de item comprado (`.item-comprado`) e limpeza de concluídos. |
| **3. Orçamento** | `tela3-orcamento.html` | `tela3-orcamento.css` | `tela3-orcamento.js` | Simulador de gastos (`listaGastos`) com meta ajustável e alerta visual automático (`.saldo-ok` / `.alerta-orcamento`). |

---

## 🎨 Componentes Bootstrap 5.3 Utilizados

- **Navegação (`nav nav-pills`):** Menu superior padronizado entre as 3 telas.
- **Barras de Pesquisa e Inputs (`input-group` + `form-control`):** Campos agrupados com ícones (`input-group-text`) e botões alinhados.
- **Botões (`btn`):** Padronizados com `btn-primary`, `btn-success`, `btn-outline-info`, `btn-outline-danger` e `btn-outline-secondary`.
- **Etiquetas (`badge`):** Contadores dinâmicos de itens e valores com `badge rounded-pill`.

---

## 🌐 Acessar o Projeto Online

👉 **https://joaoatrigueiro.github.io/projeto-js-html/**

---

## 🚀 Como Executar o Projeto Localmente

1. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Abra o arquivo **`tela1-inicio.html`** diretamente em qualquer navegador web.
