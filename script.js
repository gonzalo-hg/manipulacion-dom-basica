//Crear variables para selectores 
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

btn.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
    let suma = Number(input1.value) + Number(input2.value);
    //pResult.append(suma);
    pResult.innerText ="Resultado: " + suma;
    console.log(suma);
}

h1.addEventListener('mouseover', sumarInputValues);

function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
    let suma = Number(input1.value) + Number(input2.value);
    //pResult.append(suma);
    pResult.innerText ="Resultado: " + suma;
    console.log(suma);
}