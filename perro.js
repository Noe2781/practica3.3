const COLOR_PERRO = '\x1b[34m%s\x1b[0m';

class Perro {

    #nombre = "def nombre";
    #animo = 50;
    getNombre() {
        return this.#nombre
    }

    setNombre(nombreNuevo) {
        this.#nombre = nombreNuevo
    }


    setAnimo(animo) {
        this.#animo = animo;
    }
    getAnimo() {
        return this.#animo
    }

    //crear devolver saludo con el animo del perro 
    acariciadoPor(Persona) {
        this.habla("Mi nombre es " + this.getNombre());
        this.habla("Estoy siendo acariaciado por " + Persona.getNombre());
        this.#animo += 10;
        this.habla("con " + this.getAnimo() + " puntos de animo");



    }

    reganadoPor(Persona) {
        this.habla("Soy " + this.getNombre());
        this.habla("Estoy siendo regañado por " + Persona.getNombre());
        this.#animo -= 10;
        this.habla("con " + this.getAnimo() + " puntos de animo");

        /* this.habla("Soy " + this.getNombre());
        this.habla("Estoy siendo regañado por " + Persona.getNombre());
        this.#animo -= 10;
        this.habla("con " + this.getAnimo() +" puntos de animo");

        this.habla("Soy " + this.getNombre());
        this.habla("Estoy siendo regañado por " + Persona.getNombre());
        this.#animo -= 10;
        this.habla("con " + this.getAnimo() +" puntos de animo");

        this.habla("Soy " + this.getNombre());
        this.habla("Estoy siendo regañado por " + Persona.getNombre());
        this.#animo -= 10;
        this.habla("con " + this.getAnimo() +" puntos de animo");

        this.habla("Soy " + this.getNombre());
        this.habla("Estoy siendo regañado por " + Persona.getNombre());
        this.#animo -= 10;
        this.habla("con " + this.getAnimo() +" puntos de animo");

        this.habla("Soy " + this.getNombre());
        this.habla("Estoy siendo regañado por " + Persona.getNombre());
        this.#animo -= 10;
        this.habla("con " + this.getAnimo() +" puntos de animo"); */

        if (this.getAnimo() > 0) {
            /*  this.habla("Tengo "+ this.getAnimo() + " puntos de animo"); */
        } else {
            this.habla("Ya no me regañes ");
        }


    }

    habla(msj) {
        console.log(COLOR_PERRO, msj);
    }
}

/*   module.exports = Perro; */
export { Perro };