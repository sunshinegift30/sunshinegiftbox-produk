const products = [
  { name: "Bricks Susun", price: 10000 },
  { name: "Cermin", price: 12000 },
  { name: "Gelang Pita", price: 10000 },
  { name: "Parfum Roll", price: 10000 },
  { name: "Hijab Bella Square", price: 15000 },
  { name: "Bengbeng", price: 3000 },
  { name: "Foto Polaroid (3 pcs)", price: 5000 },
  // Tambahkan produk lainnya sesuai kebutuhan
];

const cart = [];

function renderProducts() {
  const list = document.getElementById("product-list");
  products.forEach((product, index) => {
    const item = document.createElement("div");
    item.className = "product";
    item.innerHTML = `
      <h3>${product.name}</h3>
      <p>Rp ${product.price.toLocaleString()}</p>
      <button onclick="addToCart(${index})">Tambah</button>
    `;
    list.appendChild(item);
  });
}

function addToCart(index) {
  cart.push(products[index]);
  renderCart();
}

function renderCart() {
  const list = document.getElementById("cart");
  list.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - Rp ${item.price.toLocaleString()}`;
    list.appendChild(li);
  });
}

function checkout() {
  if (cart.length === 0) {
    alert("Keranjang kosong!");
    return;
  }
  const pesan = cart.map((item) => `- ${item.name} (${item.price})`).join("%0A");
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const url = `https://wa.me/6283872780382?text=Halo%20kak!%20Saya%20mau%20pesan:%0A${pesan}%0ATotal:%20Rp%20${total.toLocaleString()}`;
  window.open(url, "_blank");
}

renderProducts();
