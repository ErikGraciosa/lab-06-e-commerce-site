import { initializeProducts, addProduct, getFromLocalStorage } from '../utils.js';
import { adminProductHtmlBuilder } from '../functions.js';

initializeProducts();

//Gather DOM
const form = document.getElementById('form');

//All on submit click
////Get reference to the form
////subscribe to the submit button
////make sure to event.preventDefault()
////create newFromData object passing the in form
////Maake a new product object from the formData

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newProduct = new FormData(form);

    const id = newProduct.get('id');
    const name = newProduct.get('name');
    const image = '../assets/unavailable.png'; //newProduct.get('image');
    const category = newProduct.get('category');
    const description = newProduct.get('description');
    const price = newProduct.get('price');
    
    const newProductAsObject = { id: id, name: name, image:image, category:category, description:description, price:parseInt(price) };

    addProduct(newProductAsObject);

    const niceLookingNewProductAsObject = JSON.stringify(newProductAsObject, true, 2);
    alert('The following item has been added: \n\r' + niceLookingNewProductAsObject);

    form.reset();
    location.reload();
});


//Copied over from products.js, should display exact same thing but in lower div tag
const ul = document.getElementById('product-list');
initializeProducts();

//Build products
const dynamicProducts = getFromLocalStorage('theProducts');

for (let i = 0; i < dynamicProducts.length; i++) {
    const productTag = adminProductHtmlBuilder(dynamicProducts[i]);
    ul.appendChild(productTag);
}