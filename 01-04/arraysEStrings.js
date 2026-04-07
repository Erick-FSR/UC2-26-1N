const ask = require('readline-sync');

/*let nome = ask.question("Qual eh o seu nome? ");

if (nome != "Erick"){
    nome = "Tchola"
} else{
    nome = "O mais foda"
}
console.log("Olá", nome);

let nome = ask.question("Qual eh o seu nome? ");
let color = ask.question("Qual é a sua cor favorita? ");
console.log("Meu nome eh", nome, "E minha cor favorita é", color);
console.log("Meu nome eh " + nome + " E minha cor favorita é " + color);
console.log(`Meu nome eh ${nome} e minha cor favorita é ${color}`)*/

/*let nome = "Erick Fernando"
console.log(nome.includes("Erick"));
console.log(nome.includes("Rodrigues"))
// OU
let fraseFiltrada = nome.includes("Erick");
console.log(`Meu primeiro nome eh Erick? ${fraseFiltrada}`);*/

let frase = "Hoje comi cenoura, adoro cenoura";
console.log(frase.replaceAll("cenoura", "batata"));