/*
Quando clicar no pokemon da listagem temos que esconder o cartão do list
pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na list
listagem

Para isso vamos precisar trabalhar com dois elementos:
- listagem
- cartão pokemon

Precisamos criar duas variaveis no JS pra trabalhar com os elementos na tela

Vamos precisar trabalhar com um evento de click feito pelo usuario na listagem 
pokemon

- remover a classe aberto só do cartão que esta aberto
- ao clicar no pokemon da listagem pegamos o id desse pokemon pra saber qual 
cartão mostrar
- remover a classe ativo que marca o pokemon selecionado
- adicionar a classe ativo no item da lista selecionado
*/

// precisamos criar duas variaveis no JS pra trabalhar com os elementos na tela
const listaSelecaoPokemons = document.querySelectorAll(".pokemon");

listaSelecaoPokemons.forEach((pokemon) => {
  // Vamos precisar trabalhar com um evento de click feito pelo usuario na listagem pokemon

  pokemon.addEventListener("click", () => {
    // remover a classe aberto só do cartão que esta aberto
    const cartaoPokemonAberto = document.querySelector(".aberto");
    cartaoPokemonAberto.classList.remove("aberto");

    // ao clicar no pokemon da listagem pegamos o id desse pokemon pra saber qual cartão mostrar
    const idPokemonSelecionado = pokemon.attributes.id.value;

    const idDoCartaoPokemonParaAbrir = "cartao-" + idPokemonSelecionado;
    const cartaoPokemonParaAbrir = document.getElementById(
      idDoCartaoPokemonParaAbrir
    );
    cartaoPokemonParaAbrir.classList.add("aberto");

    // remover a classe ativo que marca o pokemon selecionado
    const pokemonAtivoNaListagem = document.querySelector(".ativo");
    pokemonAtivoNaListagem.classList.remove("ativo");

    // adicionar a classe ativo no item da lista selecionado
    const pokemonSelecionadoNaListagem =
      document.getElementById(idPokemonSelecionado);
    pokemonSelecionadoNaListagem.classList.add("ativo");
  });
});
