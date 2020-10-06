export function findByID(array, id){

    for (const element of array){

        if (element.id === id){

            return element;
        }
    }

}