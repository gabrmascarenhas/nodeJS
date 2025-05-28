    import express from "express";
    import fs from "fs";
    import path from "path";
    import bcrypt from "bcrypt";
    import { v4 as uuidv4 } from "uuid";
    import { fileURLToPath } from "url";

    const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);
const dataDir = path.join(__dirName, '../data');  // <-- Adicionado
const usersFile = path.join(dataDir, 'users.json'); // <-- Atualizado
const router = express.Router();

function ensureUserfile() {
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);
    }
    if (!fs.existsSync(usersFile)) {
        fs.writeFileSync(usersFile, '[]');
    }
}
    router.post("/", async (request, response) => {
        // Desestrutração dos dados enviados na requisição
        const { nome, email, senha } = request.body;
        ensureUserfile();
        
        // Verifica os campos em branco
        if (!nome || !email || !senha) {
            return response.status(400).json({
                erro: "Nome, E-mail e Senha são obrigatórios"
            });
        }

        try {
            // Busca os usuários existentes
            const data = fs.readFileSync(usersFile, "utf-8");
            const users = JSON.parse(data || "[]");

            // Verifica se o E-mail já existe
            const EmailExiste = users.find((user) => user.email === email);

            if (EmailExiste) {
                return response.status(409).json({
                    erro: "E-mail já cadastrado"
                });
            }

            // Gera o Hash da Senha
            const hashedPassword = await bcrypt.hash(senha, 10);

            // Cria um novo usuário
            const id = uuidv4();
            const newUser = {
                uid: id,
                nome: nome,
                email: email,
                password: hashedPassword,
                createdAt: new Date().toLocaleDateString(),
                updatedAt: new Date().toLocaleDateString()
            };

            // Adiciona o novo usuário no array (lista de usuários)
            users.push(newUser);

            // Salva no arquivo
            fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

            // Remove a senha do retorno
            const { senha: _, ...userWithoutPassword } = newUser;

            response.status(201).json({
                mensagem: "Usuário cadastrado com sucesso!",
                usuario: userWithoutPassword
            });

        } catch(erro) {
            console.error("Erro ao criar usuário:", erro);
            response.status(500).json({
                erro: "Erro ao criar usuário."
            });
        }
    });

    export default router;
