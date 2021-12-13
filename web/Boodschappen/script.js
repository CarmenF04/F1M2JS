console.log("Script is geladen")

const groentevak = document.getElementById('groente');
const fruitvak = document.getElementById('fruit');

function zetInFruitLa(fruit){
    console.log('fruit');

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = fruit;
    nieuwElement.className = 'blue';
    fruitvak.appendChild(nieuwElement); 
}

function zetInGroenteLa(groente){
    console.log('groente');

    const newElement = document.createElement('h2');
    newElement.innerHTML = groente;
    newElement.className = 'purple';
    groentevak.appendChild(newElement);
}
