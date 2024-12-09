import readlinesync = require('readline-sync');
import { Stack } from "../Stack"; // Certifique-se de que o caminho está correto

const pilha = new Stack<string>(); // Cria uma pilha de strings para armazenar os livros

let opcao: number; // Variável para armazenar a opção escolhida pelo usuário

do {
    console.log("\n**************** MENU ****************");
    console.log("**   1: Adicionar Livros na Pilha   **");
    console.log("**   2: Listar todos os Livros      **");
    console.log("**   3: Retirar Livros da Pilha     **");
    console.log("**   0: Sair                        **");
    console.log("**************************************");

    // Solicita a escolha do usuário
    opcao = readlinesync.questionInt("Digite sua opcao: ");

    switch (opcao) {
        case 1: // Adicionar livros na pilha
            const livro = readlinesync.question("Digite o nome do Livro: ");
            pilha.push(livro); // Adiciona o livro na pilha
            console.log("\nPilha: \n")
            pilha.printStack(); 
            console.log(`\nLivro adicionado!`);
            break;

        case 2: // Listar todos os livros na pilha
            if (pilha.isEmpty()) {
                console.log("A pilha está vazia. Nenhum livro para listar.\n");
            } else {
                console.log("\nLista de Livros na Pilha:\n");
                pilha.printStack(); 
            }
            break;

        case 3: 
            const livroRemovido = pilha.pop();
            if (livroRemovido) {
                console.log("\n")
                pilha.printStack(); 
                console.log(`\n\nUm Livro foi retirado da pilha!\n`);
            } else {
                console.log("A pilha está vazia!\n");
            }
            break;

        case 0: 
            console.log("Programa Finalizado!");
            break;

        default:
            console.log("Opção inválida. Tente novamente.\n");
    }
} while (opcao !== 0); 
