let numeroMaximo = 10
let listaNumerosSorteados = [];
let numeroSecreto = generarNumeroAleatorio();
let intentos = 1;



function asignarElementoTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;
}

//Con esta funcion se creo el intento de usuario si el numero del usuario que es lo que se coloco en el input es es igual al número generado
//aleatoriamente entonces se va poner la funcion para asignar elemento y texto en la pantalla y se dirá que acertó en "n" veces
function intentoDeUsuario() {
    let numeroDeUsuario = parseInt(document.getElementById("ValorUsuario").value);
    if (numeroDeUsuario == numeroSecreto) {
        asignarElementoTexto("p",`Acertaste el número en ${intentos} ${(intentos === 1 ? `vez` : `veces`)} `);
        document.getElementById("reiniciar").removeAttribute(`disabled`)           //entonces //sino
    } else {                                               //Quitar atributo del otro botón
        if (numeroDeUsuario > numeroSecreto) {
            asignarElementoTexto("p","El número es menor")
        } else {
            asignarElementoTexto("p", "El nímero es mayor")
        }
        intentos++
        limpiarCaja();
    }
    console.log(numeroSecreto === numeroDeUsuario);
    return; 
    
}
//Esta es la funcioón para limpair la caja 
function limpiarCaja () {
   document.getElementById(`ValorUsuario`).value = ``;

}
//Con esta funcio+on se genera el número aleatorio
function generarNumeroAleatorio() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1
    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
    if (listaNumerosSorteados.length == numeroMaximo) { 
        asignarElementoTexto(`p`,`ya se sortearon todos los números posibles`);
    } else {
   // Si el número esta en la lista hacemos una acción, sino hacemos otra 
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroAleatorio();
         } else {
        listaNumerosSorteados.push(numeroGenerado)
        return numeroGenerado
        }
    }
}

//Esta función es para unir todas las condiciones necesarias para restarurar el juego, pero si quito otras funciones de otro lado, la debo
//lamar de nuevo afuera de esta condición
function condicionesIniciales() {
asignarElementoTexto(`h1`,`Juego del número al azar`);
asignarElementoTexto(`p`,`Selecciona un número del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroAleatorio();
intentos = 1;
}

//Aquí se creó la función para reiniciar el juego 
function ReiniciarJuego() {
    //limpiar caja 
    limpiarCaja()
    //Indicar mensjae de intervalo
    //generar número aleatorio 
    //Desabilitar el boton de nuevo juego //Con el setAttribute se da un atributo, se debe poner el atributo y el true
    document.getElementById(`reiniciar`).setAttribute(`disabled`, `true`);
    //Inicializar número de intentos 
    condicionesIniciales() 
}

condicionesIniciales(); 


let numerosSorteados = [];

