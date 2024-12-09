import { Stack } from "./Stack";

const pilha = new Stack<string>();

//adicionar elementos a pilha
pilha.push("prato azul");
pilha.push("prato verde");
pilha.push("prato vermelho");

//mostrar pilha - LIFO o ultimo que entra sai como primeiro
pilha.printStack();

//pesquisa se há prato branco na fila
console.log(pilha.contains("prato branco"));

//remover o ultimo inserido
pilha.pop();

//mostrar pilha - LIFO o ultimo que entra sai como primeiro
pilha.printStack();