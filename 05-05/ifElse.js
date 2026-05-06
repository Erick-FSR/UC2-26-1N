const ask = require('readline-sync');


/*function comapare(num1, num2) {
    if (num1 === num2) {
        console.log(`Tu é foda lek, numeros enguais`)
        
    } else {
        console.log(`Muito otario, numeros diferentes`)
    }
}

let num1 = Number(ask.question("Digite um numero: "))
let num2 = Number(ask.question("Digite mais um numero: "))

comapare(num1, num2)*/

/*function comparando(num3, num4) {
    if (num3 === num4) {
        console.log(`Os numeros sao iguais`)
    } else {
        console.log(`Os numeros sao diferentes`)
    }
}

let num3 = Number(ask.question("Digite um numero: "));
let num4 = Number(ask.question("Digite mais um numero: "));

comparando(num3, num4);*/

function compare(num5, num6) {
    if (num5 > num6) {
        return `${num5} é maior que ${num6}`
    } else if (num5 < num6) {
        return `${num5} é menor que ${num6}`
    } else {
        return `${num5} e ${num6} são iguais`
    }
}

let num5 = Number(ask.question("Digite um numero: "))
let num6 = Number(ask.question("Digite outro numero: "))
console.log(compare(num5, num6));