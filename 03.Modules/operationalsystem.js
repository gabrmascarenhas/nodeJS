//npm install nodemon --save-dev <- baixar o nodemon no devDependencies

import os from 'os';

// Obtendo as informações sobre o sistema operacional (OS)
const architecture = os.arch(); // x64
const platform = os.platform(); // win32
const CPUs = os.cpus(); // Mostra todos os CPUs, mostrando informações sobre cada um.
const ram = os.totalmem();
const freeRAM = os.freemem();

console.log("Sistema Operacional: ", architecture);
console.log(platform);
console.log("Nímero de processadores: ", CPUs.length); // Pega o apenas o número de CPUs
console.log("CPUs: ", CPUs);
console.log("Memória total (Bytes): ",ram );
console.log("Memória total (KBytes): ",(ram/(1024)).toFixed(3) );
console.log("Memória total (MBytes): ",(ram/(1024*1024)).toFixed(3) );
console.log("Memória total (GBytes): ",(ram/(1024*1024*1024)).toFixed(3) );
console.log("Memória Livre em Bytes: ", freeRAM)
console.log("Memória Livre em KBytes: ", (freeRAM / 1024).toFixed(2));
console.log("Memória Livre em MBytes: ", (freeRAM/(1024**2)).toFixed(2));
console.log("Memória Livre em GBytes: ", (freeRAM/(1024**3)).toFixed(2));

//Interfaces de Rede:
const redes = os.networkInterfaces();

console.log("Interfaces de Rede: ", redes); //Tudo

