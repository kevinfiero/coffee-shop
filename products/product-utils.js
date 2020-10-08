import { setInLocalStorage, getFromLocalStorage, findByID } from '../utils.js';

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
    //loop to create
    selectQuantity.innerHTML = '<select><option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option></select>';

    renderButtonListener(buttonAdd, coffee.id);

    renderSelectorListener(selectQuantity, coffee.id);

    li.append(h2, img, h3_1, h3_2, selectQuantity, buttonAdd);

    return li;
}

function renderButtonListener(buttonAdd, id){

    buttonAdd.addEventListener('click', () => {
        const cartString = 'cart';
        const localStorageCart = getFromLocalStorage(cartString) || [];
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

            currentCartProduct.quantity = currentCartProduct.quantity + currentQuantity.quantity;
            
        }
        setInLocalStorage(cartString, localStorageCart);
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