import readlinesync = require('readline-sync')
import { Queue } from '../Queue';

// Criação de uma fila para armazenar clientes do tipo string
const fila = new Queue<string>();

let opcao: number; // Variável para armazenar a opção escolhida pelo usuário

do {
    // Exibe o menu
    console.log("\n**************** MENU ****************");
    console.log("**   1: Adicionar Cliente na fila   **");
    console.log("**   2: Listar todos os Clientes    **");
    console.log("**   3: Retirar Cliente da fila     **");
    console.log("**   0: Sair                        **");
    console.log("**************************************");

    // Solicita a escolha do usuário
    opcao = readlinesync.questionInt("Digite sua opcao: ");

    switch (opcao) {
        case 1: // Adicionar cliente na fila
            const cliente = readlinesync.question("Digite o nome do Cliente: ");
            console.log("\nFila: \n")
            fila.enqueue(cliente); // Adiciona o cliente na fila
            fila.printQueue();
            console.log(`\nCliente adicionado!`);
            break;

        case 2: // Listar todos os clientes na fila
            if (fila.isEmpty()) { // Verifica se a fila está vazia
                console.log("A fila está vazia.");
            } else {
                console.log("\nLista de Clientes na Fila: \n");
                fila.printQueue(); // Exibe todos os clientes da fila
            }
            break;

        case 3: // Retirar (chamar) o próximo cliente
            const chamado = fila.dequeue(); // Remove o primeiro cliente
            if (chamado) {
                fila.printQueue();
                console.log(`\n${chamado} foi chamado.\n`);
            } 
            break;

        case 0: // Sair do programa
            console.log("\nPrograma Finalizado!");
            break;

        default: // Opção inválida
            console.log("Opcao invalida. Tente novamente.");
    }
} while (opcao !== 0); // O programa continua até que o usuário escolha a opção 0
