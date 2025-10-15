# 📸 ReactGram

> Uma aplicação fullstack inspirada no Instagram, desenvolvida com **React**, **Node.js**, **Express** e **MongoDB**.  
> Projeto em construção — atualmente com **backend funcional**, incluindo autenticação de usuário e conexão com banco de dados.

---

## 🚀 Tecnologias Utilizadas

### 🖥️ Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt) — para hash de senhas
- [jsonwebtoken (JWT)](https://jwt.io/) — para autenticação de usuários
- [dotenv](https://www.npmjs.com/package/dotenv) — para variáveis de ambiente

---

## ⚙️ Funcionalidades Atuais

✅ Registro de usuário  
✅ Login com autenticação JWT  
✅ Validação básica de dados (nome, e-mail e senha)  
✅ Conexão com o banco de dados MongoDB  
✅ Estrutura inicial pronta para integração com o frontend (React)  

## 🧩 Instalação

### 🔧 Pré-requisitos
- Node.js (v18+)
- NPM ou Yarn
- Conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) ou servidor local

### 📦 Passo a passo

1. Clone o repositório:
   ```bash
   git clone https://github.com/VitorGuilherme/reactgram.git
Entre no diretório do backend:

cd reactgram/backend
Instale as dependências:


🔑 Rotas Atuais da API
| Método | Rota                  | Descrição                                                  |
| :----: | :-------------------- | :--------------------------------------------------------- |
| `POST` | `/api/users/register` | Registra novo usuário                                      |
| `POST` | `/api/users/login`    | Realiza login e retorna token JWT                          |
|  `GET` | `/api/users/profile`  | Retorna dados do usuário autenticado *(token obrigatório)* |


🧭 Próximos Passos:
- 📱 Criação do frontend com React + Vite
- 🖼️ Upload e exibição de imagens
- ❤️ Likes, comentários e sistema de seguidores
- 👤 Página de perfil e edição de usuário
- 🔐 Middleware avançado de autenticação

💪 Autor
Desenvolvido por Vitor Guilherme com o curso do professor Matheus Battisti — em constante evolução 🚀
- 📧 Contato: vitor.gsa@outlook.com

🧱 Status do Projeto
- 🟢 Backend funcional
- 🟡 Frontend em desenvolvimento
- 🔴 Deploy ainda não configurado
