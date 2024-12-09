// Define a interface para a pilha (Stack), com métodos obrigatórios para sua implementação
interface stackInterface<Type> {
    push(dataItem: Type): void;// Adiciona um elemento ao topo da pilha
    pop(): Type | undefined;// Remove e retorna o elemento do topo da pilha
    isEmpty(): boolean;// Verifica se a pilha está vazia
    count(): number;// Retorna o número de elementos na pilha
    printStack(): void;// Exibe todos os elementos da pilha
    peek(): Type | undefined; // Retorna o elemento no topo da pilha sem removê-lo
    contains(dataItem: Type): boolean;// Verifica se um elemento está presente na pilha
    clear(): void;// Remove todos os elementos da pilha
 }
 
 // Implementa a classe Stack que segue a interface stackInterface
 export class Stack<Type> implements stackInterface<Type> {
 
    // Array privado para armazenar os elementos da pilha
    private StackData: Array<Type> = [];
 
    // Construtor vazio (não há inicialização necessária para esta classe)
    constructor() { }
 
    // Método que verifica se a pilha está vazia
    isEmpty(): boolean {
       let result = this.StackData.length <= 0;
       return result;
    }
 
    // Adiciona um elemento ao topo da pilha
    push(dataItem: Type): void {
       this.StackData.push(dataItem);
    }
 
    // Remove e retorna o elemento do topo da pilha
    pop(): Type | undefined {
       if (this.isEmpty()) {// Verifica se a pilha está vazia
          console.log("A fila está vazia");// Exibe uma mensagem se estiver vazia
          return;// Retorna undefined
       } else {
          var element = this.StackData.pop();// Remove o último elemento do array
          return element;// Retorna o elemento removido
       }
    }
 
    // Retorna o número de elementos na pilha
    count(): number {
       let len = this.StackData.length;// Calcula o comprimento do array
       return len;// Retorna o número de elementos
    }
 
    printStack(): void {// Exibe todos os elementos da pilha em ordem do topo para a base
       for (let i = this.StackData.length - 1; i >= 0 ; i--) {// Percorre o array de trás para frente
          console.log(this.StackData[i]);// Exibe cada elemento
       }
    }
 
    // Retorna o elemento no topo da pilha sem removê-lo
    peek(): Type | undefined {
       if (this.isEmpty()) {// Verifica se a pilha está vazia
          console.log("A fila está vazia");// Exibe uma mensagem se estiver vazia
          return;// Retorna undefined
       } else {
          var element = this.StackData[this.StackData.length - 1];// Pega o último elemento do array
          return element;// Retorna o elemento do topo
       }
    }
 
    // Verifica se a pilha contém um elemento específico
    contains(dataItem: Type): boolean {
       if (this.StackData.includes(dataItem)) {// Usa includes para verificar a presença do elemento
          return true;// Retorna true se o elemento for encontrado
       } else {
          return false;// Retorna false caso contrário
       }
    }
 
    // Remove todos os elementos da pilha
    clear(): void {
       this.StackData.length = 0;// Define o comprimento do array como 0, esvaziando-o
    }
 
 }