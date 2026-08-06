/* ============================
   FUNCIÓN: fnGeo()
   ============================ */
function fnGeo() {
    let datoVariable = "";
    datoVariable = document.getElementById("txtDato").value;
    console.log("Dato: ", datoVariable);
    
    fnSalidaParrafo(datoVariable);
    fnAlerta(datoVariable);
}

function fnSalidaParrafo(datoVariable) {
    document.getElementById("pfoSalida").innerHTML = "El dato ingresado fue: " + datoVariable;
}

function fnAlerta(datoVariable) {
    alert(`El dato ingresado en caja fue: ${datoVariable}`);
}


/* ============================
   FUNCIÓN PRINCIPAL: calcular()
   - Lee los valores.
   - Llama a las funciones secundarias para cada operación.
   ============================ */
function calcular() {
    // 1. Obtener los valores y convertirlos a números
    var num1 = parseInt(document.getElementById('numero1').value);
    var num2 = parseInt(document.getElementById('numero2').value);

    // 2. Llamar a las funciones de cada operación enviando los números
    fnSuma(num1, num2);
    fnResta(num1, num2);
    fnMultiplicacion(num1, num2);
    fnDivision(num1, num2);
    fnResiduo(num1, num2);
}

/* ============================
   FUNCIONES SECUNDARIAS
   Cada una recibe los números, opera y muestra su resultado
   ============================ */
function fnSuma(n1, n2) {
    var resultado = n1 + n2;
    document.getElementById('divSalidaSuma').innerHTML = 'Resultado de las suma es: ' + resultado;
}

function fnResta(n1, n2) {
    var resultado = n1 - n2;
    document.getElementsByClassName('divSalidaResta')[0].innerHTML = 'Resultado de la resta es: ' + resultado;
}

function fnMultiplicacion(n1, n2) {
    var resultado = n1 * n2;
    document.getElementsByClassName('divSalidaMultiplica')[0].innerHTML = 'Resultado de la multiplicación es: ' + resultado;
}

function fnDivision(n1, n2) {
    var resultado = n1 / n2;
    document.getElementsByClassName('divSalidadivicion')[0].innerHTML = 'Resultado de la división es: ' + resultado;
}

function fnResiduo(n1, n2) {
    var residu1 = (n1 / n2) * n2; // Mantengo tu lógica matemática, aunque el residuo normalmente es n1 % n2
    var residuo = n1 - residu1;
    
    // Verificamos si existe el div, si no, no da error
    var elemento = document.getElementsByClassName('divSalidadivicionre')[0];
    if (elemento) {
        elemento.innerHTML = 'Resultado de la división del residuo es: ' + residuo;
    }
}