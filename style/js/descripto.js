import { resultadoDescriptografado } from "./main.js";

document.querySelector('#descriptografar').addEventListener('click', function(){
    const texto = document.querySelector("#criptoEntrada").value;
    const textoDescriptografado = descriptografar(texto);
    
    resultadoDescriptografado(textoDescriptografado);
})

export function descriptografar(texto){
    const textoDescriptografado = 
    texto
    .replace(/enter/g, "e")       
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    
    return textoDescriptografado;
}
