let btn0 = document.getElementById("btn$0") 
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
let ptotalCuenta = document.getElementById("totalCuenta");
let pteDan = document.getElementById("teDan");
let pMensajes = document.getElementById("pMensajes");
let divBilletes = document.getElementById("divBilletes");
let divMonedas = document.getElementById("divMonedas");
let iconoCambiar = document.getElementById("iconoCambiar")
let contador = 0

let totalCuenta = Math.floor(Math.random() * 100);
let cambioDado;

let billete10 = {
  nombre: "10",
  valor: 10 - totalCuenta,
};

let billete20 = {
  nombre: "20",
  valor: 20 - totalCuenta,
};

let billete50 = {
  nombre: "50",
  valor: 50 - totalCuenta,
};

let billete100 = {
  nombre: "100",
  valor: 100 - totalCuenta,
};

let billete200 = {
  nombre: "200",
  valor: 200 - totalCuenta,
};

let billete500 = {
  nombre: "500",
  valor: 500 - totalCuenta,
};

let billetes = [
  billete10,
  billete20,
  billete50,
  billete100,
  billete200,
  billete500,
];

let teDan = parseInt(queBilleteUsar(billetes));
let lista = [];

function meterMoneda(boton) {
  lista.push(parseFloat(boton.value));
  let total = lista.reduce((a, b) => a + b, 0);
  tuCuenta.innerHTML = `Tu cuenta $ ${total.toFixed(2)}`;
  cambioDado = total;
}

function deshacerMovimiento() {
  lista.pop();
  let nuevoTotal = lista.reduce((a, b) => a + b, 0);
  tuCuenta.innerHTML = `Tu cuenta $ ${nuevoTotal.toFixed(2)}`;
  cambioDado = total;
}

function queBilleteUsar(billetes) {
  let lista = [];

  for (let billete of billetes) {
    if (billete.valor >= 0) lista.push(billete);
  }

  return lista[0].nombre;
}

function entregarCambio() {
  resultado = teDan - totalCuenta;
  resultadoUsuario = cambioDado;

  if (resultado == resultadoUsuario) {
    pMensajes.style.backgroundColor = "black";
    pMensajes.style.fontSize = "20px";
    pMensajes.style.padding = "15px";
    pMensajes.style.fontFamily = "Sixtyfour";
    pMensajes.innerHTML = "Bien hecho";
  } else {
    pMensajes.style.backgroundColor = "black";
    pMensajes.style.fontSize = "20px";
    pMensajes.style.padding = "15px";
    pMensajes.style.fontFamily = "Sixtyfour Convergence";
    pMensajes.innerHTML = "Intenta de nuevo, el cambio esta mal.";
  }
}

function cambiarBotones() {
  contador++;

  if (contador % 2 === 0) {
    divBilletes.style.display = "flex";
    divMonedas.style.display = "none"
    iconoCambiar.src = "/assets/monedaIcon.png"
  } else {
    divBilletes.style.display = "none";
    divMonedas.style.display = "flex"
    iconoCambiar.src = "/assets/billeteIcon.png"
  }
}

ptotalCuenta.innerHTML = `Total $${totalCuenta} <br> Recibes $${teDan}`;
// pteDan.innerHTML = `Recibes $${teDan}`;
