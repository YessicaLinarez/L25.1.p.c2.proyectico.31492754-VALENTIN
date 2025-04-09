import Cl_mRamoFlor from "./Cl_mRamoFlor.js";
import Cl_vRamoFlor from "./Cl_vRamoFlor.js";

import Cl_mRamoFruta from "./Cl_mRamoFruta.js";
import Cl_vRamoFruta from "./Cl_vRamoFruta.js";

export default class Cl_vTienda {
    constructor() {
        this.controlador = null;

        this.vRamoFlor = new Cl_vRamoFlor();
        this.vRamoFruta = new Cl_vRamoFruta();

        this.salida = document.getElementById("salida");
        this.tablaRamoFlor = document.getElementById("tablaRamoFlor");
        this.tablaRamoFruta = document.getElementById("tablaRamoFruta");

        this.vRamoFlor.btProcesar.onclick = () => {
            this.controlador.procesarRamoFlor();
        }

        this.vRamoFruta.btProcesar.onclick = () => {
            this.controlador.procesarRamoFruta();
        }
    }

    iniciarRamoFlor() {
        this.mRamoFlor = new Cl_mRamoFlor({
            codigo: this.vRamoFlor.codigo,
            envase: this.vRamoFlor.envase,
            costoN: this.vRamoFlor.costoN,
            tipoF: this.vRamoFlor.tipoF,
        });
        return this.mRamoFlor
    }

    iniciarRamoFruta() {
        this.mRamoFruta = new Cl_mRamoFruta({
            codigo: this.vRamoFruta.codigo,
            envase: this.vRamoFruta.envase,
            costoN: this.vRamoFruta.costoN,
            extra: this.vRamoFruta.extra,
        });
        return this.mRamoFruta
    }

    reporte1(totalV, porc,totalFlores) {
        this.tablaRamoFlor.innerHTML += `
        <tr>
        <td>${this.mRamoFlor.codigo}</td>
        <td>${this.mRamoFlor.envase}</td>
        <td>${this.mRamoFlor.costoN}$</td>
        <td>${this.mRamoFlor.tipoF}</td>
        <td>${this.mRamoFlor.descuento()}</td>
        <td>${this.mRamoFlor.incremento()}</td>
        <td>${this.mRamoFlor.precioT()}$</td>

        </tr>
        `;

        this.salida.innerHTML = `
        <br>Total vendido: ${totalV}$
        <br> porcentaje de ramos de flores naturales con envase mediano vendidos ${porc.toFixed(2)}% 
        <br>Total de flor:${totalFlores}$`
    }

    reporte2(totalV, porc,totalFruta) {
        this.tablaRamoFruta.innerHTML += `
        <tr>
        <td>${this.mRamoFruta.codigo}</td>
        <td>${this.mRamoFruta.envase}</td>
        <td>${this.mRamoFruta.costoN}$</td>
        <td>${this.mRamoFruta.extra}</td>
        <td>${this.mRamoFruta.descuento()}</td>
        <td>${this.mRamoFruta.precioT()}$</td>
        </tr>
        `;

        this.salida.innerHTML = `
        <br>Total vendido ${totalV}$
        <br> porcentaje de ramos de flores naturales con envase mediano vendidos ${porc.toFixed(2)}% 
        <br> Total de fruta:${totalFruta}$`
        
    }
}