document.getElementById('productForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const description = document.getElementById('description').value.trim();
    const price = parseFloat(document.getElementById('price').value);

    if (!name || !description || isNaN(price) || price < 0) {
        alert('Будь ласка, введіть коректні дані.');
        return;
    }

    const products = storage.getProducts();
    const id = Date.now();
    products.unshift({ id, name, description, price });
    storage.saveProducts(products);

    window.location.href = 'list.html';
});