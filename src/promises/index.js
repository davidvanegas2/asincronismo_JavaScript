const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Lo logramos!');
        } else {
            reject('No funciono!');
        }
    });
}; 

/* const somethingWillHapped = new Promise( (resolve, reject) => { //De esta manera se declara como variable y no es necesario llamar a una funcion
    if (true) {
        console.log('Hey dude!');
        resolve('Hey!');
    } else {
        reject('Whoops!');
    }
}); */

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

//------------------------------------------------------------------------------------------------------------

const somethingWillHappen2 = () => {
    //Creamos una promesa con su resolve y su reject
    return new Promise((resolve, reject) => {
        //Si es True entonces va a esperar 2 segundos para dar un resolve
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000);
        } else {   //Si es false entonces va a crear una instancia de error donde muestra todo el trace por consola
            const error = new Error('Whoops!');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.error(error))

//-------------------------------------------------------------------------------------------------------------
//Esta linea de codigo va a ejecutar todas las promesas que se encuentren dentro del Array
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results: ', response);
    })
    .catch(error => console.log(error));