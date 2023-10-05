const COLOR_PERSONA = '\x1b[31m%s\x1b[0m';

class Persona {

    #nombre = "def nombre";
    #animo = 50;
    getNombre() {
        return this.#nombre
    }

    setNombre(nombreNuevo) {
        this.#nombre = nombreNuevo
    }

    getAnimo() {
        return this.#animo
    }

    setAnimo(animo) {
        this.#animo = animo;
    }



    acariciar(unPerro) {
        this.habla("Mi nombre es " + this.getNombre());
        this.habla("Estoy acariciando a " + unPerro.getNombre());
        this.#animo += 10;
        this.habla("con " + this.getAnimo() +" puntos de animo");
        unPerro.acariciadoPor(this);

    }

    reganar(unPerro) {
        this.habla("Soy " + this.getNombre());
        this.habla("Estoy regañando a " +unPerro.getNombre());
        this.#animo -= 10;
        this.habla("con " + this.getAnimo() +" puntos de animo");
        unPerro.reganadoPor(this);
        if (this.getAnimo() > 0) {
            /* this.habla("Tengo "+ this.getAnimo() + " puntos de animo"); */
        }else{
            this.habla("Ya no quiero regañarte ven " + unPerro.getNombre() +" solo quiero acariciarte");
        }
        
        
    }

    habla(msj) {
        console.log(COLOR_PERSONA, msj);
     }

     
}




/* module.exports = Persona; */

export { Persona };

  