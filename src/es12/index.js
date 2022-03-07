const myText = "JavaScript es maravilloso, con JavaScript puedo construir el futuro de la web";

const replacedString = myText.replace("JavaScript", "Python");

console.log(replacedString)

const replacedStringAll = myText.replaceAll("JavaScript", "Python");

console.log(replacedStringAll)


class Message{
    #show(val){
        console.log(val)
    };

    // getters and setters

    // get #add(val){
        
    // }

    // set #edi(val){

    // }
}

const message = new Message();

message.show('Hola');

// Promise.any retorna la primera promesa que se resuelva

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response))

// Referencia devil a un elemento para evitar que sea recojido por el recolectro de basura.



class AnyClass{
    constructor(element){
        this.ref = new WeakRef(element)
    }    
}

//

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse)


isTrue = true;
isFalse = false;
console.log(isTrue ||= isFalse)

isTrue = true;
isFalse = false;
console.log(isTrue ??= isFalse)

