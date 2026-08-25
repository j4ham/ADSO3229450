function fnGeo(){
    let datoVariable = document.getElementById("txtDato").value;    
    console.log("Dato: ", datoVariable);
    
    fnSalidaParrafo(datoVariable); 
    alert(datoVariable);

}


function fnSalidaParrafo(datoVariable){
    document.getElementById("pfoSalida").innerHTML = 
    "El dato ingresado fue: " + datoVariable; 
}

function mostrarAlerta(datoVariable) {
    alert(`El dato ingresado en la caja fue: ${datoVariable}`);
    mostrarAlerta(datoVariable);  
}

function fnCalcular(){
    let numero1 = document.querySelector("#txtNum1").value;
    let numero2 = document.querySelector(".txtNum2").value;
    
    numero1 = document.querySelector("#txtNum1").value;
    numero2 = document.querySelector(".txtNum2").value;

    resultadoSuma = parseInt(numero1) + parseInt(numero2);
    resultadoResta = parseInt(numero1) - parseInt(numero2);
    console.log("Suma de datos: ", numero1, "+", numero2, "es", resultadoSuma);
    console.log(`Resta de los datos con comilla inversa: ${numero1} + ${numero2} es ${resultadoSuma}`);

    fnSalidaContenedorDivSuma(resultadoSuma);
    fnSalidaContenedorDivResta(numero1, numero2, resultadoResta);
    fnSalidaContenedorDivMultiplica(numero1, numero2);
    fnSalidaContenedorDivDivision(numero1, numero2);
    
}

function fnSalidaContenedorDivSuma(resultadoSuma) {
    document.getElementById("divSalidaSuma").textContent = 
    "Resultado de la suma es: " + resultadoSuma;
}

function fnSalidaContenedorDivResta(numero1, numero2, resultadoResta) {
    document.querySelector(".divSalidaResta").textContent = 
    `Al restar: ${numero1} - ${numero2} = 
    ${resultadoResta}`;
}

function fnSalidaContenedorDivMultiplica(numero1, numero2) {    
    let resultadoMultiplica = parseInt(numero1) * parseInt(numero2);
    document.getElementsByClassName("divSalidaMultiplicacion")[0].textContent = 
    `Al Multiplicar : ${numero1} * ${numero2} =  ${resultadoMultiplica}`;
}

function fnSalidaContenedorDivDivision(numero1, numero2) {
    let resultadoDivision = parseInt(numero1) / parseInt(numero2);
    document.getElementsByClassName("divSalidaDivision")[0].textContent = 
    `Al dividir: ${numero1} / ${numero2} = ${resultadoDivision}`;
}