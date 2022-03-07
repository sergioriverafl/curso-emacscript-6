const button = document.getElementById('btn');

button.addEventListener("click", async function (){
    const module = await import("./file.js");
    module.hello();
})


const aBIgnumber = 900077777777777777n;

const anotherBigInt = BigInt(900077777777777777);

console.log(aBIgnumber)
console.log(anotherBigInt)

const promise1 = new Promise( (resolve, reject) => reject("reject"))
const promise2 = new Promise( (resolve, reject) => resolve("resolve"))
const promise3 = new Promise( (resolve, reject) => resolve("resolve 3"))

Promise.allSettled([ promise1, promise2, promise3])
    .then(response => console.log(response))

console.log(window)

console.log(globalThis)

const foo = null ?? 'default string'

console.log(foo)

// Optional chaining

const user = {};
console.log(user?.profile?.email)

if(user?.profile?.email){
    console.log('email')
}else{
    console.log('fail')
}
