const products = [
  { name: "Phone", category: "electronics", price: 500, rating: 4.5 },
  { name: "Shirt", category: "clothing", price: 30, rating: 4.2 },
  { name: "Laptop", category: "electronics", price: 1000, rating: 4.8 }
];

function displayProducts(list) {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${p.name}</h3><p>Price: $${p.price}</p><p>Rating: ${p.rating}</p>`;
    container.appendChild(div);
  });
}

function filterProducts() {
  const filter = document.getElementById("filter").value;
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);
  displayProducts(filtered);
}

function sortProducts() {
  const sortBy = document.getElementById("sort").value;
  const sorted = [...products].sort((a, b) => a[sortBy] - b[sortBy]);
  displayProducts(sorted);
}

window.onload = () => displayProducts(products);
const product= [
  { name: "Phone", category: "electronics", price: 500, rating: 4.5 },
  { name: "Shirt", category: "clothing", price: 30, rating: 4.2 },
  { name: "Laptop", category: "electronics", price: 1000, rating: 4.8 }
];

function displayProducts(list) {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${p.name}</h3><p>Price: $${p.price}</p><p>Rating: ${p.rating}</p>`;
    container.appendChild(div);
  });
}

function filterProducts() {
  const filter = document.getElementById("filter").value;
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);
  displayProducts(filtered);
}

function sortProducts() {
  const sortBy = document.getElementById("sort").value;
  const sorted = [...products].sort((a, b) => a[sortBy] - b[sortBy]);
  displayProducts(sorted);
}

window.onload = () => displayProducts(products);