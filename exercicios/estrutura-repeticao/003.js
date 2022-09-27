// //Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Sexo: 'f' ou 'm';
// Estado Civil: 's', 'c', 'v', 'd';


// let nome = prompt("Informe seu nome")
// // Nome: maior que 3 caracteres;
// while (nome.length <= 3){
//     nome = prompt ("Informe seu nome")
// }


// let idade = prompt("Informe sua idade")
// // Idade: entre 0 e 150;
// while (idade < 0 || idade > 150){
//     idade = prompt("Informe sua idade")
// }


// let salario = prompt("Informe seu salario")
// // Salário: maior que zero;
// while(salario <=0){
//     salario = prompt("Informe seu salario")
// }


// let sexo = prompt("Informe o sexo (F ou M)")
// // Sexo: 'f' ou 'm';
// while(sexo != 'f' && sexo != 'm'){
//     sexo = prompt("Informe o sexo (f ou m)")
// }


// let estadoCivil = prompt ("Informe o estado civil (S - solteiro, C - casado, V - viúvo, D - divorciado)")
// // Estado Civil: 's', 'c', 'v', 'd';
// while(estadoCivil != 's' && estadoCivil != 'c' && estadoCivil != 'v' && estadoCivil != 'd'){
//     estadoCivil = prompt ("Informe o estado civil (S - solteiro, C - casado, V - viúvo, D - divorciado)")
// }
function CadastrarCliente(){
    let nome = document.querySelector("#nome").value
    if(nome.length < 3 ){
        document.querySelector("#erro-nome").innerHTML = "<em>O nome deve possuir mais de 3 caracteres</em>"
        document.querySelector("#nome").focus()
        return
    }else{
        document.querySelector("#erro-nome").innerHTML = ""
    }

    // if(idade.length < 0 || idade > 150 )
    // document.querySelector("#erro-idade").innerHTML = "<em>Idade deve ser entre 0 e 150 </em>"
    // document.querySelector("#idade").focus()
    // return
    alert ("Cadastros efetuado com sucesso")
}