// IMPORT MODULES under test here:
import { productHtmlBuilder } from '../functions.js';
import { findById, calcLineItem, calcOrderTotal, addProduct, getFromLocalStorage, initializeProducts } from '../utils.js';
import { renderLineItems } from '../cart/render-line-items.js';
import { inventory } from '../sportinggoods.js';
import { cart } from '../data/sample-cart.js';

const test = QUnit.test;

test('Test will pass when function output matches the outerHTML of the product', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li class="product"><img src="../assets/bat.png"><div class="product-middle"><div class="name">Baseball Bat</div><div class="category">Baseball</div><div class="description">20oz Wooden Bat</div></div><div class="product-right"><button>Add</button><div class="price">$50.00</div></div></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const bat = {
        id: 'bat',
        name: 'Baseball Bat',
        image: '../assets/bat.png',
        category: 'Baseball',
        description: '20oz Wooden Bat',
        price: 50.00,
    };

    const actual = productHtmlBuilder(bat);
    const html = actual.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(html, expected);
});


//Test for findById
test('This function will take inputs of an array and an id value and return the first object with matching id value, if no match is found it will return null', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const bat = {
        id: 'bat',
        name: 'Baseball Bat',
        image: '../assets/bat.png',
        category: 'Baseball',
        description: '20oz Wooden Bat',
        price: 50.00,
    };
    
    const mitt = {
        id: 'mitt',
        name: 'Baseball Mitt',
        image: '../assets/mitt.png',
        category: 'Baseball',
        description: 'Leather Outfielders Mitt',
        price: 40.00,
    };
    
    const catchersMask = {
        id: 'catchersMask',
        name: 'Catcher\'s Mask',
        image: '../assets/mask.png',
        category: 'Baseball',
        description: 'Wire frame catchers mask',
        price: 30.00,
    };
    
    //Sample Array
    const testArray = [bat, mitt, catchersMask];

    const id = 'mitt'; 
    const id2 = 'not here';
    
    const expected = {
        id: 'mitt',
        name: 'Baseball Mitt',
        image: '../assets/mitt.png',
        category: 'Baseball',
        description: 'Leather Outfielders Mitt',
        price: 40.00,
    };
    const expected2 = null;

    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = findById(testArray, id);
    const actual2 = findById(testArray, id2);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
    expect.deepEqual(actual2, expected2);
});


//Test for calcLintItem
test('Test will take a quantity and a price and return the total to two decimal places', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 24.95;
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const quantity = 5;
    const price = 4.99;

    const actual = calcLineItem(quantity, price);
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


//Test for DOM Render Function
test('This function take a cart line item and the corresponding product and returns dom that matches the static html example.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<tr><td class=""><img src="../assets/bat.png"></td><td class="">Baseball Bat</td><td class="">$50.00</td><td class="">2</td><td class="">$100.00</td></tr>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const cartLineItem = {
        id: 'bat',
        quantity: 2,
    };
    const product = {
        id: 'bat',
        name: 'Baseball Bat',
        image: '../assets/bat.png',
        category: 'Baseball',
        description: '20oz Wooden Bat',
        price: 50.00,
    }; 
 
    const actual = renderLineItems(cartLineItem, product);
    const html = actual.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(html, expected);
});


//Test for calcOrderTotal
test('This function will take in the cart array and the product array and return the grand total of items in the cart', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 480;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const cartArray = cart;
    const productArray = inventory;
 
    const actual = calcOrderTotal(cartArray, productArray);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//Test for addProduct
test('This function will take in the new product and add the new product to the product list', (expect) => {
    //Arrange
    // Set up your arguments and expectations, "inventory from sportinggoods.js"
    const expected = {
        id: 'card',
        name: 'Ken Griffey Jr. Card',
        image: '../assets/kgj-card.png',
        category: 'Baseball',
        description: 'Baseball Card',
        price: 24.00,
    };

    initializeProducts();
 
    //Act 
    // Call the function you're testing and set the result to a const
    addProduct(expected);

    const newProductsArray = getFromLocalStorage('theProducts');
    const actual = newProductsArray[(newProductsArray.length - 1)];

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
