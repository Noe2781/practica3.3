class Persona {

    #nombre = "def nombre";
    #animo = 0;
    getNombre (){
        return this.#nombre
    }

    setNombre (nombreNuevo){
        this.#nombre = nombreNuevo
    }

    setAnimo(animo){
        this.#animo = animo;
    }
  
    /**
     * saludar a perro
     * @param {Persona}juan saluda a perro
     * @param {Perro} lisy es saludado 
     */
        saludar(unPerro) {
            console.log(this.getNombre() + " saluda a " + unPerro.getNombre());
            unPerro.devuelveSaludo(this);
          }
  }
  
  class Perro {

    #nombre = "def nombre";
    #animo = 0;
    getNombre (){
        return this.#nombre
    }

    setNombre (nombreNuevo){
        this.#nombre = nombreNuevo
    }


    setAnimo(animo) {
        this.#animo = animo;
    }

    //crear devolver saludo con el animo del perro
    

   
  }

  const juan = new Persona();
  juan.setNombre("juan");
  console.log(juan.getNombre());

  const lisy = new Perro();
  lisy.setNombre("lisy");
  console.log(lisy.getNombre());


  juan.saludar(lisy);
  

  