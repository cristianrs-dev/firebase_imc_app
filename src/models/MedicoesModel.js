import { People } from "/PeopleModel"

class Historico extends People{

    constructor(idHistorico,idPeople,nome,peso,altura,data){
        super(idPeople,nome,peso,altura)
        this.idHistorico = idHistorico
        this.data = data
    }
    
}

export {Historico}