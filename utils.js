// import { inventory } from "./sportinggoods";

export function findById(array, id) {
    let objectFound = null;
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            objectFound = array[i];
        }    
    }
    return objectFound;
}


export function calcLineItem(quantity, price) {
    const subtotal = quantity * price;
    const subtotalRounded = Math.round(subtotal * 100) / 100;
    return subtotalRounded;
}


//Cart should be the driver for retrieving what is in inventory.
export function calcOrderTotal(cartArray, productsArray) {
    let total = 0;
    //Loop through the cart to calculate the subtotal then add subtotal to the total.
    //Will need to get quantity from cart and costArray from productsArray
    for (let i = 0; i < cartArray.length; i++) {
        const cartItem = cartArray[i].id;
        const inventoryItem = findById(productsArray, cartItem);
        const subtotal = cartArray[i].quantity * inventoryItem.price;
        total += subtotal;
    }
    return total;
}