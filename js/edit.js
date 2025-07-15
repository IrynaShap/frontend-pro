const selectedID = storage.getSelectedProductID();
let products = storage.getProducts();
const productIndex = products.findIndex(p => p.id === selectedID);

if (productIndex === -1) {
  alert('Товар не знайдено');
  window.location.href = 'list.html';
}

document.getElementById('name').value = products[productIndex].name;
document.getElementById('description').value = products[productIndex].description;
document.getElementById('price').value = products[productIndex].price;

document.getElementById('editForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const description = document.getElementById('description').value.trim();
  const price = parseFloat(document.getElementById('price').value);

  if (!name || !description || isNaN(price) || price < 0) {
    alert('Будь ласка, введіть коректні дані.');
    return;
  }

  const updatedProduct = {
    id: selectedID,
    name,
    description,
    price
  };

  products[productIndex] = updatedProduct;
  storage.saveProducts(products);

  window.location.href = 'list.html';
});
