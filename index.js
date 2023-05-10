import { argv } from "node:process";
import {readCitas, register} from "./operations.js";

//crear la carpeta operations y citas.json
// try {
//     await writeFile("operations.js", "");
//     console.log(' archivo JS creado ');

// } catch (error) {
//     console.log("el JS no se pudo crear");
// }
// try {
//     await writeFile("citas.json", JSON.stringify([]));
//     console.log("archivo JSON creado")
// } catch (error) {
//     console.log('el JSON no se pudo crear')
// }

const [acc, NombreDelAnimal, Edad, TipoDeAnimal, ColorDelAnimal, Enfermedad] =
  argv.slice(2);

if (acc === "register") {
  register(NombreDelAnimal, Edad, TipoDeAnimal, ColorDelAnimal, Enfermedad);
}

if (acc === "read") {
  readCitas();
}

if (acc !== "register" || "read") {
  console.log(
    `ERROR en comando:${acc},`,
    "debes ingresar un comando: read, register."
  );
}
