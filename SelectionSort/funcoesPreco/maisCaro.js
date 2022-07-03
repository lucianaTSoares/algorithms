const maisCaro = (livros, indexInicial) => {
  let indexMaisCaro = indexInicial;

  for (let atual = indexInicial; atual < livros.length; atual++) {
    if (livros[ atual].preco > livros[indexMaisCaro].preco) {
      indexMaisCaro = atual;
    }
  };

  return indexMaisCaro;
};

export default maisCaro;

// É feito um map (mesma coisa que um for()) no array:

// SE o valor do livro sendo percorrido no momento é maior ou menor que o valor do primeiro livro do array (indice 0)
// ENTAO o valor do indexMaisCaro (index passado de acordo com o index na função selectSort()) ganhará o valor do index que está sendo verificado no mometo
