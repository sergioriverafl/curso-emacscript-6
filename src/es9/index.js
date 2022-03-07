// Operador de reposo el cual puede obtener la
// propiedades de un objeto que aun no se ha construido

const obj = {
    name: 'Sergio',
    edad: 28,
    country: 'CO',
}

let { name, ...all } = obj;

console.log(all)

// Operador de estructuración

const obj2 = {
    name: 'Oscar',
    edad: 28,
}

const obj3 = {
    country: 'MX',
}

const objBig = {
    ...obj,
    country: 'MX',
}

console.log(objBig);

// Promise finally

const HelloWord = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve('Hwello Word')
        : reject('Test error');
    })
}

HelloWord()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() =>console.log('Finalizó la ejecución de la promesa') )

// rejex


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexData.exec('2022-03-10');

console.log(match)

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year);
console.log(month);
console.log(day);