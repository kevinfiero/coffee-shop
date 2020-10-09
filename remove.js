import { seedAndGetProducts } from './product-form/form-util.js';
import { getFromLocalStorage, setInLocalStorage, findByID } from './utils.js';
import { getCart, setCart } from './cart-api.js';

const ul = document.querySelector('#removeList');

seedAndGetProducts();

const coffees = getFromLocalStorage('PRODUCTS');

for (let i = 0; i < coffees.length; i++){
    const coffee = coffees[i];
    const li = renderDelete(coffee);
    ul.appendChild(li);
}

export function renderDelete(coffee){

    const li = document.createElement('li');
    li.classList.add('product');

    const h2 = document.createElement('h2');
    h2.textContent = coffee.name;

    const img = document.createElement('img');
    img.src = `../assets/${coffee.image}`;

    const buttonDelete = document.createElement('button');
    buttonDelete.id = coffee.id;
    buttonDelete.textContent = 'Remove';


    renderRemoveListener(buttonDelete, coffee.id);

    li.append(h2, img, buttonDelete);

    return li;
}

function renderRemoveListener(buttonDelete, id){

    buttonDelete.addEventListener('click', () => {
        const coffees = getFromLocalStorage('PRODUCTS');
        const currentProduct = findByID(coffees, id); 

        if (currentProduct !== null){

            const i = coffees.indexOf(currentProduct);
            coffees.splice(i, 1);
        }
        
        const currentCart = getCart();
    
        if (findByID(currentCart, currentProduct.id) !== null){

            const currentCartItem = findByID(currentCart, currentProduct.id);
            const j = currentCart.indexOf(currentCartItem);
            currentCart.splice(j, 1);
            setCart(currentCart);
        }  
    
        setInLocalStorage('PRODUCTS', coffees);
        location.reload();
    });
}
