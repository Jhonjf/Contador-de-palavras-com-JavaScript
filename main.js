
// Criando há função
function contarPalavras(texto) {

    const palavras = texto.split (' ');

    const contagem = {};

    palavras.forEach(palavra => {
        palavra = palavra.trim().toLowerCase();

        if (palavra) {
            if(contagem[palavra]) {
                contagem[palavra]++;
            } else {
                contagem[palavra] = 1;
            }
        }
    });
    
    return contagem;

}

const texto = "Oii, sou Jhon";
const resultado = contarPalavras(texto);
console.log(resultado)