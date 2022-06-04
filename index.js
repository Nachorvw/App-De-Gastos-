const Nombre = [];
const Pagos = [];
const Lista = document.getElementById("Grupo_Lista");
const usuario = document.getElementById("Nombre");
const gasto = document.getElementById("Gasto");

function enviar() {
  Agregar_Gastos_Array();
  Imprimir_Gastos();
  Pago_Total_y_Singular();
}
function Agregar_Gastos_Array() {
  Nombre.push(usuario.value);
  Pagos.push(gasto.value);
}
function Imprimir_Gastos() {
  const li = document.createElement("li");
  const text = document.createTextNode(
    `${usuario.value}: pago $ ${gasto.value}`
  );
  li.classList.add("list-group-item");
  li.appendChild(text);
  Lista.appendChild(li);
}

function Sumar_Valores() {
  let suma = 0;
  for (let pago of Pagos) {
    suma += Number(pago);
  }
  return suma;
}

function Pago_Total_y_Singular() {
  const Suma_Pagos = Sumar_Valores(Pagos);
  const Pago_Individual = Suma_Pagos / Nombre.length;
  Total_Pagos.innerText = `En total a pagar: ${Suma_Pagos} pago individual de: ${Pago_Individual.toFixed(
    2
  )} `;
}
