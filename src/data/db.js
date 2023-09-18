const perfis = [
  { id: 1, nome: 'comun' },
  { id: 2, nome: 'administrador' }
]

const usuarios = [
  {
    id: 1,
    nome: 'Lucas bretzke',
    email: 'teste@gmail.com',
    idade: 15,
    salario_real: 3500.75,
    vip: false,
    perfil_id: 1,
    status: 'ATIVO'
  },
  {
    id: 2,
    nome: 'Maria bretzke',
    email: 'teste@gmail.com',
    idade: 19,
    salario_real: 15000.75,
    vip: false,
    perfil_id: 2,
    status: 'INATIVO'
  },
  {
    id: 3,
    nome: 'Sabrina bretzke',
    email: 'teste@gmail.com',
    idade: 18,
    salario_real: 22222.75,
    vip: false,
    perfil_id: 1,
    status: 'BLOQUEADO'
  }
]


module.exports = {usuarios, perfis}