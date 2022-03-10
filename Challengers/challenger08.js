/**
 * 8. Seguindo os mesmos passos do exercício anterior, crie os dias da semana em formato longo (domingo) e
 * curto (dom.)
 * 
 * Dicas:
 * - Oberserve que na criação da nova data  `new Date(0, 0, 0)` o primeiro argumento é a referência do ano, o
 * segundo é o mês e o terceiro, é quivalente ao dia da semana.
 * - Observe que o objeto do segundo parâmetro da função `.toLocaleString()` está se referindo ao mês
 * `month` e precisamos do dia da semana.
 * - long ou short ?
 */

const mapFn = (_, weekDayNumber) => {
const date = new Date(0, 0, weekDayNumber)
return date.toLocaleDateString('pt-BR', {weekday: 'narrow'}) //(narrow - short - long)
}

const result = Array.from({ length: 7 }, mapFn)
console.log(result)