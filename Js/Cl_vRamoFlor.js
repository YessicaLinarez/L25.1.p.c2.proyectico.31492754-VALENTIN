export default class Cl_vRamoFlor{
    constructor(){
        this.inCodigo = document.getElementById("ramoFlorForm_inCodigo");
        this.inEnvase = document.getElementById("ramoFlorForm_inEnvase");
        this.inCostoN = document.getElementById("ramoFlorForm_inCostoN");
        this.inTipoF = document.getElementById("ramoFlorForm_inTipoF");
        this.btProcesar = document.getElementById("ramoFlorForm_btProcesarRamoFlor");
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

    get tipoF(){
        return this.inTipoF.value;
    }
}