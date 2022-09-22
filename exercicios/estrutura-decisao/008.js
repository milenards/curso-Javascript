//Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.

let prod1= 50, prod2= 8, prod3= 7

if(prod1< prod2 && prod1< prod3){
    console.log("Produto 1 é mais barato")
}
else if(prod2 < prod1 && prod2 < prod3){
    console.log("Produto 2 é mais barato")
}
else if(prod3 < prod1 && prod3 < prod2){
    console.log("Produto 3 é o mais barato")
}