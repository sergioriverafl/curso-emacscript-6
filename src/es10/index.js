let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

let array2 = [1,2,3,4,5,6];

console.log(array2.flatMap(value => [value, value * 2]))


let hello = '      Hola @sergioriverafl ';
console.log(hello)
console.log(hello.trimStart())
console.log(hello.trimEnd())

// Optional catch

try{

}catch{
    error // error ya esta disponible sin pasarlo como parametro en el catch
}

// fromEntries

let entries = [ ['name', 'Sergio'], ['age', '28'] ];

console.log(Object.fromEntries(entries))

// Objeto de tipo symbolo


let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);

console.log(symbol.description)
