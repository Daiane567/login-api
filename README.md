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

![Registro](https://github.com/Daiane567/login-api/blob/main/evidencias/postregistro.png)

---

### 📌 2. Login com retorno de token JWT

---

### 📌 3. Acesso a rota protegida usando o token

![Profile](https://github.com/Daiane567/login-api/blob/main/evidencias/token.png)

---

## 📁 Swagger API


- 📥 [Swagger API](https://login-api-incn.onrender.com/api-docs/#/default/post_register)

---

## 🔄 Como rodar a API localmente (opcional)

Se quiser testar por conta própria:

```bash
git clone https://github.com/seu-usuario/api-autenticacao.git
cd api-autenticacao
npm install
npm run dev
