import { coffees } from '../data/coffee.js';
import { cart } from '../data/cart.js';
import { findByID, renderLineItem, calcOrderTotal } from './cart-utils.js';

const tbody = document.querySelector('#cartTable');

for (let i = 0; i < cart.length; i++){
    const cartItem = cart[i];
    const product = findByID(coffees, cartItem.id)

    const td = renderLineItem(cartItem, product)

    tbody.appendChild(td);
}

const totalLineTD = document.createElement('tr');
const total = calcOrderTotal(cart, coffees);
totalLineTD.innerHTML = `<tr><td colspan="3">Total</td><td>${total}</td></tr>`;
tbody.append(totalLineTD);