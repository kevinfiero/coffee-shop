import { addProduct } from './form-util.js';

const addForm = document.getElementById('add-form');

addForm.addEventListener('submit', (e) => {
    
    e.preventDefault();
    const data = new FormData(addForm);

    const id = data.get('id');
    const name = data.get('name');
    const image = data.get('image');
    const description = data.get('description');
    const category = data.get('category');
    const price = data.get('price');

    const newProduct = {
        id: id,
        name: name,
        image: image,
        description: description,
        category: category,
        price: Number(price)
    };
    addProduct(newProduct);
});