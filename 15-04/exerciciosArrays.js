const ask = require('readline-sync')
// =========================================
/*


   █████████                                                   
  ███░░░░░███                                                  
 ░███    ░███  ████████  ████████   ██████   █████ ████  █████ 
 ░███████████ ░░███░░███░░███░░███ ░░░░░███ ░░███ ░███  ███░░  
 ░███░░░░░███  ░███ ░░░  ░███ ░░░   ███████  ░███ ░███ ░░█████ 
 ░███    ░███  ░███      ░███      ███░░███  ░███ ░███  ░░░░███
 █████   █████ █████     █████    ░░████████ ░░███████  ██████ 
░░░░░   ░░░░░ ░░░░░     ░░░░░      ░░░░░░░░   ░░░░░███ ░░░░░░  
                                              ███ ░███         
                                             ░░██████          
                                              ░░░░░░        
                                              
                                              
*/
// =========================================
// Instruções:
// - Leia cada enunciado com atenção
// - Implemente a solução logo abaixo de cada exercício
// - NÃO pule exercícios
// - Pesquise na internet métodos que você não conhece
// =========================================


// =========================================
// EXERCÍCIO 1
// Crie um array com pelo menos 6 filmes.
// Peça para o usuário digitar um número.
// Mostre o filme que está na posição informada.
// =========================================
/*
const listaDeFilmes = ['Star Wars', 'Panico', 'Senhor dos aneis', 'Carros', 'Meu Malvado Favorito', 'Guerra Mundial Z']
let choice = ask.question("Digite um numero de 1 a 6: ")
console.log(listaDeFilmes[choice - 1]);




// =========================================
// EXERCÍCIO 2
// Crie um array com 8 tipos de bebidas.
// Mostre quantos elementos existem nele.
// =========================================

const drinks = ['Coca Cola', 'Guarana', 'Sprite', 'Fanta', 'Sukita', 'Pepsi', 'Agua', 'Suco'];
console.log(`Existem ${drinks.length} elementos neste array`);




// =========================================
// EXERCÍCIO 3
// Crie um array com 5 Pokémons.
// Peça para o usuário digitar o nome de um Pokémon.
// Verifique se ele está no array.
// =========================================
const pokemons = ["Pikachu", "Charmander", "Squirtle", "Rayquaza", "Zoroark"];
name = ask.question("Digite o nome de um pokemon: ")
console.log(pokemons.includes(name));



// =========================================
// EXERCÍCIO 4
// Crie um array vazio.
// Peça ao usuário 3 nomes de jogos.
// Adicione ao array.
// Mostre o array final.
// =========================================
const vazio = []
let games = ask.question("Digite o nome de um jogo: ")
let games2 = ask.question("Digite o nome de outro jogo: ")
let games3 = ask.question("Digite o nome de mais um jogo: ")
vazio.push(games, games2, games3)
console.log(vazio);


// =========================================
// EXERCÍCIO 5
// Crie um array com 5 séries.
// Remova a última série.
// Mostre o array atualizado.
// =========================================
const series = ["Game Of Thrones", "The Walking Dead", "The Boys", "The Flash", "The Office"];
series.pop();
console.log(series);



// =========================================
// EXERCÍCIO 6
// Crie um array com 6 comidas.
// Remova 2 comidas a partir de uma posição específica.
// Mostre o array resultante.
// =========================================
const food = ["Strogonof", "Carreteiro", "Pizza", "Xis", "Massa Carbonara", "Lasanha"];
food.splice(3,2);
console.log(food)


// =========================================
// EXERCÍCIO 7
// Crie um array com nomes de bandas.
// Mostre todas as bandas no console,
// separadas por " - ".
// =========================================
const bandas = ["Sabaton", "Slipknot", "Skillet"]
console.log(bandas.join("-"));



// =========================================
// EXERCÍCIO 8
// Crie um array com preços de produtos.
// Mostre no console o primeiro e o último preço do array.
// =========================================
const precos = ["R$20,00", "R$19,90", "R$4,44", "R$6,66"];
console.log(precos[0]);
console.log(precos[precos.length - 1]);



// =========================================
// EXERCÍCIO 9
// Crie um array com nomes de personagens de jogos.
// Ordene os nomes em ordem alfabética.
// =========================================
const characters = ["Cloud", "Kratos", "Goku", "Dante", "Leon", "Chris", "Alucard", "Bayoneta"]
console.log(characters.sort())


// =========================================
// EXERCÍCIO 10
// Crie um array com nomes de filmes repetidos.
// Mostre o tamanho do array.
// =========================================
const movies = ["Senhor dos aneis", "Senhor dos aneis", "Corra que a policia vem ai", "Star Wars", "Star Wars", "Liga da Justica"]
console.log(movies.length);


// =========================================
// EXERCÍCIO 11
// Crie dois arrays:
// - um com filmes
// - outro com séries
// Junte os dois em um único array.
// =========================================
const movies = ["Star Wars", "Senhor dos aneis", "De volta ao Fututo"]
const series = ["Cobra Kai", "The Boys", "Supernatural"]
const tudo = [...movies, ...series];
console.log(tudo)



// =========================================
// EXERCÍCIO 12
// Crie um array com episódios de uma série.
// Inverta a ordem dos episódios.
// =========================================
const eps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(eps.reverse());



// =========================================
// DESAFIO EXTRA (NÃO OBRIGATÓRIO)
// Crie um sistema simples de catálogo de filmes:
// - Use pelo menos 3 métodos diferentes (map, filter, reduce, find, etc.)
// - Exemplo de ideias:
//   * Filtrar filmes por gênero
//   * Encontrar um filme específico
//   * Calcular média de notas dos filmes
// =========================================
const movies = ["Star Wars", "Tropa de Elite", "O Livro de Eli", "Carros", "Senhor dos Aneis", "O Hobbit", "Lego Batman - O Filme"]
let movie = ask.question("Qual filme você deseja encontrar? ");
let resultado = movies.find(filme => filme.toLowerCase() === movie.toLowerCase)
if (resultado === undefined) {
console.log("Filme não encontrado");
} else {
   console.log(`O filme ${movie} está na nossa biblioteca` )
}*/