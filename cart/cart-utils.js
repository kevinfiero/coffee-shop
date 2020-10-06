export function findByID(array, id){
    for (const element of array){
        if (element.id === id){
            return element;
        }
    }
    return null;
}

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