/*function imprimirOlaMundo() {
    console.log("Olá, Mundo!")
} 
imprimirOlaMundo();*/

/*function calculaArea(altura, largura) {
    const area = altura * largura
    console.log(area);
}
calculaArea(2, 3);*/

/*function chamaNome(nome) {
    console.log(`Olá ${nome}`)
}
chamaNome("Erick")
chamaNome("Zé")
chamaNome("Will")
chamaNome("Borboleta")*/

/*function testeVariavel() {
    let numero = 5;
    console.log(numero);
}
testeVariavel()*/

/*function somaNumeros(numero1, numero2) {
    const soma = numero1 + numero2;
    return soma
}

let numerosSomados = somaNumeros(10, 10);
console.log(numerosSomados);*/

let varArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function lista(array) {
    let arrayRetorno = []
    arrayRetorno.push((array[array.length - 1])/2)
    arrayRetorno.push((array[0])/2)
    return arrayRetorno
}

console.log(lista(varArray));