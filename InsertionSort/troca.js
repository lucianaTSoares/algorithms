export default function troca(lista, indexAnalise) {

    let itemEmAnalise = lista[indexAnalise];
    let itemAnterior = lista[indexAnalise - 1];

    lista[indexAnalise] = itemAnterior;
    lista[indexAnalise - 1] = itemEmAnalise;
}