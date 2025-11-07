// Nome do arquivo: server.js

// 1. Importar as bibliotecas necessárias
const express = require('express');
const mysql = require('mysql2/promise'); // Usamos a versão com "Promises"
const cors = require('cors');

// 2. Configurar o servidor Express
const app = express();
app.use(express.json()); // Permite o servidor entender JSON
app.use(cors());         // Permite que seu frontend acesse este backend

// 3. Configurar a Conexão com o Banco de Dados MySQL
//    !! IMPORTANTE !! Altere com suas credenciais do MySQL
const pool = mysql.createPool({
    host: 'localhost',       // Ou o IP do seu servidor MySQL
    user: 'root',            // Seu usuário (pode ser 'root')
    password: 'sua_senha',   // SUA SENHA DO MYSQL
    database: 'mao_na_massa',// O nome do seu banco de dados
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// 4. Criar o Endpoint (API) para "Buscar Profissionais"
app.post('/api/profissionais', async (req, res) => {
    
    // Pega o ID do serviço que o frontend enviou
    const { idServico } = req.body;

    if (!idServico) {
        return res.status(400).json({ error: 'O ID do serviço é obrigatório.' });
    }

    try {
        // Esta é a consulta SQL que substitui sua simulação!
        // Ela busca o nome do prestador, a descrição, o nome do serviço
        // e calcula a média de notas das avaliações dele.
        const query = `
            SELECT 
                p.Nome, 
                pr.Descricao_Propria_Servico, 
                s.Nome AS NomeServico,
                (
                    SELECT IFNULL(ROUND(AVG(a.Nota), 1), 0) 
                    FROM Avaliacoes a
                    JOIN Solicitacoes sol ON a.ID_Solicitacao = sol.ID_Solicitacao
                    WHERE sol.ID_Prestador = pr.ID_Prestador
                ) AS Avaliacao
            FROM Prestadores pr
            JOIN Pessoas p ON pr.CPF_Pessoa = p.CPF
            JOIN Servicos s ON pr.ID_Servico = s.ID_Servico
            WHERE pr.ID_Servico = ? AND pr.Status_Verificacao = 'Aprovado';
        `;

        // Executa a consulta no banco de dados de forma segura
        const [profissionais] = await pool.query(query, [idServico]);

        // Retorna a lista de profissionais (em formato JSON) para o frontend
        res.json(profissionais);

    } catch (error) {
        console.error('Erro ao buscar profissionais:', error);
        res.status(500).json({ error: 'Erro interno no servidor' });
    }
});

// TODO: Adicionar endpoints para Login, Cadastro, etc.
// app.post('/api/login', ...)
// app.post('/api/cadastro', ...)

// 5. Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor backend rodando na porta ${PORT}`);
    console.log('Aguardando conexões do frontend...');
});