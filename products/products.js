import { productHtmlBuilder } from '../functions.js';
//import { inventory } from '../sportinggoods.js';
import { getFromLocalStorage, initializeProducts } from '../utils.js';

const ul = document.getElementById('product-list');

initializeProducts();
const dynamicProducts = getFromLocalStorage('theProducts');

//Build products
for (let i = 0; i < dynamicProducts.length; i++) {
    const productTag = productHtmlBuilder(dynamicProducts[i]);
    ul.appendChild(productTag);
}
    
