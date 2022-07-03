const maisBarato = (livros, indexInicial) => {
  let indexMaisBarato = indexInicial;

  for (let atual = indexInicial; atual < livros.length; atual++) {
    if (livros[atual].preco < livros[indexMaisBarato].preco) {
      indexMaisBarato = atual;
    }
  }

  return indexMaisBarato;
};

export default maisBarato;

// É feito um map (mesma coisa que um for()) no array:

// SE o valor do livro sendo percorrido no momento é maior ou menor que o valor do primeiro livro do array (indice 0)
// ENTAO o valor do indexMaisBarato (index passado de acordo com o index na função selectSort()) ganhará o valor do index que está sendo verificado no mometo
