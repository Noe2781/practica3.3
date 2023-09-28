/* const COLOR_PERSONA = '\x1b[31m%s\x1b[0m'; */

class Persona {

    #nombre = "def nombre";
    #animo = 50;
    getNombre (){
        return this.#nombre
    }

    setNombre (nombreNuevo){
        this.#nombre = nombreNuevo
    }

    getAnimo (){
        return this.#animo
    }

    setAnimo(animo){
        this.#animo = animo;
    }


  
        acariciar(Perro) {
            console.log("Mi nombre es " + this.getNombre());
            console.log( "Estoy acariciando a " + Perro.getNombre());
            this.#animo += 10;
           
          }
  }

    /*  habla(msj) {
        console.log(COLOR_PERSONA, msj);
     } */
  

     module.exports = Persona;

  