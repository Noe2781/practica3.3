class Persona {

    #nombre = "def nombre";
    getNombre (){
        return this.#nombre
    }

    setNombre (nombreNuevo){
        this.#nombre = nombreNuevo
    }
  
    /**
     * saludar a perro
     * @param {Persona}juan saluda a perro
     * @param {Perro} lisy es saludado 
     */
        saludar(lisy) {
            console.log(this.getNombre() + " saluda a " + lisy.getNombre());
          }
  }
  
  class Perro {

    #nombre = "def nombre";
    getNombre (){
        return this.#nombre
    }

    setNombre (nombreNuevo){
        this.#nombre = nombreNuevo
    }
   
  }

  const juan = new Persona();
  juan.setNombre("juan");
  console.log(juan.getNombre());

  const lisy = new Perro();
  lisy.setNombre("lisy");
  console.log(lisy.getNombre());


  juan.saludar(lisy);
  

  