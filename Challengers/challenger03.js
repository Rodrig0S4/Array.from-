// 3. Criar um array [1, 2, 3, 4, 5, 6]

const mapFn = function (char, index) {
    return index +1
}
const result = Array.from({length: 6}, mapFn)

console.log(result)