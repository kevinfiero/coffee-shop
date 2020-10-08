import { getFromLocalStorage, setInLocalStorage } from '../utils.js';
import { coffees } from '../data/coffee.js';

export function addProduct(newProduct){
    const PRODUCTS = 'PRODUCTS';
    let currentProductsArray = getFromLocalStorage(PRODUCTS);

    if (currentProductsArray === null){
        
        currentProductsArray = coffees;
    }
    currentProductsArray.push(newProduct);
    setInLocalStorage(PRODUCTS, currentProductsArray);

}