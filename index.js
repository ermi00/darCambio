let btn50cc = document.getElementById("btn$50cc");
let btn1 = document.getElementById("btn$1");
let btn2 = document.getElementById("btn$2");
let btn5 = document.getElementById("btn$5");
let btn10 = document.getElementById("btn$10");
let btn20 = document.getElementById("btn$20");
let btn50 = document.getElementById("btn$50");
let btn100 = document.getElementById("btn$100");
let btn200 = document.getElementById("btn$200");
let btn500 = document.getElementById("btn$500");
let btn1000 = document.getElementById("btn$1000");
let tuCuenta = document.getElementById("tuCuenta");

let lista = [];

function meterMoneda(boton) {
  lista.push(parseInt(boton.value));
  let total = lista.reduce((a, b) => a + b, 0);
  tuCuenta.innerHTML = `Tu cuenta $${total}`;
  console.log(`Esto vale lista ahora --> ${lista}`);
  console.log(`Esto vale el total ahora --> ${total}`);
}

function deshacerMoneda() {
  let total = lista.reduce((a, b) => a + b, 0);
  lista.pop();
  let nuevoTotal = lista.reduce((a, b) => a + b, 0);
  tuCuenta.innerHTML = `Tu cuenta $${nuevoTotal}`;
  console.log(`DESHACER Esto vale lista ahora --> ${lista}`);
  console.log(`DESHACER Esto vale el total ahora --> ${nuevoTotal}`);
} 
