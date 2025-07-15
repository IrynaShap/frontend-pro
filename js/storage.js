const STORAGE_KEY = 'products';
const SELECTED_ID_KEY = 'selectedProductID';

const storage = {
  getProducts: function() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  },
  saveProducts: function(products) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  },
  getSelectedProductID: function() {
    return parseInt(localStorage.getItem(SELECTED_ID_KEY));
  },
  setSelectedProductID: function(id) {
    localStorage.setItem(SELECTED_ID_KEY, id);
  }
};
