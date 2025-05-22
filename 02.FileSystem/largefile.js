
import fs from 'fs'
const filePath = 'large_File.txt';
const lines = 1000000;

function createFile() {
    const writeStream = fs.createWriteStream(filePath);
    for(let i =1; i <= lines; i++){
        writeStream.write(`Linha  ${i}\n`);
    }
    writeStream.end(() => {
        console.log(`${lines} linhas escritas em ${filePath}`);
    })
}

//Ler o largeFile de forma sincrona (sync)
function readFileSync() {
    console.log("\n1. Iniciando leitura do arquivo sincrono...");

    try{
        const dados = fs.readFileSync(filePath, 'utf-8');
        //Mostra os primeiros 1000 caracteres.
        console.log(`\n2. Conteúdo do arquivo (sync):\n${dados.slice(0, 1000)}`)
    } catch(erro) {
        console.error(`\n Erro ao ler o arquivo: ${erro}`);
    }
    console.log("\n3. Continua executando após a leitura síncrona...");
}
//Ler o largeFile de forma sincrona (sync)
function readFileASync() {
    console.log("\n1. Iniciando leitura do arquivo Assíncrono...");
    
    fs.readFile(filePath, "utf-8", (erro, dados) => {
        if (erro) {
            console.error(`\nErro ao ler o arquivo: ${erro}`);
            return;
        }

        // Mostra os primeiros 1.000 caracteres
        console.log(`\n2. Conteúdo do arquivo (Assíncrono):\n${dados.slice(0, 1000)}`);
    });

    console.log("\n3. Continua executando outras operações...");
}
// createFile();
readFileSync();
readFileASync();