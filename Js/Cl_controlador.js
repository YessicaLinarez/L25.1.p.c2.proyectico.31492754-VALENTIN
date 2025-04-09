export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarRamoFlor() {
        this.modelo.procesarRamo(this.vista.iniciarRamoFlor());

        this.vista.reporte1(
            this.modelo.totalV(),
            this.modelo.porc(),
            this.modelo.totalFlores()
        )
    }

    procesarRamoFruta() {
        this.modelo.procesarRamo(this.vista.iniciarRamoFruta());

        this.vista.reporte2(
            this.modelo.totalV(),
            this.modelo.porc()
            ,this.modelo.totalFrutas()
        )

    }
}