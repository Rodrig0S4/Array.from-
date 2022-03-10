/**
 * 7. Crie um array de meses do ano, onde cada posição do array
 * corresponderá ao nomedo mês.
 * 
 * ex.: Janeiro, para o mês 0 e Dezembro para o mês 11.
 * 
 * Dicas: 
 * - Utilize `new Date(0,0)`para criar o mês de janeiro (modifique o segundo argumento para 11 e você
 * criará o mes de dezembro)
 * 
 * - Utilize o método receberá 2 argumentos, sendo o primeiro, uma string contendo o local da formatação
 * `pt-BR` e o segundo, um objeto que tenha a chave `month` com o valor `'long'`
 */

const mapFn = (_, numberOfMonth) => {
    const date = new Date(0, numberOfMonth)

    return date.toLocaleString('pt-BR', { month: 'long'})
}

const result = Array.from({length: 12}, mapFn)

console.log(result)