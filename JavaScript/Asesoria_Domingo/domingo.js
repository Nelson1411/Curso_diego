// Calculadora con eventos, Selectores y funcion de flecha

// Ejemplo usando selectores
let sumando = document.getElementById("suma");
let salida = document.getElementById("salida");


// sumando.addEventListener("click", ()=>{
//     //Captura de datos
//     let numero1 = document.getElementById("numero1");
//     let numero2 = document.getElementById("numero2");

//     //Suma de valores y Carga del parrafo
//     salida.innerText = +numero1.value + +numero2.value;
// });


salida.classList.add("bg-red-900", "w-32","h-12","pl-8","pt-3","text-white");

let input1 = document.getElementById("numero1");
input1.classList.add("bg-yellow-900");

let input2 = document.getElementById("numero2");
input2.classList.add("bg-yellow-900");



sumando.addEventListener("mousedown",crearParrafo);
sumando.addEventListener("mouseup",eliminarParrafo);


function crearParrafo(){
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Hola me crearon en JavaScript";
    nuevoParrafo.setAttribute("id","nuevoParrafo")
    let caja = document.getElementById("caja");
    caja.classList.add("bg-pink-900");

    caja.appendChild(nuevoParrafo);
}


function eliminarParrafo(){
    let hijo = document.getElementById("nuevoParrafo")
    caja.remove(hijo);
}