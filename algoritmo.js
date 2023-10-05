
/* const Perro = require("./Perro.js");
const Persona = require("./Persona.js"); */

/* import { Perro } from "./perro.js"; */
import { Perro } from "./perro.js";
import { Persona } from "./persona.js";

const juan = new Persona();
juan.setNombre("juan");
console.log(juan.getNombre());

const lisy = new Perro();
lisy.setNombre("lisy");
console.log(lisy.getNombre());


juan.acariciar(lisy);
juan.reganar(lisy);
juan.reganar(lisy);
juan.reganar(lisy);
juan.reganar(lisy);
juan.reganar(lisy);
juan.reganar(lisy);