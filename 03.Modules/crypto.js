import crypto, { generateKey } from 'crypto';
import bcrypt from 'bcrypt';

const password = "senha123";

//  Criando um hash com algoritmo SHA-256
const sha256Hash = crypto.createHash("sha256").update(password).digest('hex');
console.log("Hash SHA-256:", sha256Hash);

//  Criando um hash com algoritmo SHA-512
const sha512Hash = crypto.createHash("sha512").update(password).digest('hex');
console.log("Hash SHA-512:", sha512Hash);

//  Criando hash com Bcrypt
// Bcrypt é mais seguro para senhas pois aplica múltiplas rodadas de hashing (salt + cost)
const saltRounds = 10;
const Generatedhash = await createHash("senha123")
console.log("Bcrypt: ", Generatedhash);
async function createHash(passwordofyourchoice){
    return bcrypt.hash(passwordofyourchoice, saltRounds);
}


async function compareHash(userPassword, Generatedhash) {
    bcrypt.compare(userPassword, Generatedhash, (err, resultado) => {
        if (err) throw err;
        if(resultado == true){
            console.log("Senhas são iguais: ", resultado);
            
        } else if(resultado == false){
            console.log("Senhas diferentes");
        }
        return resultado;
    });
    
}





await compareHash(password, Generatedhash);