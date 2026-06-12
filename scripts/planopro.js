/*
  COMO EDITAR O CARDÁPIO
  - Criar categoria: copie um bloco dentro de menuData e troque id, nome e itens.
  - Editar categoria: altere o campo "nome".
  - Deletar categoria: remova o bloco inteiro da categoria.
  - Criar, editar ou deletar item: altere a lista "itens" da categoria desejada.
*/

const menuData = [
  {
    id: "destaques",
    nome: "Destaques",
    itens: [
      {
        nome: "Cane de panela",
        resumo: "Carne bovina temperada na brasa.",
        descricao: "Cortes selecionados de carne bovina, temperados com sal grosso e finalizados na brasa.",
        preco: "R$ 17,00"
      },
      {
        nome: "Espeto de frango",
        resumo: "Frango suculento com tempero da casa.",
        descricao: "Cubos de frango marinados com ervas, alho e toque de limao, assados ate ficarem dourados.",
        preco: "R$ 10,00"
      },
      {
        nome: "Cerveja Heineken",
        resumo: "600ml",
        descricao: "Gelada para os dias quentes",
        preco: "R$ 10,00"
      }
    ]
  },
  {
    id: "espetos",
    nome: "Espetos",
    itens: [
      {
        nome: "Espeto de carne",
        resumo: "Carne bovina temperada na brasa.",
        descricao: "Cortes selecionados de carne bovina, temperados com sal grosso e finalizados na brasa.",
        preco: "R$ 12,00"
      },
      {
        nome: "Espeto de frango",
        resumo: "Frango suculento com tempero da casa.",
        descricao: "Cubos de frango marinados com ervas, alho e toque de limao, assados ate ficarem dourados.",
        preco: "R$ 10,00"
      },
      {
        nome: "Espeto misto",
        resumo: "Carne, frango, linguica e legumes.",
        descricao: "Uma combinacao completa para quem quer provar um pouco de tudo no mesmo espeto.",
        preco: "R$ 14,00"
      }
    ]
  },
  {
    id: "bebidas",
    nome: "Bebidas",
    itens: [
      {
        nome: "Refrigerante lata",
        resumo: "Opcoes tradicionais geladas.",
        descricao: "Consulte os sabores disponiveis no atendimento. Servido bem gelado.",
        preco: "R$ 6,00"
      },
      {
        nome: "Suco natural",
        resumo: "Frutas selecionadas do dia.",
        descricao: "Suco preparado na hora, com frutas frescas e possibilidade de escolher com ou sem acucar.",
        preco: "R$ 9,00"
      },
      {
        nome: "Agua mineral",
        resumo: "Com ou sem gas.",
        descricao: "Agua mineral em garrafa individual, ideal para acompanhar qualquer pedido.",
        preco: "R$ 4,00"
      }
    ]
  },
  {
    id: "porcoes",
    nome: "Porções",
    itens: [
      {
        nome: "Batata frita",
        resumo: "Crocante, sequinha e bem servida.",
        descricao: "Porção de batata frita dourada, servida com molho especial da casa.",
        preco: "R$ 24,00"
      },
      {
        nome: "Mandioca frita",
        resumo: "Macia por dentro e crocante por fora.",
        descricao: "Mandioca selecionada, frita no ponto certo e finalizada com sal e cheiro-verde.",
        preco: "R$ 22,00"
      },
      {
        nome: "Calabresa acebolada",
        resumo: "Calabresa fatiada com cebola dourada.",
        descricao: "Porção de calabresa na chapa com cebola, perfeita para dividir.",
        preco: "R$ 28,00"
      }
    ]
  }
];

const categoryTabs = document.querySelector("#categoryTabs");
const menuList = document.querySelector("#menuList");

let activeCategoryId = menuData[0]?.id ?? "";

function formatCategoryButton(category) {
  const button = document.createElement("button");
  button.className = "category-tab";
  button.type = "button";
  button.textContent = category.nome;
  button.dataset.categoryId = category.id;
  button.setAttribute("aria-pressed", String(category.id === activeCategoryId));

  if (category.id === activeCategoryId) {
    button.classList.add("is-active");
  }

  button.addEventListener("click", () => {
    activeCategoryId = category.id;
    renderMenu();
  });

  return button;
}

function formatMenuItem(item) {
  const button = document.createElement("button");
  button.className = "menu-item";
  button.type = "button";
  button.setAttribute("aria-expanded", "false");

  button.innerHTML = `
    <div class="menu-item-header">
      <div>
        <h2>${item.nome}</h2>
        <p class="short">${item.resumo}</p>
      </div>
      <span class="price">${item.preco}</span>
    </div>
    <p class="description">${item.descricao}</p>
  `;

  button.addEventListener("click", () => {
    const isOpen = button.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  return button;
}

function renderMenu() {
  categoryTabs.innerHTML = "";
  menuList.innerHTML = "";

  menuData.forEach((category) => {
    categoryTabs.appendChild(formatCategoryButton(category));
  });

  const activeCategory = menuData.find((category) => category.id === activeCategoryId);

  if (!activeCategory || activeCategory.itens.length === 0) {
    menuList.innerHTML = '<div class="empty-state">Nenhum item cadastrado nesta categoria.</div>';
    return;
  }

  activeCategory.itens.forEach((item) => {
    menuList.appendChild(formatMenuItem(item));
  });
}

renderMenu();

// Script para Aberto/Fechado

const horaAtual = new Date().getHours();
const status = document.getElementById('status');
const statusText = document.getElementById('status-text');
const dot = document.getElementById('dot');

if (horaAtual >= 18 && horaAtual <= 23) {
  statusText.textContent = 'Aberto agora';
  status.classList.add('status-pill');
  dot.classList.add('status-pill-span-dot-aberto');
} else {
  statusText.textContent = 'Fechado';
  status.classList.add('status-pill-fechado');
  dot.classList.add('status-pill-span-dot-fechado');
}