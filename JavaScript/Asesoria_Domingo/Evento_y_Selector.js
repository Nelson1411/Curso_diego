// Aqui estoy creando una seleccion usando un selector por id
let miCaja = document.getElementById("caja");


// Aqui estoy creando un parrafo con createElement
let miParrafo = document.createElement("p");


// Aqui estoy llenando el parrafo que cree en la variable miParrafo usando innerText
miParrafo.innerText = "Mensaje enviado con Exito 😁";


// Aqui estoy intruduciento en el div con el id caja el parrafo guardado en la variable miParrafo el cual
// acabo de crear y llenar
// miCaja.appendChild(miParrafo);


// Aqui estoy creando un evento que se incia cuando precione el click
// Para hacer esto voy a usar addEventListener
// Tuve que comentar la linea 15 para evitar que el parrafo se mostrata cuando la pagina se cargara
// Por que lo que quiero es que se muestre cuando precione click.

let boton = document.getElementById("mostrar")
let boton2 = document.getElementById("ocultar")


boton.addEventListener("click", ()=> miCaja.appendChild(miParrafo))
boton2.addEventListener("click", ()=> miCaja.removeChild(miParrafo))















//tengo que crear dos botones uno para crear un titulo h1 y otro para que elimine el titulo
//el titulo debe decir: "este es mi primer titulo creado con eventos y selectores en Js 😁😂"

let contenedor = document.getElementById("contenedor");

let miTexto = document.createElement("h1");

miTexto.innerText = "este es mi primer titulo creado con eventos y selectores en Js 😁😂";

let botonMostrar = document.getElementById("mostrarTitulo");
let botonOcultar = document.getElementById("ocultarTitulo");

botonMostrar.addEventListener("click", funcionParaMostrar);
botonOcultar.addEventListener("click", funcionParaOcultar);

function funcionParaMostrar(){
    contenedor.appendChild(miTexto);
}

function funcionParaOcultar(){
    contenedor.removeChild(miTexto);
}