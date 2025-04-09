export default class Cl_vRamoFruta{
    constructor(){
        this.inCodigo = document.getElementById("ramoFrutaForm_inCodigo");
        this.inEnvase = document.getElementById("ramoFrutaForm_inEnvase");
        this.inCostoN = document.getElementById("ramoFrutaForm_inCostoN");
        this.inExtra = document.getElementById("ramoFrutaForm_inExtra");
        this.btProcesar = document.getElementById("ramoFrutaForm_btProcesarRamoFruta");
    }

    get codigo(){
        return +this.inCodigo.value;
    }

    get envase(){
        return +this.inEnvase.value;
    }

    get costoN(){
        return +this.inCostoN.value;
    }
    
    get extra(){
        return this.inExtra.value;
    }
}