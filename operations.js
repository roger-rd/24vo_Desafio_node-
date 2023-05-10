import { nanoid } from "nanoid";
import { readFile, writeFile } from "node:fs/promises";

export const register = async (
  NombreDelAnimal,
  Edad,
  TipoDeAnimal,
  ColorDelAnimal,
  Enfermedad
) => {
  try {
    const records = JSON.parse(await readFile("citas.json"));
    const record = {
      id: nanoid(),
      NombreDelAnimal,
      Edad,
      TipoDeAnimal,
      ColorDelAnimal,
      Enfermedad,
    };
    records.push(record);
    await writeFile("citas.json", JSON.stringify(records));
    console.log("se a creado el perfil del animal");
  } catch (error) {
    console.log(error);
  }
};

export const readCitas = async () => {
  try {
    const records = JSON.parse(await readFile("citas.json", "utf-8"));
    console.log(records);
  } catch (error) {
    console.log(error);
  }
};
