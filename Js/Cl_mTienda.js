import Cl_mRamoFlor from "./Cl_mRamoFlor.js";
import Cl_mRamoFruta from "./Cl_mRamoFruta.js";
export default class Cl_mTienda {
    constructor() {
        this.acumPT = 0.0;
        this.contFN=0;
        this.contRamoNE=0;
        this.acumPTF=0.0;
        this.acumFT=0.0;
    }
    procesarRamo(ramo) {
        this.acumPT += ramo.precioT();

        if(ramo instanceof Cl_mRamoFlor){
            this.acumPTF += ramo.precioT();
            
            if ( ramo.tipoF == "N") {
                this.contFN++;
                if (ramo.envase == 2) {
                    this.contRamoNE++;
                }

            }

        }
        if(ramo instanceof Cl_mRamoFruta){
            this.acumFT += ramo.precioT();
        }
   }
    totalV(){
        return this.acumPT;
    }

    porc(){
        if(this.contFN>0){
        return (this.contRamoNE/this.contFN)*100;}
        else{
            return 0;
        }
    }
    totalFlores(){
        return this.acumPTF;
    }
    totalFrutas(){
        return this.acumFT ;
    }
}