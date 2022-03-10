/* 6. Crie um array que tenha em suas posições de A - Z. 

Dicas:
 - Cada caracter de uma `String` corresponde a um número. Use `String.charCodeAt(0)` (sendo 0 a 
    posição inicial da cadeia da String) para pegar o número de referência da String desejada.
 - É possível transformar um número em uma String. Utilize `String.fromCharCode(<x>)` sendo x o
 número de referência do caracter.

 - Utilize a função anterior para criar um intervalo numérico correspondente de A - Z.


*/

function range (start, stop) {
    stop = stop === undefined ? start: stop
    start = stop ===  start ? 1 : start
    
        let length = stop - start + 1
    
        const mapFn = (_, index) => start + index
    
        const result = Array.from({ length }, mapFn)
    
        return result
    }
    
    
    const result = range(65, 90).map(n => String.fromCharCode(n))
    console.log(result)