import listaLivros from "./array.js";

function mergeSort(array) {
  if (array.length > 1) {
    let posicaoMetade = Math.floor(array.length / 2);
    let arrayParte1 = mergeSort(array.slice(0, posicaoMetade));
    let arrayParte2 = mergeSort(array.slice(posicaoMetade));
    array = ordenacao(arrayParte1, arrayParte2);
  }
  return array;
}

function ordenacao(arr1, arr2) {
  let posicaoAtualArr1 = 0;
  let posicaoAtualArr2 = 0;
  let arrOrdeado = [];

  while (posicaoAtualArr1 < arr1.length && posicaoAtualArr2 < arr2.length) {
    let livroAtualArr1 = arr1[posicaoAtualArr1];
    let livroAtualArr2 = arr2[posicaoAtualArr2];

    if (livroAtualArr1.preco < livroAtualArr2.preco) {
      arrOrdeado.push(livroAtualArr1);
      posicaoAtualArr1++;
    } else {
      arrOrdeado.push(livroAtualArr2);
      posicaoAtualArr2++;
    }
  }

  return arrOrdeado.concat(posicaoAtualArr1 < arr1.length
    ? arr1.slice(posicaoAtualArr1)
    : arr2.slice(posicaoAtualArr2))
}

console.log(mergeSort(listaLivros));


/* 
O Merge Sort usa o conceito de "dividir para conquistar", ou seja, divide o problema (array) em partes menores e os 
resolve, no caso, ordena as pequenas partes divididas do array.

Ocorre uma recursão no momento em que a função mergeSort() é chamada dentro dela mesma, criando níveis de aninhamento
do array utilizando os valores retornados na chamada anterior como parâmetro e sem substituir os dados armazenados nas 
variáveis arrayParte1 e arrayParte2, até que a condição do if seja atingida.
*/

/* 
Array inicial:
[
  { titulo: 'Go', preco: 45 },
  { titulo: 'C++', preco: 35 },
  { titulo: 'Java', preco: 30 },
  { titulo: 'PHP', preco: 15 },
  { titulo: 'Elixir', preco: 50 },
  { titulo: 'Rust', preco: 22 },
  { titulo: 'Scala', preco: 40 },
  { titulo: 'Ruby', preco: 28 },
  { titulo: 'JavaScript', preco: 25 },
  { titulo: 'C#', preco: 33 },
  { titulo: 'Python', preco: 20 }
]


Array ordenado:
[
  { titulo: 'PHP', preco: 15 },
  { titulo: 'Python', preco: 20 },
  { titulo: 'Rust', preco: 22 },
  { titulo: 'JavaScript', preco: 25 },
  { titulo: 'Ruby', preco: 28 },
  { titulo: 'Java', preco: 30 },
  { titulo: 'C#', preco: 33 },
  { titulo: 'C++', preco: 35 },
  { titulo: 'Scala', preco: 40 },
  { titulo: 'Go', preco: 45 },
  { titulo: 'Elixir', preco: 50 }
]
*/