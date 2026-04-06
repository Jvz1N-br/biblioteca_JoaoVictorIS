const usuarios = [
  {
    id: 1,
    nome: 'Anderson Dutra',
    email: 'anderson@gmail.com',
  },
  {
    id: 2,
    nome: 'Ralph Dutra',
    email: 'ralph@gmail.com',
  },
  {
    id: 3,
    nome: 'Teddy Dutra',
    email: 'teddy@gmail.com',
  },
];

// Lista todos os usuarios
const listarTodosUsuarios = async () => {
  return usuarios;
};

// Criar um novo usuario
const criarUsuario = async ({ nome, email }) => {
  if (!nome || !email) {
    throw new Error('Nome e e-mail são obrigatórios.');
  }
  const novoUsuario = {
    id: usuarios.length + 1,
    nome,
    email,
  };
  usuarios.push(novoUsuario);
  return novoUsuario;
};

module.exports = { listarTodosUsuarios, criarUsuario };
