import { setInLocalStorage, getFromLocalStorage, findByID } from '../utils.js';
import { getCart, setCart } from '../cart-api.js';
//import { coffees } from '../data/coffee.js';

export function renderCoffee(coffee){

    const li = document.createElement('li');
    li.classList.add('product');

    const h2 = document.createElement('h2');
    h2.textContent = coffee.name;

    const img = document.createElement('img');
    img.src = `../assets/${coffee.image}`;

    const h3_1 = document.createElement('h3');
    h3_1.textContent = coffee.description;

    const h3_2 = document.createElement('h3');
    h3_2.textContent = `$${coffee.price.toFixed(2)}`;

    const buttonAdd = document.createElement('button');
    buttonAdd.id = coffee.id;
    buttonAdd.textContent = 'Add to Cart';

    const selectQuantity = document.createElement('select');
    selectQuantity.innerHTML = populateSelector();

    renderButtonListener(buttonAdd, coffee.id);

    renderSelectorListener(selectQuantity, coffee.id);

    li.append(h2, img, h3_1, h3_2, selectQuantity, buttonAdd);

    return li;
}

export function initializeQuantity(){

    const quantityArray = [];
    const coffees = getFromLocalStorage('PRODUCTS');
    for (let i = 0; i < coffees.length; i++){

        const thisQuantity = {
            id: coffees[i].id,
            quantity: Number(1)
        };

        quantityArray.push(thisQuantity);
    }
    setInLocalStorage('quantity', quantityArray);
}

function renderButtonListener(buttonAdd, id){

    buttonAdd.addEventListener('click', () => {
        const localStorageCart = getCart() || [];
        const currentCartProduct = findByID(localStorageCart, id); 

        const quantityString = 'quantity';
        const localStorageQuantity = getFromLocalStorage(quantityString) || [];
        const currentQuantity = findByID(localStorageQuantity, id); 

        if (currentCartProduct === null){

            const currentCartItem = {
                id: id,
                quantity: currentQuantity.quantity
            };
            localStorageCart.push(currentCartItem);

        } else {

            currentCartProduct.quantity = Number(currentCartProduct.quantity) + Number(currentQuantity.quantity);
        }
        setCart(localStorageCart);
    });
}

function renderSelectorListener(selectQuantity, id){

    selectQuantity.addEventListener('change', (e) => {

        const quantityString = 'quantity';
        const localStorageQuantity = getFromLocalStorage(quantityString) || [];

        const currentQuantity = findByID(localStorageQuantity, id); 

        if (currentQuantity === null){

            const currentQuantityItem = {
                id: id,
                quantity: e.target.value
            };
            localStorageQuantity.push(currentQuantityItem);

        } else {

            currentQuantity.quantity = e.target.value;
        }
        setInLocalStorage(quantityString, localStorageQuantity);
    });
}

function populateSelector(){
    let str = '<select>';

    for (var i = 1; i < 11; i++){
        str = str + `<option value=${i}>${i}</option>`;
    }
    str = str + '</select>';

    return str;
}