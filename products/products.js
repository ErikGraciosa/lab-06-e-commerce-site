import { productHtmlBuilder } from '../functions.js';
//import { inventory } from '../sportinggoods.js';
import { getFromLocalStorage, initializeProducts } from '../utils.js';

const ul = document.getElementById('product-list');

initializeProducts();

//Build products
const dynamicProducts = getFromLocalStorage('theProducts');

for (let i = 0; i < dynamicProducts.length; i++) {
    const productTag = productHtmlBuilder(dynamicProducts[i]);
    ul.appendChild(productTag);
} 