# 🧪 Testes de API com Postman

Este repositório contém evidências práticas de testes manuais e automatizados de API utilizando o **Postman**, simulando um fluxo completo de autenticação.

---

## 🚀 Objetivo

Demonstrar conhecimento e domínio em testes de APIs RESTful utilizando o Postman, cobrindo os principais cenários de autenticação com JSON Web Token (JWT).

---

## ✅ Funcionalidades testadas

- `POST /register`: Registro de novo usuário
- `POST /login`: Autenticação e retorno de token JWT
- `GET /profile`: Acesso protegido com token

---

## 🛠 Tecnologias utilizadas

- [Postman](https://www.postman.com/)
- Node.js (API backend de exemplo)
- JWT (para autenticação)
- Swagger (documentação da API)

---

## 🧾 Evidências dos testes

### 📌 1. Registro de usuário com sucesso

![Registro](./evidencias/registro-sucesso.png)

---

### 📌 2. Login com retorno de token JWT

![Login](./evidencias/login-sucesso.png)

---

### 📌 3. Acesso a rota protegida usando o token

![Profile](./evidencias/profile-autenticado.png)

---

## 📁 Coleção Postman

Você pode importar a coleção no Postman para repetir os testes:

- 📥 [Download da coleção (JSON)](./postman/colecao-autenticacao.postman_collection.json)

---

## 🔄 Como rodar a API localmente (opcional)

Se quiser testar por conta própria:

```bash
git clone https://github.com/seu-usuario/api-autenticacao.git
cd api-autenticacao
npm install
npm run dev
