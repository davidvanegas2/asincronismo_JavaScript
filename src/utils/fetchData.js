//Nuestra implementacion va a trabajar sobre Node.js
//Hay que instalar una dependencia que se llama xmlhttpsrequest
//Esto para poder realizar peticiones hacia algun servicio como una URL o una API

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    //Esta funcion se utiliza para hacer la peticion, 1er parametro el servicio que vamos a usar
    //Segundo parametro es la URL del API y el ultimo parametro un bool donde true significa que es asincrona
    xhttp.open("GET", url_api, true);

    xhttp.onreadystatechange = () => {
      /*
        los estados que puede tener son:
        estado 0: inicializado
        estado 1: cargando
        estado 2: ya se cargó
        estado 3: ya hay información
        estado 4: solicitud completa
        PD: recuerda estas trabajando con una API externa osea un servidor por lo que
        depende del servidor cuanto demore en cada estado haces un pedido por datos
        (request) y solo es aplicar lógica.
        */
      if (xhttp.readyState === 4) {
        //Verificar estado, aqui un resumen de los casos mas comunes:
        /*
              ESTADO 1xx (100 - 199): Indica que la petición esta siendo procesada.
              ESTADO 2xx (200 - 299): Indica que la petición fue recibida, aceptada y procesada correctamente.
              ESTADO 3xx (300 - 399): Indica que hay que tomar acciones adicionales para completar la solicitud. Por lo general indican redireccionamiento.
              ESTADO 4xx (400 - 499): Errores del lado del cliente. Indica se hizo mal la solicitud de datos.
              ESTADO 5xx (500 - 599): Errores del Servidor. Indica que fallo totalmente la ejecución.
              */
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Error", url_api));
      }
    };
    //Envio de la solicitud
    xhttp.send();
  });
};

module.exports = fetchData;
