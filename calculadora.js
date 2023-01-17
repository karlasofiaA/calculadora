console.log('Inicio Calculadora');
//Variables
const result = document.querySelector('#result');
let numeros = [];
//Función flecha operaciones básicas
let sumar = (valorUno, valorDos) => valorUno + valorDos;
let restar = (valorUno, valorDos) => valorUno - valorDos;
let multiplicar = (valorUno, valorDos) => valorUno * valorDos;
let dividir = (valorUno, valorDos) => valorUno / valorDos;

//Funcion crear un array de los valores ingresados
valores = () => {
    numeros = [parseFloat(document.querySelector('#valorUno').value), parseFloat(document.querySelector('#valorDos').value)];
    console.log(numeros);
}
// Funcines realizar las operaciones básicas
function realizarSuma() {
    valores();
    console.log(sumar(Number(numeros[0]), Number(numeros[1])));
    result.innerHTML = `${Number(numeros[0])} + ${Number(numeros[1])} = ${sumar(Number(numeros[0]), Number(numeros[1]))}`
}

function realizarResta() {
    valores();
    console.log(restar(Number(numeros[0]), Number(numeros[1])));
    result.innerHTML = `${Number(numeros[0])} - ${Number(numeros[1])} = ${restar(Number(numeros[0]), Number(numeros[1]))}`
}

function realizarMultiplicacion() {
    valores();
    console.log(multiplicar(Number(numeros[0]), Number(numeros[1])));
    result.innerHTML = `${Number(numeros[0])} * ${Number(numeros[1])} = ${multiplicar(Number(numeros[0]), Number(numeros[1]))}`
}

function realizarDivision() {
    valores();
    console.log(dividir(Number(numeros[0]), Number(numeros[1])));
    result.innerHTML = `${Number(numeros[0])} / ${Number(numeros[1])} = ${(dividir(Number(numeros[0]), Number(numeros[1]))).toFixed(2)}`
}

//Función limpiar los valores obtenidos con form
let contador = 1;
function limpiar() {
    document.getElementById("form").reset();
    let parrafo = document.getElementById('result');
    if (parrafo.hasChildNodes()) {
        parrafo.removeChild(parrafo.lastChild);
        contador--;
        result.innerHTML = ("=")
    } 
}

function esNumerico(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}




