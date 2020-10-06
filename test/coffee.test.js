// IMPORT MODULES under test here:
import { renderCoffee } from '../products/product-utils.js';
import { findByID, calcLineItem } from '../cart/cart-utils.js';

const test = QUnit.test;

test('test rendering French Roast coffee', (expect) => {
    const coffeeTest =
    {
        id: 'french-roast-12oz',
        name: 'French Roast',
        image: 'french-roast.png',
        description: '12oz French Roast',
        category: 'Organic',
        price: 16
    };

    const actual = renderCoffee(coffeeTest).outerHTML;

    const expected = '<li class="product"><h2>French Roast</h2><img src="../assets/french-roast.png"><h3>12oz French Roast</h3><h3>$16.00</h3><button id="french-roast-12oz">Add to Cart</button></li>';

    expect.equal(actual, expected);
});

test('test finding object by ID', (expect) => {

    const frenchRoast = 
        {
            id: 'french-roast-12oz',
            name: 'French Roast',
            image: 'french-roast.png',
            description: '12oz French Roast',
            category: 'Organic',
            price: 16
        };

    const hairBender =
        {
            id: 'hair-bender-12oz',
            name: 'Hair Bender',
            image: 'hair-bender.png',
            description: '12oz Hair Bender',
            category: 'Organic',
            price: 15
        };

    const hollerMountain =
    {
        id: 'holler-mountatin-12oz',
        name: 'Holler Mountain',
        image: 'holler-mountain.png',
        description: '12oz Holler Mountain',
        category: 'Organic',
        price: 16
    };
    
    const coffeeArray = [frenchRoast, hairBender, hollerMountain];

    const id = 'hair-bender-12oz';

    const actual1 = findByID(coffeeArray, id);
    const expected1 = hairBender;

    const actual2 = findByID(coffeeArray, 'fakeID');
    const expected2 = null;

    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
});

test('test finding object by ID', (expect) => {

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