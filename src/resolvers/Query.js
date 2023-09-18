const { usuarios, perfis } = require('../data/db')


console.log(usuarios);
module.exports = {
  usuarioLogado() {
    const usuario = {
      id: 1,
      nome: 'Lucas bretzke',
      email: 'teste@gmail.com',
      idade: 19,
      salario_real: 3500.75,
      vip: false
    }

    return usuario
  },

  produtoEmDestaque() {
    const produto = {
      id: 1,
      nome: 'Produto 01',
      preco: 199.99,
      desconto: 10
    }

    return produto
  },

  usuarios() {
    if (usuarios.length === 0) {
      return []
    }

    return usuarios
  },

  usuario(_, { id }) {
    const user = usuarios.filter(user => user.id == id)
    return user[0] || null
  },

  perfis() {
    return perfis
  },

  perfil(_, { id }) {
    const perfil = perfis.filter(perfil => perfil.id == id)
    return perfil[0] || null
  }
}
