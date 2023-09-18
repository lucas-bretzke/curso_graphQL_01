const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')

const perfis = [
  { id: 1, nome: 'comun' },
  { id: 2, nome: 'administrador' }
]

const databaseUsuarios = [
  {
    id: 1,
    nome: 'Lucas bretzke',
    email: 'teste@gmail.com',
    idade: 15,
    salario_real: 3500.75,
    vip: false,
    perfil_id: 1
  },
  {
    id: 2,
    nome: 'Maria bretzke',
    email: 'teste@gmail.com',
    idade: 19,
    salario_real: 15000.75,
    vip: false,
    perfil_id: 2
  },
  {
    id: 3,
    nome: 'Sabrina bretzke',
    email: 'teste@gmail.com',
    idade: 18,
    salario_real: 22222.75,
    vip: false,
    perfil_id: 1
  }
]

const resolvers = {
  Produto: {
    precoComDesconto(produto) {
      if (produto.desconto) {
        return (produto.precoComDesconto = produto.preco - produto.desconto)
      } else {
        return produto.preco
      }
    }
  },

  Usuario: {
    salario(usuario) {
      return usuario.salario_real
    },
    perfil(usuario) {
      return perfis.find(perfil => (perfil.id = usuario.perfil_id)) || null
    }
  },

  Query: {
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
      return databaseUsuarios
    },

    usuario(_, { id }) {
      const user = databaseUsuarios.filter(user => user.id == id)
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
}

const server = new ApolloServer({
  typeDefs: importSchema('./src/schema/index.graphql'),
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})
