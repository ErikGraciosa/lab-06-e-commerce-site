import { renderLineItems } from './render-line-items.js';
import { inventory } from '../sportinggoods.js';
import { findById, calcOrderTotal, getFromLocalStorage } from '../utils.js'; //input is array objects and id, returns object matching id 

//get html elements
const tbody = document.getElementById('cart-main');
const tfoot = document.getElementById('cart-footer');
const trow = document.createElement('tr');
const tCost = document.createElement('td');
const tWording = document.createElement('td');
const tEmpty = document.createElement('td');
const button = document.getElementById('place-order-button');

//generate some html with the cart/inventory content match the cart id and inventory ids use find by id.
//Start with cart.id to get the right id to look for in the inventory object
//Pass both the matching cart and inventory objects to the renderLineItems function


//Get local storage cart
const currentCart = getFromLocalStorage('theCart') || [];

//loop through whatever is in the cart and render to page
for (let i = 0; i < currentCart.length; i++) {
    const cartItem = currentCart[i].id;
    const inventoryItem = findById(inventory, cartItem);
    const nextLineToRender = renderLineItems(currentCart[i], inventoryItem);
    tbody.appendChild(nextLineToRender);
}

//Show total
const total = calcOrderTotal(currentCart, inventory);
tCost.textContent = `$${total.toFixed(2)}`;
tWording.textContent = 'The total is:';

tCost.classList.add('total-cost');
tWording.classList.add('total-wording');
tEmpty.colSpan = 3;

trow.append(tEmpty, tWording, tCost);
tfoot.appendChild(trow);

//Disables button if 'theCart' empty
if (currentCart.length === 0) {
    button.disabled = true;
}

button.addEventListener('click', () => {
    //Display alert
    const niceLookingCart = JSON.stringify(currentCart, true, 2);
    alert('Thanks for your purchase of: \r\n' + niceLookingCart);

    localStorage.clear();
    window.location.href = '/lab-06-e-commerce-site/';
});