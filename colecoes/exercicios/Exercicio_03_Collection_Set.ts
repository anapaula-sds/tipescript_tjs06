import readlinesync = require('readline-sync')

const numeros: Set<number> = new Set<number>();

for (let i = 0; i < 10; i++) {
    const valor = readlinesync.questionInt(`Digite um valor inteiro (${i + 1}/10): `);
    numeros.add(valor);
}
console.table(numeros);

let setOrdenado: Array<number> = Array.from(numeros).sort((a, b) => a - b);

console.table(setOrdenado);