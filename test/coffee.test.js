// IMPORT MODULES under test here:
import { renderCoffee } from '../utils.js';

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
