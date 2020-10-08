import { renderLineItems } from './render-line-items.js';
import { cart } from '../data/sample-cart.js';
import { inventory } from '../sportinggoods.js';
import { findById, calcOrderTotal } from '../utils.js'; //input is array objects and id, returns object matching id 

//get html elements
const tbody = document.getElementById('cart-main');
const tfoot = document.getElementById('cart-footer');
const trow = document.createElement('tr');
const tCost = document.createElement('td');
const tWording = document.createElement('td');
const tEmpty = document.createElement('td');

//generate some html with the cart/inventory content match the cart id and inventory ids use find by id.
//Start with cart.id to get the right id to look for in the inventory object
//Pass both the matching cart and inventory objects to the renderLineItems function
//

//loop through whatever is in the cart and render to page

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i].id;
    const inventoryItem = findById(inventory, cartItem);
    const nextLineToRender = renderLineItems(cart[i], inventoryItem);
    tbody.appendChild(nextLineToRender);
}

//Show total
const total = calcOrderTotal(cart, inventory);
tCost.textContent = `$${total.toFixed(2)}`;
tWording.textContent = 'The total is:';

tCost.classList.add('total-cost');
tWording.classList.add('total-wording');
tEmpty.colSpan = 3;

trow.append(tEmpty, tWording, tCost);
tfoot.appendChild(trow);