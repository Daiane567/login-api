require('dotenv').config(); // Carrega variáveis do arquivo .env (em desenvolvimento)

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET = process.env.JWT_SECRET || 'meu_segredo_local'; // Mais seguro

app.use(cors());
app.use(express.json());

const users = []; // Armazenamento em memória

// Rota de registro
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'Usuário já existe' });
  }

  const hashedPassword = await bcrypt.hash(password, 8);
  users.push({ email, password: hashedPassword });

  res.status(201).json({ message: 'Usuário registrado com sucesso' });
});

// Rota de login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(400).json({ message: 'Usuário não encontrado' });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(401).json({ message: 'Senha incorreta' });
  }

  const token = jwt.sign({ email }, SECRET, { expiresIn: '1h' });

  res.status(200).json({ token });
});

// Rota protegida
app.get('/profile', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Token ausente' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, SECRET);
    res.status(200).json({ message: 'Acesso autorizado', email: decoded.email });
  } catch (err) {
    res.status(401).json({ message: 'Token inválido' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
