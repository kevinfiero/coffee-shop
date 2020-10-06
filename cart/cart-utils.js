export function findByID(array, id){
    for (const element of array){
        if (element.id === id){
            return element;
        }
    }
    return null;
}

export function calcLineItem(quantity, amount){

    return quantity * amount;
}