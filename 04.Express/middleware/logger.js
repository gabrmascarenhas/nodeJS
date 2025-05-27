import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const logsDir = path.join(__dirName, '../logs');
const logFile = path.join(logsDir, 'requests.json');

function ensureLogfile() {
    if(!fs.existsSync(logsDir)){
        fs.mkdirSync(logsDir);
    }
    if(!fs.existsSync(logFile)){
        fs.writeFileSync(logFile, '[]');
    }
}

function logger(request, reponse, next){
    ensureLogfile();
    
    const logData = {
        date: new Date().toLocaleDateString(),
        metodo: request.method,
        url: request.url,
        body: request.body
    };

console.log(`[${logData.date}] [${logData.metodo}] ${logData.url}`);

fs.readFile(logFile, "utf-8", (err, data) => {
    let logs = [];
    try{
        logs = JSON.parse(data || '[]');
    } catch {
        logs = [];
    }

    logs.push(logData);
    
    fs.writeFile(logFile, JSON.stringify(logs, null, 2), (err) => {
        if (err){ console.error("Erro ao salvar log: ", err);}
    });
})
        next();
}
export default logger;