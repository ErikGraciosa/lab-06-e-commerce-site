



export function renderLineItems(cartLineItem, product) {
    //Create tags    
    const tr = document.createElement('tr');
    const tdImage = document.createElement('td');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdSubtotal = document.createElement('td');
    const img = document.createElement('img');

    //Update the empty class lists
    tdImage.classList.add();
    tdName.classList.add();
    tdPrice.classList.add();
    tdQuantity.classList.add();
    tdSubtotal.classList.add();

    //Get product info
    const quantity = cartLineItem.quantity;



    //Add textContext
    img.src = product.image; //image key needs to go here
    tdName.textContent = product.name;
    tdPrice.textContent = `$${product.price.toFixed(2)}`;
    tdQuantity.textContent = quantity;
    const subTotal = quantity * product.price;
    tdSubtotal.textContent = `$${subTotal.toFixed(2)}`;

    //Inject to the <tr>
    tr.append(tdImage, tdName, tdPrice, tdQuantity, tdSubtotal);
    tdImage.appendChild(img);
    
    
    
    return tr;
}


