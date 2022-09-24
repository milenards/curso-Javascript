//Faça um Programa que leia três números e mostre-os em ordem decrescente.

let num1 = 70, num2 = 60, num3 = 5000
let maior, medio, menor
if(num1 > num2 && num1 > num3){
    maior = num1
    if (num2 > num3);
    medio = num2
    menor = num3
    
        //  else if(num3 > num2)
        // medio = num3
        // menor = num2
        
    
console.log("A ordem decrescente é: ",maior,medio,menor)
}
else if( num2 > num1 && num2 > num3){
    maior = num2
    if(num3 > num1)
    medio = num3
    menor = num1
    if(num1 > num3)
    medio = num2
    menor = num3
     console.log("A ordem decrescente é: ",maior,medio,menor )
}
else if(num3 > num2 && num3 > num1){
    maior = num3
    if(num1 > num2)
    medio = num1
    menor = num2
    if(num2 > num1)
    medio = num2
    menor = num1
     console.log("A ordem decrescente é: ",maior,medio,menor )
}

