import maisBarato from "./funcoesPreco/maisBarato.js";
import maisCaro from "./funcoesPreco/maisCaro.js";
import livros from "./livros.js";

const selectionSort = (value) => {
  if (value) {
    livros.forEach((_, indexAtual) => {
      let indexMenorPreco = maisBarato(livros, indexAtual);

      let livroAtual = livros[indexAtual];
      let livroMenorPreco = livros[indexMenorPreco];

      livros[indexAtual] = livroMenorPreco;
      livros[indexMenorPreco] = livroAtual;
    });
  }

  if (!value) {
    livros.forEach((_, indexAtual) => {
      let indexMaiorPreco = maisCaro(livros, indexAtual);

      let livroAtual = livros[indexAtual];
      let livroMaiorPreco = livros[indexMaiorPreco];

      livros[indexAtual] = livroMaiorPreco;
      livros[indexMaiorPreco] = livroAtual;
    });
  }

  console.log(livros);
};

selectionSort(true);
