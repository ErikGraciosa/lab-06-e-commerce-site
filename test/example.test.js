// IMPORT MODULES under test here:
import { productHtmlBuilder } from '../functions.js';

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
