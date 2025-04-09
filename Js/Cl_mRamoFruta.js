import Cl_ramo from "./Cl_ramo.js";
export default class Cl_mRamoFruta extends Cl_ramo{
    constructor({codigo, envase, costoN,extra}) {
        super(codigo, envase, costoN);
        this.extra = extra;
    }
    descuento(){
        if(this.extra=="si"){
            return this.costoN *15/100;}
        else{
            return 0; }
    }

    precioT(){
        return this.costoN - this.descuento();
    }
}