const table = document.getElementById('productTable');
const products = storage.getProducts();

products.forEach(product => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${product.id}</td>
    <td>${product.name}</td>
    <td>${product.description}</td>
    <td>${product.price.toFixed(2)}</td>
    <td>
      <button class="btn btn-warning btn-sm">Редагувати</button>
      <button class="btn btn-danger btn-sm">Видалити</button>
    </td>
  `;
    const editBtn = row.querySelector('.btn-warning');
    const deleteBtn = row.querySelector('.btn-danger');
    editBtn.addEventListener('click', () => editProduct(product.id));
    deleteBtn.addEventListener('click', () => deleteProduct(product.id));
    table.appendChild(row);
});

function deleteProduct(id) {
    const updated = products.filter(p => p.id !== id);
    storage.saveProducts(updated);
    location.reload();
}

function editProduct(id) {
    storage.setSelectedProductID(id);
    window.location.href = 'edit.html';
}