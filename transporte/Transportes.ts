export class Transporte{

    //atributo
    private _capacidade:number;

    //construtor
	constructor(capacidade: number) {
		this._capacidade = capacidade;
	}
    
    //metodos
	public get capacidade(): number {
		return this._capacidade;
	}

	public set capacidade(value: number) {
		this._capacidade = value;
	}

    public visualizar(){
        console.log("******************************************************")
        console.log("Dados do Transporte")
        console.log("******************************************************")
        console.log(`Capacidade do Meio de Transporte: ${this._capacidade}`)
    }
}