//import { coffees } from '../data/coffee.js';
import { renderLineItem, calcOrderTotal, toggleCartElements } from './cart-utils.js';
import { findByID, getFromLocalStorage } from '../utils.js';
import { clearCart, getCart } from '../cart-api.js';

const tbody = document.querySelector('#cartTable'); 
const table = document.getElementsByTagName('table')[0]; 
const messageSection = document.getElementsByTagName('section')[0]; 
const localStorageCart = getCart() || [];
const placeOrderButton = document.getElementById('place-order');

toggleCartElements(placeOrderButton, table, messageSection, true);
const coffees = getFromLocalStorage('PRODUCTS');
if (localStorageCart.length > 0){

    const tr = document.createElement('tr');
    tr.innerHTML = '<tr><th>Product</th><th>Unit Cost</th><th>Quantity</th><th>Product Cost</th></tr>';
    tbody.append(tr);  
    
    for (let i = 0; i < localStorageCart.length; i++){
        const cartItem = localStorageCart[i];
        const product = findByID(coffees, cartItem.id);
        const td = renderLineItem(cartItem, product);
        tbody.appendChild(td);
    }

    toggleCartElements(placeOrderButton, table, messageSection, false);
    const totalLineTD = document.createElement('tr');
    const total = calcOrderTotal(localStorageCart, coffees);
    totalLineTD.innerHTML = `<tr><td colspan="3">Total</td><td>$${total}</td></tr>`;
    tbody.append(totalLineTD);

} else {

    toggleCartElements(placeOrderButton, table, messageSection, true);
}

placeOrderButton.addEventListener('click', () => {
    
    const alertString = JSON.stringify(localStorageCart, true, 2);
    alert(alertString);
    window.location.replace('../index.html');

    clearCart();
    
    toggleCartElements(placeOrderButton, table, messageSection, true);

});

