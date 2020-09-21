//Para correr este codigo desde consola se modifico el package.json en la parte de script
//Por ende solo queda ir a la consola y escribir "npm run callback"

function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(30, 2, sum));

//Ahora vamos a usar este ejemplo pero con TIEMPOS

function date(callback){
    console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date);
    }, 3000);
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);