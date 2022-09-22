//Faça um Programa que leia três números e mostre o maior deles.
let num1= 1, num2 = 10, num3 = 10
let numeros

if(num1 > num2 && num1 > num3){
    console.log("Primeiro número é maior que todos")
}
else if (num2 > num1 && num2 > num3){
    console.log("Segundo número é maior que todos")
}
else if (num3 > num1 && num3 > num2){
    console.log("Terceirto número é maior que todos")
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