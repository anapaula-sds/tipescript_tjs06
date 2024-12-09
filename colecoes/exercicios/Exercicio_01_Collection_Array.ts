import readlinesync = require('readline-sync')

const cores: Array<string> = new Array<string>;

for (let i = 0; i < 5; i++) {
    const cor = readlinesync.question(`Digite a cor ${i + 1}: `);
    cores.push(cor); 
  }

console.table(cores);

let setOrdenado: Array<string> = Array.from(cores).sort();

console.table(setOrdenado);