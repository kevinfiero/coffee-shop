// Import data and functions
import { coffees } from '../data/coffee.js';
import { renderLineItem, calcOrderTotal, togglePlaceOrderButton } from './cart-utils.js';
import { getFromLocalStorage, findByID } from '../utils.js';

// Display the cart table on the page by looping through cart array to create line elements then adding total line

const tbody = document.querySelector('#cartTable');
const cartString = 'cart';
const localStorageCart = getFromLocalStorage(cartString) || [];
const placeOrderButton = document.getElementById('place-order');


// const tr = document.createElement('tr');
// tr.innerHTML = '<tr><th>Product</th><th>Unit Cost</th><th>Quantity</th><th>Product Cost</th></tr>';
// tbody.append(tr);


// for (let i = 0; i < localStorageCart.length; i++){
//     const cartItem = localStorageCart[i];
//     const product = findByID(coffees, cartItem.id);
//     const td = renderLineItem(cartItem, product);
//     tbody.appendChild(td);
// }

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

    togglePlaceOrderButton(placeOrderButton, false);
    const totalLineTD = document.createElement('tr');
    const total = calcOrderTotal(localStorageCart, coffees);
    totalLineTD.innerHTML = `<tr><td colspan="3">Total</td><td>$${total}</td></tr>`;
    tbody.append(totalLineTD);

} else {

    togglePlaceOrderButton(placeOrderButton, true);
}

placeOrderButton.addEventListener('click', () => {
    
    const alertString = JSON.stringify(localStorageCart, true, 2);
    alert(alertString);
    window.location.replace('../index.html');

    localStorage.removeItem(cartString);
    togglePlaceOrderButton(placeOrderButton, true);

});