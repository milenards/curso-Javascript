/*
DOM - Document Object Model 
-Árvore que é criada com os elementos HTML
-Através dessa árvore eu consigo navegar e selecionar/modificar elementos

document.gtElementeById("Id do elemento") ---> seleciona um elemento através do ID
- document.querySelector("")
    --("#id do elemento")
    --(".classe do elemento")
    --("tag")

*/

/* innerHTML considera uma teg HTML, exemplo: <em>Calculadora 4.0</em> no innerHMTL ele vai ler somente o CALCULADORA 4.0 
no inner.text ele le completo: <em>Calculadora 4.0</em>
*/

function multiplicar(){
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let resultado = n1 * n2 
    document.querySelector("#resultado").innerHTML = `<strong>${resultado}</strong>`
}


function dividir(){
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let resultado = n1 / n2 
    document.querySelector("#resultado").innerHTML = `<strong>${resultado}</strong>`
}


function somar(){
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let resultado = n1 + n2 
    document.querySelector("#resultado").innerHTML = `<strong>${resultado}</strong>`
}

function subtrair(){
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let resultado = n1 / n2 
    document.querySelector("#resultado").innerHTML = `<strong>${resultado}</strong>`
}