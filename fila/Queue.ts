// Interface que define os métodos necessários para a estrutura de fila (Queue)
interface queueInterface<Type> {
    enqueue(dataItem: Type): void;// Método para adicionar um elemento na fila
    dequeue(): Type | undefined;// Método para remover e retornar o primeiro elemento da fila
    isEmpty(): boolean;// Verifica se a fila está vazia
    count(): number;// Retorna o número de elementos na fila
    printQueue(): void;// Exibe todos os elementos da fila
    peek(): Type | undefined;// Retorna o primeiro elemento da fila sem removê-lo
    contains(dataItem: Type): boolean;// Verifica se um elemento está na fila
    clear(): void;// Remove todos os elementos da fila
 }
 
 // Classe que implementa a interface queueInterface
 export class Queue<Type> implements queueInterface<Type> {

    // Array privado que armazenará os dados da fila
    private QueueData: Array<Type> = [];
 
    // Construtor vazio (não é necessário inicializar nada específico)
    constructor() { }
 
    isEmpty(): boolean {
       let result = this.QueueData.length <= 0; // Retorna true se o array estiver vazio
       return result;
    }
 
     // Método para adicionar um elemento no final da fila
    enqueue(dataItem: Type): void {
       this.QueueData.push(dataItem);// Adiciona o item ao final do array
    }
 
    // Método para remover e retornar o primeiro elemento da fila
    dequeue(): Type | undefined {
       if (this.isEmpty()) { // Verifica se a fila está vazia
          console.log("A fila está vazia");// Exibe uma mensagem de erro
          return;// Retorna undefined
       } else {
          var element = this.QueueData.shift();// Remove e retorna o primeiro elemento
          return element;
       }
    }
 
    // Método que retorna o número de elementos na fila
    count(): number {
       let len = this.QueueData.length;// Obtém o comprimento do array
       return len;
    }
 
    // Método para exibir todos os elementos da fila
    printQueue(): void {
       for (let i = 0; i < this.QueueData.length; i++) {// Itera sobre o array
          console.log(this.QueueData[i]);// Exibe cada elemento
       }
    }
 
    // Método para retornar o primeiro elemento sem removê-lo
    peek(): Type | undefined {
       if (this.isEmpty()) { // Verifica se a fila está vazia
          console.log("A fila está vazia"); // Exibe uma mensagem de erro
          return; //Retorna undefined
       } else {
          var element = this.QueueData[0];// Retorna o primeiro elemento
          return element;
       }
    }
 
    // Método que verifica se a fila contém um elemento específico
    contains(dataItem: Type): boolean {
       if (this.QueueData.includes(dataItem)) { // Verifica se o elemento está no array
          return true; // Retorna true se encontrar
       } else {
          return false; // Retorna false caso contrário
       }
    }
 
    // Método que remove todos os elementos da fila
    clear(): void {
       this.QueueData.length = 0; // Define o tamanho do array como 0 (limpa a fila)
    }
 
 }