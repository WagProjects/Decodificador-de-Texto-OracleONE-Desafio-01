import { resultadoDescriptografado } from "./main.js";

document.querySelector('#criptografar').addEventListener("click", function(){
    const texto = document.querySelector("#criptoEntrada").value;
    const textoCriptografado = criptografar(texto);
    
    resultadoDescriptografado(textoCriptografado);
})

export function criptografar(texto){
    const textoCriptografado = 
    texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")

    return textoCriptografado;
}