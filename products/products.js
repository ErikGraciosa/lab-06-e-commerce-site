import { productHtmlBuilder } from '../functions.js';
import { inventory } from '../sportinggoods.js';

const ul = document.getElementById('product-list');

//Build products
for (let i = 0; i < inventory.length; i++) {
    const productTag = productHtmlBuilder(inventory[i]);
    ul.appendChild(productTag);
}
    
