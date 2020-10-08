import { findByID } from '../utils.js';

export function calcLineItem(quantity, amount){
    return Number(quantity) * Number(amount);
}

export function renderLineItem(cartLineItem, product){
    const tr = document.createElement('tr');
    const productTD = document.createElement('td');
    const costTD = document.createElement('td');
    const quantityTD = document.createElement('td');
    const totalTD = document.createElement('td');
    productTD.textContent = product.name;
    costTD.textContent = `$${product.price}`;
    quantityTD.textContent = cartLineItem.quantity;
    totalTD.textContent = `$${calcLineItem(product.price, cartLineItem.quantity)}`;
    tr.append(productTD, costTD, quantityTD, totalTD);
    return tr;
}

export function calcOrderTotal(cartArray, productArray){
    let totalCost = 0;

    for (let i = 0; i < cartArray.length; i++){
        const cartItem = cartArray[i];
        const product = findByID(productArray, cartItem.id);
        const lineCost = calcLineItem(cartItem.quantity, product.price);
        totalCost = totalCost + lineCost; 
    }

    return totalCost;
}

//Refactor this function
export function hideCartElements(button, table, messageSection, state){

    if (state === true){
        button.style.display = 'none';
        table.style.display = 'none';
        messageSection.style.display = 'inline';
    } else {
        button.style.display = 'block';
        table.style.display = 'table';
        messageSection.style.display = 'none';
    }

}