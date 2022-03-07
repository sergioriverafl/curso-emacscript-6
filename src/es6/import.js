import { Hello } from "./module";

hello();


// Generators

function* helloWord(){
    if(true){
        yield 'Hello true'
    }
    if(true){
        yield 'Word'
    }
}

const generatorHello = helloWord();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

// ¿Qué se implementó en ES7?

