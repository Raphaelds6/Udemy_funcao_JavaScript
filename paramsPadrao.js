//estratégia 1 para gerar valores padrão
function soma1(a, b, c){
    a = a || 1//caso a variável seja verificada verdadeira, a parte após o "ou" não será usada.
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), (soma1(3)), (soma1(1, 2, 3)), (soma1(0, 0, 0)))//nesse último caso volta como valor "3" e não valor "0"

//estratégia 2, 3 e 4 para gerar valores padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padrão ES2015, forma mais nova, reduzida e prática no JavaScript
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))