export function findById(array, id) {
    let objectFound = {};
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            console.log(array[i]);
            objectFound = array[i];
        }    
    }
    console.log(objectFound);
    return objectFound;
}
export function calcLineItem(quantity, price) {
    const subtotal = 0;
    return subtotal;
}

export function calcOrderTotal(cartArray, productsArray) {
    const total = 0;
    return total;
}