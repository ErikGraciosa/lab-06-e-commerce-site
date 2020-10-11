import { getFromLocalStorage, setInLocalStorage } from './utils.js';
import { findById } from './utils.js';

//HTML Tag builder
export function productHtmlBuilder(product) {
    //Create tags    
    const li = document.createElement('li');
    const divProductMiddle = document.createElement('div');
    const divName = document.createElement('div');
    const divCategory = document.createElement('div');
    const divDescription = document.createElement('div');
    const divProductRight = document.createElement('div');
    const divPrice = document.createElement('div');
    const button = document.createElement('button');
    const img = document.createElement('img');

    //Updates to properties
    li.classList.add('product');
    img.src = product.image;
    divProductMiddle.classList.add('product-middle');
    divName.classList.add('name');
    divName.textContent = product.name;
    divCategory.classList.add('category');
    divCategory.textContent = product.category;
    divDescription.classList.add('description');
    divDescription.textContent = product.description;
    divProductRight.classList.add('product-right');
    button.textContent = 'Add';
    divPrice.classList.add('price');    
    divPrice.textContent = `$${product.price.toFixed(2)}`;
    
    //Appends
    li.appendChild(img);

    li.appendChild(divProductMiddle);
    divProductMiddle.appendChild(divName);
    divProductMiddle.appendChild(divCategory);
    divProductMiddle.appendChild(divDescription);

    li.appendChild(divProductRight);
    divProductRight.appendChild(button);
    divProductRight.appendChild(divPrice);

    //Event Listener, cart builder
    button.addEventListener('click', () => {
        //UX effects
        li.setAttribute('style', 'animation: background-fade-green 0.2s;');
        
        li.addEventListener('animationend', () => {
            li.setAttribute('style', '');
        });

        
        //get the cart or return default
        const currentCart = getFromLocalStorage('theCart') || [];
        
        //What is the product? Returns product the button is in.
        const itemInCart = findById(currentCart, product.id);
        //find if cart has product already, increment, if not initilize the object in the cart.            
        if (itemInCart === null) {
            const addCartItem = { 
                id: product.id,
                quantity: 1,
            };
            //append at end of object
            currentCart.push(addCartItem);
        } else {
            itemInCart.quantity++;
        }

        //send back to the local storage
        setInLocalStorage('theCart', currentCart);
        
    });
    return li;
}


//Bonus section
//Delete from product list button, I put this on the specific button for each product, compared name because the rendered items dont have id associated, wish this was in original data model but decided to move forward on the bonus vs remake the model.
function removeProduct(itemToDelete) {
    //Check what the current cart is
    const dynamicProducts = getFromLocalStorage('theProducts');
    
    localStorage.clear('theCart');
    //Remove the specific product, loop through ids, if find a match delete
    for (let i = 0; i < dynamicProducts.length; i++) {
        if (itemToDelete === dynamicProducts[i].name) {
            dynamicProducts.splice(i, 1);
            alert('The cart has been cleared. \nThe following item has been deleted: \n\r' + itemToDelete);
            if (dynamicProducts.length === 0) {
                alert('What are we going to sell? Returning all products to cart!');
            }
        }
    }
    //Send the cart back to localStorage
    setInLocalStorage('theProducts', dynamicProducts);  
    location.reload();
}


//Admin html builder with delete button
export function adminProductHtmlBuilder(product) {
    //Create tags    
    const li = document.createElement('li');
    const divProductMiddle = document.createElement('div');
    const divName = document.createElement('div');
    const divCategory = document.createElement('div');
    const divDescription = document.createElement('div');
    const divProductRight = document.createElement('div');
    const divPrice = document.createElement('div');
    const button = document.createElement('button');
    const img = document.createElement('img');

    //Updates to properties
    li.classList.add('product');
    img.src = product.image;
    divProductMiddle.classList.add('product-middle');
    divName.classList.add('name');
    divName.textContent = product.name;
    divCategory.classList.add('category');
    divCategory.textContent = product.category;
    divDescription.classList.add('description');
    divDescription.textContent = product.description;
    divProductRight.classList.add('product-right');
    button.textContent = 'Delete';
    divPrice.classList.add('price');
    divPrice.textContent = `$${product.price.toFixed(2)}`;
    
    //Appends
    li.appendChild(img);
    li.appendChild(divProductMiddle);
    divProductMiddle.appendChild(divName);
    divProductMiddle.appendChild(divCategory);
    divProductMiddle.appendChild(divDescription);
    li.appendChild(divProductRight);
    divProductRight.appendChild(button);
    divProductRight.appendChild(divPrice);

    //Event Listener, product deleter
    button.addEventListener('click', () => {
        //UX
        li.setAttribute('style', 'animation: background-fade-red 0.2s;');
            
        li.addEventListener('animationend', () => {
            li.setAttribute('style', '');
        });

        removeProduct(product.name);
    });
    return li;
}