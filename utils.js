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


    li.appendChild(h2);
    li.appendChild(img);
    li.appendChild(h3_1);
    li.appendChild(h3_2);
    li.appendChild(buttonAdd);

    return li;
}




