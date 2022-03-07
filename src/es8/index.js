
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
