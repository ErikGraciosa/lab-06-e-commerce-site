import { initializeProducts, addProduct } from '../utils.js';

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
    const image = newProduct.get('image');
    const category = newProduct.get('category');
    const description = newProduct.get('description');
    const price = newProduct.get('price');
    
    const newProductAsObject = { id: id, name: name, image:image, category:category, description:description, price:parseInt(price) };

    addProduct(newProductAsObject);
});