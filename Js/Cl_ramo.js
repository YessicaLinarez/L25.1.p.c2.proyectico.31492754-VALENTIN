export default class Cl_ramo{
    constructor(codigo, envase, costoN){
        this.codigo = codigo;
        this.envase = envase;
        this.costoN = costoN;
    }

    set codigo(codigo){
        this._codigo =+codigo;
    }   
    get codigo(){
        return this._codigo;
    }

    set envase(envase){
        this._envase =+envase;
    }   
    get envase(){
        return this._envase;    
    }

    set costoN(costoN){
        this._costoN =+costoN;
    }   
    get costoN(){
        return this._costoN;    
    }

}