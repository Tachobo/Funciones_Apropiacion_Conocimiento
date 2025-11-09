import{
    validarNumero,
    esPrimo,
}from './Modulo/index.js';

const numero = parseFloat(prompt("Por favor ingresa un numero entero mayor a 1"));
function resultadoFinal(numero){
    if(!validarNumero(numero)){
        alert(`Numero invalido, por favor ingrese un numero que sea entero y mayor a 1, recuerde que los enteros son aquellos numeros sin decimales, ejemplo: 5, 4, 3, 2`)
        return;
    }
    if(esPrimo(numero)){
        console.log(`El numero ${numero} es un numero primo`)
    }
    else{
        console.log(`El numero ${numero} no es primo`)
    }
}
resultadoFinal(numero);