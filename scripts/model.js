const categories = [
  {
    id: "espetos",
    label: "Espetos",
    items: [
      {
        name: "Espeto de Picanha",
        description: "Picanha em cubos, sal grosso, farofa da casa e vinagrete.",
        price: 18.9,
        tag: "Na brasa",
        image: "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Espeto de Frango com Bacon",
        description: "Frango temperado, bacon crocante, farofa e molho verde.",
        price: 13.9,
        tag: "Mais pedido",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Espeto de Queijo Coalho",
        description: "Queijo coalho dourado na chapa com melaco levemente apimentado.",
        price: 11.9,
        tag: "Vegetariano",
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    items: [
      {
        name: "Cerveja Long Neck",
        description: "Garrafa long neck bem gelada. Consulte as marcas disponiveis.",
        price: 9.9,
        tag: "Gelada",
        image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Refrigerante Lata",
        description: "Lata 350 ml nos sabores cola, guarana, limao ou laranja.",
        price: 6.5,
        tag: "350 ml",
        image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Suco Natural",
        description: "Suco feito na hora nos sabores laranja, limao, abacaxi ou maracuja.",
        price: 8.9,
        tag: "Natural",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "porcoes",
    label: "Porcoes",
    items: [
      {
        name: "Batata com Cheddar e Bacon",
        description: "Batata frita sequinha, cheddar cremoso, bacon em cubos e cebolinha.",
        price: 29.9,
        tag: "Serve 2",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Mandioca Frita",
        description: "Mandioca crocante por fora, macia por dentro, com maionese temperada.",
        price: 24.9,
        tag: "Da casa",
        image: "https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Isca de Carne",
        description: "Tiras de carne acebolada, mandioca, farofa e molho especial.",
        price: 42.9,
        tag: "Serve 3",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    items: [
      {
        name: "Caipirinha Classica",
        description: "Limao macerado, cachaca, acucar e gelo. Opcao com vodka.",
        price: 16.9,
        tag: "Classico",
        image: "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Gin Tropical",
        description: "Gin, tonica, laranja, especiarias e gelo em taca grande.",
        price: 24.9,
        tag: "Refrescante",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Moscow Mule",
        description: "Vodka, limao, espuma de gengibre e hortela.",
        price: 23.9,
        tag: "Cremoso",
        image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "jantinha",
    label: "Jantinha",
    items: [
      {
        name: "Jantinha Completa",
        description: "Arroz, feijao tropeiro, mandioca, vinagrete e um espeto a escolha.",
        price: 26.9,
        tag: "Completa",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Jantinha Duplo Espeto",
        description: "Arroz, tropeiro, mandioca, vinagrete e dois espetos a escolha.",
        price: 36.9,
        tag: "Reforcada",
        image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Jantinha Kids",
        description: "Arroz, feijao, batata frita e mini espeto de frango.",
        price: 19.9,
        tag: "Kids",
        image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
];

const tabs = document.querySelector("#categoryTabs");
const grid = document.querySelector("#productsGrid");
const itemCount = document.querySelector("#itemCount");

const money = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

let activeCategory = categories[0].id;

function renderTabs() {
  tabs.innerHTML = categories
    .map(
      (category) => `
        <button class="category-tab ${category.id === activeCategory ? "is-active" : ""}" type="button" data-category="${category.id}">
          ${category.label}
        </button>
      `,
    )
    .join("");
}

function renderProducts() {
  const category = categories.find((entry) => entry.id === activeCategory) ?? categories[0];
  itemCount.textContent = `${category.items.length} opcoes em ${category.label}`;
  grid.innerHTML = category.items
    .map(
      (item) => `
        <article class="product-card">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <div class="product-body">
            <div class="product-title-row">
              <h3>${item.name}</h3>
              <span class="price">${money.format(item.price)}</span>
            </div>
            <p class="description">${item.description}</p>
            <span class="tag">${item.tag}</span>
          </div>
        </article>
      `,
    )
    .join("");
}

tabs.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-category]");
  if (!tab) return;

  activeCategory = tab.dataset.category;
  renderTabs();
  renderProducts();
});

renderTabs();
renderProducts();