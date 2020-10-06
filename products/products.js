import { coffees } from '../coffee.js';
import { renderCoffee } from '../utils.js';

const ul = document.querySelector('#productList');

for (let i = 0; i < coffees.length; i++){
    const coffee = coffees[i];

    const li = renderCoffee(coffee);
    
    ul.appendChild(li);

}

