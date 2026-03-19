const LivrosServices = require ('../services/livrosServices')

const listarLivros = async (req,res) => {
try{
const livros = await livrosService.ListarTodosOsLivros()
res.status(200).json({total: Livros.length, livros});

}
catch (error){
res.status(500).json(error,'Erro interno ao listar livros.')

}
};

module.export