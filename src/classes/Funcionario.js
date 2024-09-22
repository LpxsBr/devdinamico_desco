class Funcionario {
    
    constructor(nome, idade, cargo) {
        this.nome   = nome;
        this.idade  = idade;
        this.cargo  = cargo;
    }

    seApresentar() {
        console.log(`I'm ${this.nome}. I'm ${this.idade} years old and am ${this.cargo} nice to meet you.`)
    }

    trabalhar() {
        console.log(`${this.nome} is working like a ${this.cargo}.`)
    }
}

export default Funcionario;