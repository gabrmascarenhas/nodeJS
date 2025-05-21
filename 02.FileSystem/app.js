
// const fs = require('fs');   // forma antiga
import fs from 'fs';   // precisa add "type": "module" (package.json)

const nomeArquivo = "exemplo.txt";
const conteudo = "Escrevendo em um arquivo com Node.js (utf-8 => (ç) (ã)";

// Criar um arquivo
function createFile() {
    fs.writeFile(nomeArquivo, conteudo, (erro) => {
        if (erro) {
            console.error("Erro ao criar/escrever no arquivo: ", erro);
            return;
        }
        console.log("Arquivo criado/escrito com sucesso!");
    });
}

// Ler o arquivo
function readFile(){
    fs.readFile(nomeArquivo, "utf-8", (erro, dados) => {
            if(erro) {
                console.error("Erro ao ler arquivo: ", erro);
                return;
            }
            console.log("Conteúdo do arquivo: ", dados);
    });
}

// --- Chama as Functions --- //
createFile();
readFile()
