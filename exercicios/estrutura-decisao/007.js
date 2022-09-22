//Faça um Programa que leia três números e mostre o maior e o menor deles.
let num1=5, num2=9, num3=9


if(num1 < num2 && num1 < num3){
    console.log("Primeiro número é menor que todos")
}
else if(num2 < num1 && num2 < num3){
    console.log("Segundo número é menor que todos")
}
else if(num3 < num1 && num3 <num2){
    console.log("Terceiro número é menor que todos")
}
else if (num1 == num2 || num1 ==num3){
    console.log("numeros iguais")
}
else if (num2 == num1 || num2 ==num3){
    console.log("numeros iguais")
}
else if (num3 == num2 || num3 ==num1){
    console.log("numeros iguais")
}