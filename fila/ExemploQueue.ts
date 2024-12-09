import readlinesync = require('readline-sync')
import { Queue } from './Queue';

//criando a fila com o tipo de dado String
const fila = new Queue<string>();

//adicionando elementos na fila
fila.enqueue("Beatriz");
fila.enqueue("Gustavo");
fila.enqueue("Alana");

//fila.enqueue(readlinesync.question("Digite o seu nome: "))

//mostrar todos da fila
fila.printQueue();

//pesquisar se existe Alana na fila
console.log(fila.contains("Alana"))

//verificar tamanho da fila
console.log(fila.count())

//chamar primeiro elemento da fila
console.log("\nChamar:  ", fila.dequeue())
//fila.dequeue()

//mostrar a fila após retirar o primeiro elemento
fila.printQueue()

//chamar o proximo
console.log(fila.peek()) 