import { findByID } from '../cart/cart-utils.js';

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

    buttonAdd.addEventListener('click', () => {
        const cartString = 'cart';
        const localStorageCart = getFromLocalStorage(cartString) || [];
        console.log(localStorageCart);
        //NOTE: Move findByID to another util function since it spans product and cart
        const currentCartProduct = findByID(localStorageCart, coffee.id); 
        console.log(currentCartProduct);


        if (currentCartProduct === null){

            console.log('create');
            const currentCartItem = {
                id: coffee.id,
                quantity: 1
            };

            localStorageCart.push(currentCartItem);
            console.log(localStorageCart);

        } else {
            
            console.log('plus');
            currentCartProduct.quantity++;
            
        }
        setInLocalStorage(cartString, localStorageCart);
    });

    li.append(h2, img, h3_1, h3_2, buttonAdd);

    return li;
}


function getFromLocalStorage(key){

    return JSON.parse(localStorage.getItem(key));

}

function setInLocalStorage(key, value){

    localStorage.setItem(key, JSON.stringify(value));

}




