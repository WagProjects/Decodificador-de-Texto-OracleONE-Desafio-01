import { criptografar } from "./cripto.js";
import { descriptografar } from "./descripto.js";

export function resultadoDescriptografado(texto){
    const saida = document.querySelector(".saida")
    saida.innerHTML = `
        <p>${texto}</p>
    `
}
