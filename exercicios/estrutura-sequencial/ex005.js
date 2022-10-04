//Faça um Programa que converta metros para centímetros.
function calcularCentimetros() {
    let metros, centimetros
    

    metros = document.querySelector("#metros").value


    centimetros = 100 * metros
    
    document.querySelector("#resultado").innerHTML = centimetros

}

//console.log(centimetros)