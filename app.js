// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM


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

    return li;
}