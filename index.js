const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./src/resolvers')

const server = new ApolloServer({
  typeDefs: importSchema('./src/schema/index.graphql'),
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})
