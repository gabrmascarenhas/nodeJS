import path, { basename } from 'path';

//Manipulação de caminhos:
// const dirName = path.dirname("/path/to/file.txt");
const dirName = path.dirname("./pasta1/teste.txt"); // Nome do diretório
const baseName = path.basename("./pasta1/teste.txt"); // Nome do arquivo
const extName = path.extname("./pasta1/teste.txt"); // Extensão do arquivo
const joinPath = path.join("./pasta1/teste.txt"); // Junta diretório com o arquivo
const resolvePath = path.resolve("./pasta1/teste.txt"); // Caminho absoluto do arquivo

console.log(dirName);
console.log(baseName);
console.log(extName);
console.log(joinPath);
console.log(resolvePath);
console.log("Path finalizado");