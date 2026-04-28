const ask = require(`readline-sync`);


/*function criarusuario(nome, idade, cidade, hobbies) {
    return [nome, idade, cidade, hobbies]
}

nome = ask.question("Digite o seu nome: ");
idade = Number(ask.question("Digite a sua idade: "))
cidade = ask.question("Digite o nome de sua cidade: ")
hobby1 = ask.question("Digite um hobby: ")
hobby2 = ask.question("Digite mais um hobby: ")
const hobbies = []
hobbies.push(hobby1);
hobbies.push(hobby2);

console.log(criarusuario(nome, idade, cidade, hobbies));*/

function formatarHobbies(hobbies) {
    let hobbiesString = hobbies.join(", ")
    return hobbiesString;
}

hobby1 = ask.question("Digite um hobby: ")
hobby2 = ask.question("Digite mais um hobby: ")
hobby3 = ask.question("Digite mais um hobby: ")

let hobbies = []
hobbies.push(hobby1);
hobbies.push(hobby2);
hobbies.push(hobby3)

console.log(formatarHobbies(hobbies));
