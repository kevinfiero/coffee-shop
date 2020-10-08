import { getFromLocalStorage, setInLocalStorage } from '../utils.js';
import { coffees } from '../data/coffee.js';

export function addProduct(newProduct){
    const PRODUCTS = 'PRODUCTS';

    seedAndGetProducts();

    let currentProductsArray = getFromLocalStorage(PRODUCTS);
    currentProductsArray.push(newProduct);
    setInLocalStorage(PRODUCTS, currentProductsArray);
}

function seedAndGetProducts(){

    if (getFromLocalStorage('PRODUCTS') === null){
        
        setInLocalStorage('PRODUCTS', coffees);
    }
}