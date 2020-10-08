import { coffees } from '../data/coffee.js';
import { renderCoffee, initializeQuantity } from './product-utils.js';

const ul = document.querySelector('#productList');

for (let i = 0; i < coffees.length; i++){
    const coffee = coffees[i];
    const li = renderCoffee(coffee);
    ul.appendChild(li);
}

initializeQuantity();