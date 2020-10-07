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

// export function calcOrderTotal(cartArray, productsArray) {
//     const total = 0;
//     return total;
// }