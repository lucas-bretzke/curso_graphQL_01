module.exports = {
  precoComDesconto(produto) {
    if (produto.desconto) {
      return (produto.precoComDesconto = produto.preco - produto.desconto)
    } else {
      return produto.preco
    }
  }
}