import Funcionario from "./Funcionario";

class Gerente extends Funcionario{

    constructor(nome, idade, departamento, cargo = 'gerente'){
        super(nome, idade, cargo)
        this.departamento = departamento
    }

    gerenciar(){
        console.log(`The mananger is mananging ${this.departamento} sector.`);
    }

}

export default Gerente;