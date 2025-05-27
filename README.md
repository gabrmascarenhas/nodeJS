# 📚 Estudos de Node.js

Este repositório tem como objetivo armazenar os projetos desenvolvidos durante meus estudos em **Node.js**, servindo como uma forma de acompanhar minha evolução.

---

## 📁 Projetos e Arquivos

### 📌 01. ServerNode
**Descrição:**  
Criação de um servidor utilizando **Node.js**.

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

#### 🖥️ Módulo `os` : Relacionado com o **Sistema** **Operacional** do usuário.
- `os.arch()` – Mostra a arquitetura do sistema operacional (x64 ou x32)  
- `os.cpus()` – Informações sobre os processadores  
- `os.totalmem()` – Memória total em bytes  
- `os.freemem()` – Memória RAM livre  
- `os.networkInterfaces()` – Informações sobre as interfaces de rede

#### 📂 Módulo `path` : Relacionado com **arquivos** e **diretórios**.
- `path.dirname()` – Nome do diretório  
- `path.basename()` – Nome do arquivo  
- `path.extname()` – Extensão do arquivo  
- `path.join()` – Combina caminhos (diretório + arquivo)  
- `path.resolve()` – Caminho absoluto do arquivo

#### 🔐 Módulo `crypto` : Fornece funcionalidades de **criptografia**.

- `crypto.createHash()` – Cria um hash com base no algoritmo escolhido (como SHA-256, SHA-512 etc.)  
- `crypto.createHmac()` – Similar ao `createHash()`, mas inclui uma chave secreta para maior segurança (HMAC)  
- `bcrypt.hash()` – Usa o pacote externo `bcrypt` para aplicar múltiplas rodadas de hashing com *salt* e *cost*, oferecendo maior segurança para senhas
- `bcrypt.compare()` – Compara se a senha informada coincide com algum hash armazenado 

---

### 📌 04. Express  
**Descrição:**  
Criação de um projeto de cadastro com o framework **Express.js**.
#### Funcionalidades abordadas:

- `express.Router()` – Criação e organização de rotas em módulos separados  
- `router.post()` – Cadastro de usuários via requisição POST  
- Validação de dados – Verificação de campos obrigatórios (nome, email e senha)  
- `bcrypt.hash()` – Geração de hash seguro para senhas  
- `fs.readFileSync` e `fs.writeFileSync` – Leitura e escrita de dados em arquivo JSON  
- Verificação de e-mails duplicados – Prevenção de cadastros repetidos  
- `uuidv4()` – Geração de identificadores únicos para usuários  
- Exclusão de dados sensíveis – Remoção da senha da resposta enviada ao cliente  
- Tratamento de erros – Respostas apropriadas em caso de falhas na execução
#### Arquitetura de diretórios:
cadastro-express/

├── app.js  
├── middleware/  
│   └── logger.js  
├── routes/  
│   └── userRoutes.js  
├── data/  
│   └── users.json  
└── logs/  
    └── requests.json  (adicionado ao .gitignore)


📌 *Este repositório será atualizado conforme novos tópicos forem sendo estudados.*
