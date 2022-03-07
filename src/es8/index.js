
const data = {
    frontend: 'Sergio',
    backend: 'Abril',
    design: 'Yubeli',
}

const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);


const data2 = {
    frontend: 'Sergio',
    backend: 'Abril',
    design: 'Yubeli',
}

const entries2 = Object.values(data2);

console.log(entries2);
console.log(entries2.length);

const string = 'hello';

console.log(string.padStart(8, ' hi'))
console.log('Yubeli'.padEnd(8, ' ----'))
console.log('Abril'.padEnd(8, '   ---'))
console.log('Sergio'.padEnd(8, '   ---'))

// Async Await


const HelloWord = () => {
    return new Promise((resolve, reject) =>{
        (true) 
        ? setTimeout( () => resolve('Hello Word'), 3000) 
        : reject(new Error('Test Error'));
    });
}

const HelloAsync = async () => {
    const hello = await HelloWord();
    console.log(hello)
}

HelloAsync();


const anotherFunction = async () => {
    try{
        const hello = await HelloWord();
        console.log(hello)
    } catch(error) {
        console.log(error)
    }
}

anotherFunction();