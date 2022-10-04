// Faça um Programa que peça dois números e imprima o maior deles.
function NumeroMaior() {
    let n1, n2
    n1 = parseFloat (document.querySelector("#n1").value)
    n2 = parseFloat (document.querySelector("#n2").value)

    if (n1 > n2) {
        document.querySelector("#resultado").innerHTML = "Primeiro numero é o maior"
    }
    else if (n2 > n1) {
        document.querySelector("#resultado").innerHTML = "Segundo numero é o maior"
    }

}


// if (n1 > n2){
//     console.log("Esse é o maior número!")
//     }
//     else if(n2 > n1){
//      console.log("Esse número é o maior em!")
//     }
