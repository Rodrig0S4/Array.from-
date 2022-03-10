/*
5. Transforme o desafio anterior acima em uma função que irá receber 1 ou 2 argumentos.

- A função sempre irá retornar um array.
- Quando receber 1 argumento a função irá retornar de 1 até o número recebido.
- Quando receber 2 argumentos irá retornar do primeiro até o segundo argumento.

ex.: fn(4) // [1, 2, 3, 4 ] | fn(3,7) // [3,4,5,6,7]
*/

function range (start, stop) {
stop = stop === undefined ? start: stop
start = stop ===  start ? 1 : start

    let length = stop - start + 1

    const mapFn = (_, index) => start + index

    const result = Array.from({ length }, mapFn)

    console.log(result)
}

//range(4)
range(3, 7)
