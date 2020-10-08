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
    console.log(typeof product.price);
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