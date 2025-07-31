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
  sumarTotal()
}

function sumarTotal() {
  let total = lista.reduce((a, b) => a + b, 0);
  tuCuenta.innerHTML = `Tu cuenta $${total}`;
}

function deshacerMoneda() {
  let total = sumarTotal();
  total.pop();
  tuCuenta.innerHTML = `Tu cuenta $${total}`;
}
