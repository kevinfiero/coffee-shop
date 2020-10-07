// IMPORT MODULES under test here:
import { renderCoffee } from '../products/product-utils.js';
import { findByID, calcLineItem, renderLineItem, calcOrderTotal } from '../cart/cart-utils.js';

// Static Test Data

const frenchRoast = 
        {
            id: 'french-roast-12oz',
            name: 'French Roast',
            image: 'french-roast.png',
            description: '12oz French Roast',
            category: 'Organic',
            price: 16
        };

const ndaroini =
    {
        id: 'ndaroini-12oz',
        name: 'Kenya Ndaroini',
        image: 'ndaroini.png',
        description: '12oz Kenya Ndaroini',
        category: 'Single Origin Orangic',
        price: 19
    };

const houseBlend =
    {
        id: 'house-blend-12oz',
        name: 'House Blend',
        image: 'house-blend.png',
        description: '12oz House Blend',
        category: 'Organic',
        price: 15
    };

const frenchRoastCart =    
    {
        id: 'french-roast-12oz',
        quantity: 3
    };

const houseBlendCart =  
    {
        id: 'house-blend-12oz',
        quantity: 4
    };

const ndaroiniCart =  
    {
        id: 'ndaroini-12oz',
        quantity: 1
    };
    
// Tests

const test = QUnit.test;

test('test renderCoffee', (expect) => {
    const actual = renderCoffee(frenchRoast).outerHTML;
    const expected = '<li class="product"><h2>French Roast</h2><img src="../assets/french-roast.png"><h3>12oz French Roast</h3><h3>$16.00</h3><button id="french-roast-12oz">Add to Cart</button></li>';
    expect.equal(actual, expected);
});

test('test findByID', (expect) => {
    const coffeeArray = [frenchRoast, ndaroini, houseBlend];
    const id = 'ndaroini-12oz';
    const actual1 = findByID(coffeeArray, id);
    const expected1 = ndaroini;
    const actual2 = findByID(coffeeArray, 'fakeID');
    const expected2 = null;
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
});

test('test calcLineItem', (expect) => {
    const quantity1 = 5;
    const amount1 = 10;
    const quantity2 = 1.26;
    const amount2 = 7;
    const actual1 = calcLineItem(quantity1, amount1);
    const expected1 = 50;
    const actual2 = calcLineItem(quantity2, amount2);
    const expected2 = 8.82;
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
});

test('test renderLineItem', (expect) => {
    const actual = renderLineItem(frenchRoastCart, frenchRoast).outerHTML;
    const expected = '<tr><td>French Roast</td><td>$16</td><td>3</td><td>$48</td></tr>';
    expect.equal(actual, expected);
});

test('test calcOrderTotal', (expect) => {
    const cartArray = [frenchRoastCart, houseBlendCart, ndaroiniCart];
    const coffeeArray = [frenchRoast, ndaroini, houseBlend];
    const actual = calcOrderTotal(cartArray, coffeeArray);
    const expected = 127;
    expect.equal(actual, expected);
});