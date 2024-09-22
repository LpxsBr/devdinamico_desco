import Funcionario from "./Funcionario";

class Desenvolvedor extends Funcionario {

    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo)
        this.linguagem = linguagem
    }

    programar() {
        console.log(`Developing with ${this.linguagem}.`)
    }

}

export default Desenvolvedor;