/* SOBRE LA FUNCIÓN CALLBACK
Un callback (llamada de vuelta) es una función 
que recibe como argumento otra función y la ejecuta. 

Es importante tener en cuenta que cuando pasamos un callback 
solo pasamos la definición de la función y no la ejecutamos en el parámetro. 
Así, la función contenedora elige cuándo ejecutar el callback.
https://medium.com/@anamartinezaguilar/callbacks-en-javascript-8deeca9824b4 */


//Primer ejemplo
function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(6,2,sum));

//Segundo ejemplo
function date(callback) {
    console.log(new Date);
    setTimeout( function() {
        let date = new Date;
        callback(date);
    }, 3000);
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);

