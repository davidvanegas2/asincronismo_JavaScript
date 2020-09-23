/* Utilizo async y await para ver como funcionan 
Para eso debo hacer uso de las promesas */
const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => {
               resolve('Do something Async') 
            }, 3000)
            : reject(new Error('Test error!'))
    });
}
/* Aca hago uso de ASYNC() para definir a la función que
es una función asincrona y que se va a comportar de la misma manera */
const doSomething = async() => {
    const something = await doSomethingAsync();
    console.log(something);
};

console.log('Before');
doSomething();
console.log('After');

const anotherFunction = async() => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error) {
        console.error(error);
    }
};

console.log('Before -> 1');
anotherFunction();
console.log('After -> 1');