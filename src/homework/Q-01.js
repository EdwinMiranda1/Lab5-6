(function () {
    /* NOMBRE CORRECTAMENTE LAS SIGUIENTES VARIABLES
       ADEMAS DE COMPROBAR SI USA LET O CONST,
       SE PUEDE REFACTORIZAR, ETC.
    */
    // Lista de emails de usuarios de Meta-X
    var listaEmails = [
        "email1@gmail.com",
        "email1@gmail.com",
        "email1@gmail.com"
    ];
    console.log(listaEmails);
    // Lista de compras de un carrito
    var listaCompras = [
        { product: "switch" },
        { product: "X-box Controller" },
        { product: "steam-gift-card" },
    ];
    console.log(listaCompras);
    // Función para sumar más 3 a un número y retornarlo
    var sumarTres = function (numero) {
        return numero + 3;
    };
    console.log(sumarTres(2));
    // Función para capitalizar una palabra pasada por parámetro
    // Identé o refactorice de ser necesario
    // El resultado no debería cambiar
    function capitalizar(palabra) {
        palabra = palabra.toLowerCase();
        var capitalizada = palabra.charAt(0).toUpperCase() + palabra.substring(1);
        return capitalizada;
    }
    console.log(capitalizar("capricorn"));
    // Variable que alerta en caso de que algún evento suceda
    var alertaEvento = false;
    if (alertaEvento)
        console.log('event');
    // Variable que se encarga de verificar 
    // si un usuario puede acceder o no
    var accesoPermitido = true;
    if (accesoPermitido)
        console.log('welcome');
    // Variable para hallar el promedio de 3 números
    var promedio = (1 + 2 + 3) / 3;
    console.log(promedio);
    // Variable que almacena el valor de PI
    var PI = 3.141592654;
    console.log(PI);
    // Variable que controla si un archivo es modificable 
    var editable = false;
    if (editable)
        console.log('edit this file?');
    // Variable para almacenar el valor de e
    var euler = 2.718281828;
})();
