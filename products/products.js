//import { coffees } from '../data/coffee.js';
import { renderCoffee, initializeQuantity } from './product-utils.js';
import { seedAndGetProducts } from '../product-form/form-util.js';
import { getFromLocalStorage } from '../utils.js';

const ul = document.querySelector('#productList');

seedAndGetProducts();
initializeQuantity();

const coffees = getFromLocalStorage('PRODUCTS');

for (let i = 0; i < coffees.length; i++){
    const coffee = coffees[i];
    const li = renderCoffee(coffee);
    ul.appendChild(li);
}

