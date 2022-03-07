// es6

function newFunction(name='Sergio Rivera', age = 28, country = "COL"){
    console.log(`${name} ${age} ${country}`)
}

newFunction();

// Templates literales

console.log(`Asignación de textos largos, donde cada ENTER
significa un salto de línea`);

// Destructuración

let person = {
    'name':'Sergio',
    'age': 28,
    'country': 'COL'
};

// En ves de escribir person.name, en es6 se puede 
// realizar la destrucutración para acceder o modicar los datos del
// mismo.

let { name, age, country } = person;

console.log(name)

// Spread operator me permite unir elementos, si este operador
// se crearia un array con tres arrays 'sergio' y los otros.

let team1 = ['Oscar', 'Juan', 'Maria'];
let team2 = ['Leonardo', 'Daniela', 'Dania'];

let education = ['Sergio', ...team1, ...team2 ];

console.log(education)

// Tipo de variables y sus SCOPE´S

{
    var globalVar = 'Global VAR'
}

{
    let globalLET = 'Global LET'
    console.log(globalLET);
}

{
    const globalCONST = 'Global CONST'
    console.log(globalCONST);
}

console.log(globalVar);

// Arrow Functions, Promesas y Parámetros en objetos

// Creación de Objetos

let names = 'Sergio Rivera Flor';
let year = 2022;

// es5

obj = { names: names, year: year };

// es6

obj2 = { names, year };

console.log(obj)
console.log(obj2)

// Arrow functions

const users = [
    { name: 'Sergio', 'Age': 28 },
    { name: 'Abril', 'Age': 3 },
];
// es5
let listOfNames = users.map(function ( item ){
    console.log(item.name)
})
// es6
let listOfNames2 = users.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    console.log(`${name} ${age} ${country}`);
}

const listOfNames4 = name => {
    console.log(`${name}`);
}

const scuare = num => num * num;

// Promesas, teniendo en cuenta que js no es un lenguaje sincronico

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Hey!!');
        } else{
            reject('Upps!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error))
    

// Clases, Módulos y Generadores

class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return valueA + valueB; 
    }
}


const calc = new calculator();

console.log(calc.sum(1,5))

// Trabajar con modulos



