import lista from "../SelectionSort/livros.js";
import troca from './troca.js'

const insertionSort = () => {
  for (let atual = 0; atual < lista.length; atual++) {
    let analise = atual;

    while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
      troca(lista, analise);
      analise--
    }  
  }
  console.log(lista)
};

insertionSort()