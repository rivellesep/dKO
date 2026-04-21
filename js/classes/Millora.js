export default class Millora {
    constructor(id, nom, descripcio, tipus, valor, maxRepeticions = 99) {
        this.id = id;
        this.nom = nom;
        this.descripcio = descripcio;
        this.tipus = tipus;
        this.valor = valor;
        this.maxRepeticions = maxRepeticions;
        this.vegadesAplicada = 0;
    }

    potAplicar() {
        return this.vegadesAplicada < this.maxRepeticions;
    }

    aplicar() {
        this.vegadesAplicada++;
    }
}