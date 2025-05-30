
// const fs = require('fs');   // forma antiga
import fs from 'fs';   // precisa add "type": "module" (package.json)

const conteudo = " {Escrevendo em um arquivo com Node.js (utf-8 => (ç) (ã) }";
const newDirec = "NewDirectory";
//  Caso for preciso criar um  exemplo em uma pasta que irá ser criada:
// const nomeArquivo = newDirec + "/exemplo.txt";
const nomeArquivo = 'exemplo.txt';
const novoConteudo = " { Parte Adicionada por appendFile }\n ";


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

// Adicionar conteúdo (Cria o arquivo, caso ele não exista)
function addContent() {
    fs.appendFile(nomeArquivo, novoConteudo, (erro) => {
        if(erro){
            console.error("Não foi possível adicionar conteúdo no arquivo: ", erro);
            return;
        }
        console.log("Conteúdo adicionado com sucesso.");
    });
}

// Remove um arquivo:
function removeFile(){
    fs.unlink(nomeArquivo, (erro) => {
        if(erro) {
            console.error("Não foi possível remover o arquivo: ", erro);
        }
        console.log("Arquivo removido com sucesso");
    });
}

// Criar um diretório 

function createDir() {

fs.mkdir(newDirec, {recursive: true}, (erro) => {
    if(erro){
        console.error("Erro ao criar diretório");
        return;
    }
    console.log("Diretório criado com sucesso");
 
    });
}

function removeDir(){
    fs.rm(newDirec, {recursive: true}, (erro) => {
        if(erro) {
            console.error("Não foi possível excluir diretório: ");
            return;
        }
        console.log("Diretório excluido com sucesso.")
    })

}
// --- Chama as Functions --- //
// createFile();
// readFile();
// addContent();
// removeFile();
// createDir();
// removeDir();