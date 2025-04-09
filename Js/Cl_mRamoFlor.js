import Cl_ramo from "./Cl_ramo.js";
export default class Cl_mRamoFlor extends Cl_ramo {
    constructor({codigo, envase, costoN,tipoF}) {
        super(codigo, envase, costoN);
        this.tipoF = tipoF;
    }
    descuento(){
        if(this.tipoF == "A"){
            return this.costoN*10/100;
        } else {
            return 0;
        }
    }
    incremento(){
        if(this.tipoF=="N"){
            return this.costoN*8/100;
        } else {
            return 0;
        }
    }
    precioT(){
        return this.costoN - this.descuento() + this.incremento();
    }
}