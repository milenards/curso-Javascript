

/*Objetivo final: Criar uma lista de pokemons
-Consultar em uma API
-pegar um pokemon
-montar um cartao de pokemon
-colocar na tela o cartao
*/
function fnPegarPokemons(){
    $.ajax({
        type: "GET",
        url: "https://pokeapi.co/api/v2/pokemon?limit=151",
        //data: "data",
        dataType: "json",
        success: function (dados) {
            $(".lista-pokemon").html("")
            let dadosPokemons = dados.results
            for (let i = 0; i < dadosPokemons.length; i++) {
                fnPegarUmPokemon(dadosPokemons[i].url)
            }
            
        },
        beforeSend: function(){
            $(".lista-pokemon").html("Aguarde, carregando os dados")
        }
    });
}

function fnPegarUmPokemon (url){
    // $(".lista-pokemon").append(`<li>${url}</li>`)
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function (dados) {
            let Pokemon = {
                "nome" : dados.name,
                "id" : dados.id,
                "foto" : dados.sprites.front_default,
                "tipo" : dados.types[0].type.name,
                "info" : "novo"
            }
            fnMontarCartao(Pokemon)
            
        }
    });
    //fnMontarCartao("pikachu", "pikacu.png", "eletrico", 1)
}


function fnMontarCartao(Pokemon){
    // let nome='pikachu', foto='pikachu.png', tipo='eletrico', numero=1 (usaria para testar se funciona)
    
    let cartao

    cartao = "<li>"
    cartao += `<h3>${Pokemon.nome}</h3>`
    cartao += `<p><img src="${Pokemon.foto}"></p>`
    cartao += `<p>${Pokemon.tipo}</p>`
    cartao += `<h4>${Pokemon.id}</h4>`
    cartao += `</li>`
    $('.lista-pokemon').append(cartao) //append insere algumas coisas.
}

fnPegarPokemons()