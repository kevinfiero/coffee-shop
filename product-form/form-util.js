import { getFromLocalStorage, setInLocalStorage } from '../utils.js';
import { coffees } from '../data/coffee.js';
import { initializeQuantity } from '../products/product-utils.js';

export function addProduct(newProduct){
    const PRODUCTS = 'PRODUCTS';

    seedAndGetProducts();

    let currentProductsArray = getFromLocalStorage(PRODUCTS);
    currentProductsArray.push(newProduct);
    setInLocalStorage(PRODUCTS, currentProductsArray);
    initializeQuantity();
}

export function seedAndGetProducts(){

    if (getFromLocalStorage('PRODUCTS') === null){
        
        setInLocalStorage('PRODUCTS', coffees);
    }
}

