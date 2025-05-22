# 📚 Estudos de Node.js

Este repositório tem como objetivo armazenar os projetos desenvolvidos durante meus estudos em **Node.js**, servindo como uma forma de acompanhar minha evolução.

---

## 📁 Projetos e Arquivos

### 📌 01. ServerNode
**Descrição:**  
Primeira criação de um servidor utilizando **Node.js**.

---

### 📌 02. FileSystem
**Descrição:**  
Explora diversas funcionalidades do módulo `fs` (File System):

- `fs.writeFile` – Criação de arquivos  
- `fs.readFile` – Leitura de arquivos  
- `fs.appendFile` – Atualização e adição de conteúdo em arquivos existentes  
- `fs.unlink` – Remoção de arquivos  
- `fs.mkdir` – Criação de diretórios  
- `fs.createWriteStream` – Criação de um fluxo de escrita em arquivos  
- `fs.readFileSync` – Leitura síncrona de arquivos

---

### 📌 03. Modules
**Descrição:**  
Estudo de três módulos nativos do Node.js: `os`, `path` e `crypto`.

#### 🖥️ Módulo `os`
- `os.arch()` – Mostra a arquitetura do sistema operacional (x64 ou x32)  
- `os.cpus()` – Informações sobre os processadores  
- `os.totalmem()` – Memória total em bytes  
- `os.freemem()` – Memória RAM livre  
- `os.networkInterfaces()` – Informações sobre as interfaces de rede

#### 📂 Módulo `path`
- `path.dirname()` – Nome do diretório  
- `path.basename()` – Nome do arquivo  
- `path.extname()` – Extensão do arquivo  
- `path.join()` – Combina caminhos (diretório + arquivo)  
- `path.resolve()` – Caminho absoluto do arquivo

#### 🔐 Módulo `crypto`
O módulo `crypto` fornece funcionalidades de **criptografia**, como a criação de *hashes* para segurança de dados.

- `crypto.createHash()` – Cria um hash com base no algoritmo escolhido (como SHA-256, SHA-512 etc.)  
- `crypto.createHmac()` – Similar ao `createHash()`, mas inclui uma chave secreta para maior segurança (HMAC)  
- `bcrypt.hash()` – Usa o pacote externo `bcrypt` para aplicar múltiplas rodadas de hashing com *salt* e *cost*, oferecendo maior segurança para senhas
- `bcrypt.compare()` – Compara se a senha informada coincide com algum hash armazenado 

---

📌 *Este repositório será atualizado conforme novos tópicos forem sendo estudados.*
