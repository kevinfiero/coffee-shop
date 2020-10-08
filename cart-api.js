import { setInLocalStorage, getFromLocalStorage } from '/utils.js';

export function clearCart(){
    localStorage.removeItem('cart');
}

export function getCart(){
    return getFromLocalStorage('cart');
}

export function setCart(cart){
    return setInLocalStorage('cart', cart);
}
